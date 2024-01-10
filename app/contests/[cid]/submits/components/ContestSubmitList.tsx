'use client';

import React, { useEffect, useState } from 'react';
import ContestSubmitListItem from './ContestSubmitListItem';
import NoneContestSubmitListItem from './NoneContestSubmitListItem';

interface ContestSubmitListProps {
  cid: string;
}

export default function ContestSubmitList({ cid }: ContestSubmitListProps) {
  const [isSubmitListReady, setIsSumbitListReady] = useState(false);

  const numberOfItems = 10;

  useEffect(() => {
    setIsSumbitListReady(true);
  }, []);

  return isSubmitListReady ? (
    <tbody>
      {Array.from({ length: numberOfItems }, (_, idx) => (
        <ContestSubmitListItem key={idx} cid={cid} />
      ))}
    </tbody>
  ) : (
    <NoneContestSubmitListItem />
  );
}
