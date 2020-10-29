import React, {useCallback, useState} from 'react';
import PropTypes from "prop-types";
import {useSelector} from "react-redux";
import {Avatar, Button, Card, Popover} from "antd";
import {EllipsisOutlined, HeartOutlined, HeartTwoTone, MessageOutlined, RetweetOutlined} from "@ant-design/icons";
import PostImages from "./PostImages";

const PostCard = ({post}) => {
  const [linked, setLinked] = useState(false);
  const [commentFormOpend, setCommentFormOpened] = useState(false);
  const onToggleLike = useCallback(() => {
    setLinked((prev) => !prev);
  }, []);
  const onToggleComment = useCallback(() => {
    setCommentFormOpened((prev) => !prev);
  }, []);
  const id = useSelector((state) => state.user.me?.id);

  return (
    <div style={{marginBottom: 20}}>
      <Card
        cover={post.images[0] && <PostImages images={post.images} />}
        actions={[
          <RetweetOutlined key="retweet"/>,
          linked
            ? <HeartTwoTone twoToneColor="#eb2f96" key="heart" onClick={onToggleLike}/>
            : <HeartOutlined key="heart" onClick={onToggleLike} />,
          <MessageOutlined key="comment" onClick={onToggleComment} />,
          <Popover key="more" content={(
            <Button.Group>
              {id && post.user.id === id
                ? (
                  <>
                    <Button>수정</Button>
                    <Button type="danger">삭제</Button>
                  </>
                )
                : <Button>신고</Button>}
            </Button.Group>
          )}>
            <EllipsisOutlined />
          </Popover>,
        ]}
      >
        <Card.Meta
          avatar={<Avatar>{post.user.nickname[0]}</Avatar>}
          title={post.user.nickname}
          description={post.content}
        />
      </Card>
      {commentFormOpend && (
        <div>
          댓글 부분
        </div>)}
      {/*<CommentForm />
      <Comments />*/}
    </div>
  );
};

PostCard.prototype = {
  post: PropTypes.shape({
    id: PropTypes.number,
    User: PropTypes.object,
    content: PropTypes.string,
    creatAt:PropTypes.object,
    Comments:PropTypes.arrayOf(PropTypes.object),
    images: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
}

export default PostCard;