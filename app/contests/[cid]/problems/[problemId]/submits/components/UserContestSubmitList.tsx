'use client';

import React, { useEffect, useState } from 'react';
import UserContestSubmitListItem from './UserContestSubmitListItem';
import NoneUserContestSubmitListItem from './NoneUserContestSubmitListItem';
import Loading from '@/app/loading';

interface ContestSubmitListProps {
  cid: string;
  problemId: string;
}

export default function UserContestSubmitList({
  cid,
  problemId,
}: ContestSubmitListProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitListEmpty, setIsSumbitListEmpty] = useState(true);

  const numberOfItems = 10;

  useEffect(() => {
    setIsLoading(false);
    setIsSumbitListEmpty(false);
  }, []);

  if (isLoading) return <Loading />;
  if (isSubmitListEmpty) return <NoneUserContestSubmitListItem />;

  return (
    <tbody>
      {Array.from({ length: numberOfItems }, (_, idx) => (
        <UserContestSubmitListItem key={idx} cid={cid} problemId={problemId} />
      ))}
    </tbody>
  );
}
