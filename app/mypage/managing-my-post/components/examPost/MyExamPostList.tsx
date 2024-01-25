'use client';

import React, { useEffect, useState } from 'react';
import Loading from '@/app/loading';
import NoneMyExamPostListItem from './NoneMyExamPostListItem';
import MyExamPostListItem from './MyExamPostListItem';

export default function MyExamPostList() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMyExamPostEmpty, setIsMyExamListEmpty] = useState(true);

  const numberOfItems = 6;

  useEffect(() => {
    setIsLoading(false);
    setIsMyExamListEmpty(false);
  }, []);

  if (isLoading) return <Loading />;
  if (isMyExamPostEmpty) return <NoneMyExamPostListItem />;

  return (
    <tbody>
      {Array.from({ length: numberOfItems }, (_, idx) => (
        <MyExamPostListItem key={idx} eid={'60a5294a8d3b55eac70912f1'} />
      ))}
    </tbody>
  );
}
