'use client';

import React, { useEffect, useState } from 'react';
import Loading from '@/app/loading';
import NoneMyNoticePostListItem from './NoneMyNoticePostListItem';
import MyNoticePostListItem from './MyNoticePostListItem';

export default function MyNoticePostList() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMyPracticePostEmpty, setIsMyPracticeListEmpty] = useState(true);

  const numberOfItems = 3;

  useEffect(() => {
    setIsLoading(false);
    setIsMyPracticeListEmpty(false);
  }, []);

  if (isLoading) return <Loading />;
  if (isMyPracticePostEmpty) return <NoneMyNoticePostListItem />;

  return (
    <tbody>
      {Array.from({ length: numberOfItems }, (_, idx) => (
        <MyNoticePostListItem key={idx} nid={'64a52966a1203700203b8ddd'} />
      ))}
    </tbody>
  );
}
