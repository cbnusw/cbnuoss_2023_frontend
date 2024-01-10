'use client';

import React, { useEffect, useState } from 'react';
import ExamSubmitListItem from './ExamSubmitListItem';
import NoneExamSubmitListItem from './NoneExamSubmitListItem';

interface ExamSubmitListProps {
  eid: string;
}

export default function ExamSubmitList({ eid }: ExamSubmitListProps) {
  const [isSubmitListReady, setIsSumbitListReady] = useState(false);

  const numberOfItems = 10;

  useEffect(() => {
    setIsSumbitListReady(true);
  }, []);

  return isSubmitListReady ? (
    <tbody>
      {Array.from({ length: numberOfItems }, (_, idx) => (
        <ExamSubmitListItem key={idx} eid={eid} />
      ))}
    </tbody>
  ) : (
    <NoneExamSubmitListItem />
  );
}
