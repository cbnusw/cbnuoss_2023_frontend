'use client';

import React, { useEffect, useState } from 'react';
import ExamListItem from './ExamListItem';
import NoneExamListItem from './NoneExamListItem';
import Loading from '@/app/loading';

export default function ExamList() {
  const [isLoading, setIsLoading] = useState(true);
  const [isExamListEmpty, setIsExamListEmpty] = useState(true);

  useEffect(() => {
    setIsLoading(false);
    setIsExamListEmpty(false);
  }, []);

  if (isLoading) return <Loading />;
  if (isExamListEmpty) return <NoneExamListItem />;

  return (
    <tbody>
      <ExamListItem />
      <ExamListItem />
      <ExamListItem />
      <ExamListItem />
      <ExamListItem />
      <ExamListItem />
      <ExamListItem />
      <ExamListItem />
      <ExamListItem />
      <ExamListItem />
    </tbody>
  );
}
