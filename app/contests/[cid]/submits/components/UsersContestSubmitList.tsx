'use client';

import React, { useEffect, useState } from 'react';
import UsersContestSubmitListItem from './UsersContestSubmitListItem';
import NoneUsersContestSubmitListItem from './NoneUsersContestSubmitListItem';

interface ContestSubmitListProps {
  cid: string;
}

export default function UsersContestSubmitList({
  cid,
}: ContestSubmitListProps) {
  const [isSubmitListReady, setIsSumbitListReady] = useState(false);

  const numberOfItems = 10;

  useEffect(() => {
    setIsSumbitListReady(true);
  }, []);

  return isSubmitListReady ? (
    <tbody>
      {Array.from({ length: numberOfItems }, (_, idx) => (
        <UsersContestSubmitListItem key={idx} cid={cid} />
      ))}
    </tbody>
  ) : (
    <NoneUsersContestSubmitListItem />
  );
}
