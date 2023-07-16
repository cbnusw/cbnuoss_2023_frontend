'use client';

import React, { useEffect, useState } from 'react';
import Exam from './Exam';
import NoneExamParticipant from './NoneExamPostInfo';

export default function ExamList() {
  const [isExamListReady, setIsExamListReady] = useState(false);

  useEffect(() => {
    setIsExamListReady(true);
  }, []);

  return isExamListReady ? (
    <tbody>
      <Exam />
      <Exam />
      <Exam />
      <Exam />
      <Exam />
      <Exam />
      <Exam />
      <Exam />
      <Exam />
      <Exam />
    </tbody>
  ) : null;
  // <NoneExamParticipant />
}
