'use client';

import React, { useEffect, useState } from 'react';
import Loading from '@/app/loading';
import NoneExamParticipantListItem from './NoneExamParticipantListItem';
import ExamParticipantListItem from './ExamParticipantListItem';

export default function ExamParticipantList() {
  const [isLoading, setIsLoading] = useState(true);
  const [isParticipantListEmpty, setIsParticipantListEmpty] = useState(true);

  const numberOfItems = 3;

  useEffect(() => {
    setIsLoading(false);
    setIsParticipantListEmpty(false);
  }, []);

  if (isLoading) return <Loading />;
  if (isParticipantListEmpty) return <NoneExamParticipantListItem />;

  return (
    <tbody>
      {Array.from({ length: numberOfItems }, (_, idx) => (
        <ExamParticipantListItem key={idx} eid={'645f82d1dfc11e0020d07253'} />
      ))}
    </tbody>
  );
}
