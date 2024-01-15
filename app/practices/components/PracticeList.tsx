'use client';

import React, { useEffect, useState } from 'react';
import PracticeListItem from './PracticeListItem';
import NonePracticeListItem from './NonePracticeListItem';
import Loading from '@/app/loading';

export default function PracticeList() {
  const [isLoading, setIsLoading] = useState(true);
  const [isPracticeListEmpty, setIsPracticeListEmpty] = useState(true);

  useEffect(() => {
    setIsLoading(false);
    setIsPracticeListEmpty(false);
  }, []);

  if (isLoading) return <Loading />;
  if (isPracticeListEmpty) return <NonePracticeListItem />;

  return (
    <tbody>
      <PracticeListItem />
      <PracticeListItem />
      <PracticeListItem />
      <PracticeListItem />
      <PracticeListItem />
      <PracticeListItem />
      <PracticeListItem />
      <PracticeListItem />
      <PracticeListItem />
      <PracticeListItem />
    </tbody>
  );
}
