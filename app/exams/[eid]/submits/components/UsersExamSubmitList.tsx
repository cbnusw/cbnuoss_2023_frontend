'use client';

import React, { useEffect, useState } from 'react';
import UsersExamSubmitListItem from './UsersExamSubmitListItem';
import NoneUsersExamSubmitListItem from './NoneUsersExamSubmitListItem';
import Loading from '@/app/loading';

interface UsersExamSubmitListProps {
  eid: string;
}

export default function UsersExamSubmitList({ eid }: UsersExamSubmitListProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitListEmpty, setIsSumbitListEmpty] = useState(true);

  const numberOfItems = 10;

  useEffect(() => {
    setIsLoading(false);
    setIsSumbitListEmpty(false);
  }, []);

  if (isLoading) return <Loading />;
  if (isSubmitListEmpty) return <NoneUsersExamSubmitListItem />;

  return (
    <tbody>
      {Array.from({ length: numberOfItems }, (_, idx) => (
        <UsersExamSubmitListItem key={idx} eid={eid} />
      ))}
    </tbody>
  );
}
