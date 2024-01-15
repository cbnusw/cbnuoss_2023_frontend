'use client';

import React, { useEffect, useState } from 'react';
import ContestListItem from './ContestListItem';
import NoneContestListItem from './NoneContestListItem';
import Loading from '@/app/loading';

export default function ContestList() {
  const [isLoading, setIsLoading] = useState(true);
  const [isContestListEmpty, setIsContestListEmpty] = useState(true);

  useEffect(() => {
    setIsLoading(false);
    setIsContestListEmpty(false);
  }, []);

  if (isLoading) return <Loading />;
  if (isContestListEmpty) return <NoneContestListItem />;

  return (
    <tbody>
      <ContestListItem />
      <ContestListItem />
      <ContestListItem />
      <ContestListItem />
      <ContestListItem />
      <ContestListItem />
      <ContestListItem />
      <ContestListItem />
      <ContestListItem />
      <ContestListItem />
    </tbody>
  );
}
