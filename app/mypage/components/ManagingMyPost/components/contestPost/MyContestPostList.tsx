'use client';

import React, { useEffect, useState } from 'react';
import Loading from '@/app/loading';
import NoneMyContestPostListItem from './NoneMyContestPostListItem';
import MyContestPostListItem from './MyContestPostListItem';

export default function MyContestPostList() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMyContestPostEmpty, setIsMyContestListEmpty] = useState(true);

  const numberOfItems = 3;

  useEffect(() => {
    setIsLoading(false);
    setIsMyContestListEmpty(false);
  }, []);

  if (isLoading) return <Loading />;
  if (isMyContestPostEmpty) return <NoneMyContestPostListItem />;

  return (
    <tbody>
      {Array.from({ length: numberOfItems }, (_, idx) => (
        <MyContestPostListItem key={idx} cid={'60a5294a8d3b55eac70912f1'} />
      ))}
    </tbody>
  );
}
