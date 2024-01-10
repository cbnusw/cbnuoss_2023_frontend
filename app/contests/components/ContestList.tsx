'use client';

import React, { useEffect, useState } from 'react';
import ContestListItem from './ContestListItem';
import NoneContestListItem from './NoneContestListItem';

export default function ContestList() {
  const [isContestListReady, setIsContestListReady] = useState(false);

  useEffect(() => {
    setIsContestListReady(true);
  }, []);

  return isContestListReady ? (
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
  ) : (
    <NoneContestListItem />
  );
}
