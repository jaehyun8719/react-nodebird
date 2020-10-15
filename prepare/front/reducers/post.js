export const initialState = {
  mainPosts: [{
    id: 1,
    user: {
      id: 1,
      nickname: '도널드'
    },
    content: '첫 번째 게시글 #해시태그 #익스프레스',
    images: [{
      src: 'https://jaehyun8719.github.io/images/github.png',
    }, {
      src: 'https://cdn.pixabay.com/photo/2020/10/09/06/09/rabbit-5639615_960_720.jpg',
    }, {
      src: 'https://cdn.pixabay.com/photo/2020/10/07/10/51/mountains-5634817_960_720.jpg',
    }],
    comments: [{
      user: {
        nickname: 'nero',
      },
      content: '우와 개정판이 나왔군요~',
    }, {
      user: {
        nickname: 'hero',
      },
      content: '얼른 사고싶어요~',
    }]
  }],
  imagePaths: [],
  postAdded: false,
}

const ADD_POST = 'ADD_POST';
export const addPost = {
  type: ADD_POST,
}

const dummyPost = {
  id: 2,
  content: '더미데이터입니다.',
  user: {
    id: 1,
    nickname: '도널드',
  },
  images: [],
  comments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };
    default:
      return state;
  }
}

export default reducer;