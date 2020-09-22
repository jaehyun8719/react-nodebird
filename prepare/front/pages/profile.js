import React from 'react';
import Head from 'next/head';

import AppLayout from "../components/AppLayout";
import NicknameEditForm from "../components/NicknameEditForm";
import FollowList from "../components/FollowList";

const Profile = () => {
  const followerList =[{nickname: '재현'}, {nickname: '바보'}, {nickname: '노드버드 오피셜'}];
  const followingList =[{nickname: '재현'}, {nickname: '바보'}, {nickname: '노드버드 오피셜'}];

  return (
    <>
      <Head>
        <title>내 프로필 | NodeBird</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉 목록" data={followerList} />
        <FollowList header="팔로워 목록" data={followingList} />
      </AppLayout>
    </>
  )
};

export default Profile;