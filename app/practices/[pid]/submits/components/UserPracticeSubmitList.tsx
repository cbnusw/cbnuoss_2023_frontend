'use client';

import React, { useEffect, useState } from 'react';
import UserPracticeSubmitListItem from './UserPracticeSubmitListItem';
import NoneUserPracticeSubmitListItem from './NoneUserPracticeSubmitListItem';
import Loading from '@/app/loading';

interface ExamSubmitListProps {
  pid: string;
  problemId: string;
}

export default function UserExamSubmitList({
  pid,
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
  if (isSubmitListEmpty) return <NoneUserPracticeSubmitListItem />;

  return (
    <tbody>
      {Array.from({ length: numberOfItems }, (_, idx) => (
        <UserPracticeSubmitListItem key={idx} pid={pid} problemId={problemId} />
      ))}
    </tbody>
  );
}
