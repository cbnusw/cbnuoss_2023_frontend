'use client';

import React, { useEffect, useState } from 'react';
import UsersContestSubmitListItem from './UsersContestSubmitListItem';
import NoneUsersContestSubmitListItem from './NoneUsersContestSubmitListItem';
import Loading from '@/app/loading';

interface UsersContestSubmitListProps {
  cid: string;
}

export default function UsersContestSubmitList({
  cid,
}: UsersContestSubmitListProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitListEmpty, setIsSumbitListEmpty] = useState(true);

  const numberOfItems = 10;

  useEffect(() => {
    setIsLoading(false);
    setIsSumbitListEmpty(false);
  }, []);

  if (isLoading) return <Loading />;
  if (isSubmitListEmpty) return <NoneUsersContestSubmitListItem />;

  return (
    <tbody>
      {Array.from({ length: numberOfItems }, (_, idx) => (
        <UsersContestSubmitListItem key={idx} cid={cid} />
      ))}
    </tbody>
  );
}
