'use client';

import React, { useEffect, useState } from 'react';
import UserContestSubmitListItem from './UserContestSubmitListItem';
import NoneUserContestSubmitListItem from './NoneUserContestSubmitListItem';

interface ContestSubmitListProps {
  cid: string;
  problemId: string;
}

export default function UserContestSubmitList({
  cid,
  problemId,
}: ContestSubmitListProps) {
  const [isSubmitListReady, setIsSumbitListReady] = useState(false);

  const numberOfItems = 10;

  useEffect(() => {
    setIsSumbitListReady(true);
  }, []);

  return isSubmitListReady ? (
    <tbody>
      {Array.from({ length: numberOfItems }, (_, idx) => (
        <UserContestSubmitListItem key={idx} cid={cid} problemId={problemId} />
      ))}
    </tbody>
  ) : (
    <NoneUserContestSubmitListItem />
  );
}
