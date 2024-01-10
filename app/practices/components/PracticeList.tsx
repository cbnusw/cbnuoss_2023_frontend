'use client';

import React, { useEffect, useState } from 'react';
import PracticeListItem from './PracticeListItem';
import NonePracticeListItem from './NonePracticeListItem';

export default function PracticeList() {
  const [isPracticeListReady, setIsPracticeListReady] = useState(false);

  useEffect(() => {
    setIsPracticeListReady(true);
  }, []);

  return isPracticeListReady ? (
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
  ) : (
    <NonePracticeListItem />
  );
}
