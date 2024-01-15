'use client';

import React, { useEffect, useState } from 'react';
import UserExamSubmitListItem from './UserExamSubmitListItem';
import NoneUserExamSubmitListItem from './NoneUserExamSubmitListItem';
import Loading from '@/app/loading';

interface ExamSubmitListProps {
  eid: string;
  problemId: string;
}

export default function UserExamSubmitList({
  eid,
  problemId,
}: ExamSubmitListProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitListEmpty, setIsSumbitListEmpty] = useState(true);

  const numberOfItems = 10;

  useEffect(() => {
    setIsLoading(false);
    setIsSumbitListEmpty(false);
  }, []);

  if (isLoading) return <Loading />;
  if (isSubmitListEmpty) return <NoneUserExamSubmitListItem />;

  return (
    <tbody>
      {Array.from({ length: numberOfItems }, (_, idx) => (
        <UserExamSubmitListItem key={idx} eid={eid} problemId={problemId} />
      ))}
    </tbody>
  );
}
