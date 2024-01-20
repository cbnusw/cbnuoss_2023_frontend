'use client';

import React, { useEffect, useState } from 'react';
import Loading from '@/app/loading';
import NoneMyPracticePostListItem from './NoneMyPracticePostListItem';
import MyPracticePostListItem from './MyPracticePostListItem';

export default function MyPracticePostList() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMyPracticePostEmpty, setIsMyPracticeListEmpty] = useState(true);

  const numberOfItems = 5;

  useEffect(() => {
    setIsLoading(false);
    setIsMyPracticeListEmpty(false);
  }, []);

  if (isLoading) return <Loading />;
  if (isMyPracticePostEmpty) return <NoneMyPracticePostListItem />;

  return (
    <tbody>
      {Array.from({ length: numberOfItems }, (_, idx) => (
        <MyPracticePostListItem key={idx} pid={'6461d43ec14a5a002b85e081'} />
      ))}
    </tbody>
  );
}
