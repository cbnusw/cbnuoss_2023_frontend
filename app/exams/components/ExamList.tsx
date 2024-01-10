'use client';

import React, { useEffect, useState } from 'react';
import ExamListItem from './ExamListItem';
import NoneExamListItem from './NoneExamListItem';

export default function ExamList() {
  const [isExamListReady, setIsExamListReady] = useState(false);

  useEffect(() => {
    setIsExamListReady(true);
  }, []);

  return isExamListReady ? (
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
  ) : (
    <NoneExamListItem />
  );
}
