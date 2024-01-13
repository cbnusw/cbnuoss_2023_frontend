'use client';

import React, { useEffect, useState } from 'react';
import UserExamSubmitListItem from './UserExamSubmitListItem';
import NoneUserExamSubmitListItem from './NoneUserExamSubmitListItem';

interface ExamSubmitListProps {
  eid: string;
  problemId: string;
}

export default function UserExamSubmitList({
  eid,
  problemId,
}: ExamSubmitListProps) {
  const [isSubmitListReady, setIsSumbitListReady] = useState(false);

  const numberOfItems = 10;

  useEffect(() => {
    setIsSumbitListReady(true);
  }, []);

  return isSubmitListReady ? (
    <tbody>
      {Array.from({ length: numberOfItems }, (_, idx) => (
        <UserExamSubmitListItem key={idx} eid={eid} problemId={problemId} />
      ))}
    </tbody>
  ) : (
    <NoneUserExamSubmitListItem />
  );
}
