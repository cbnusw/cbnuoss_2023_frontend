'use client';

import React, { useEffect, useState } from 'react';
import Loading from '@/app/loading';
import NoneContestParticipantListItem from './NoneContestParticipantListItem';
import ContestParticipantListItem from './ContestParticipantListItem';

export default function ContestParticipantList() {
  const [isLoading, setIsLoading] = useState(true);
  const [isParticipantListEmpty, setIsParticipantListEmpty] = useState(true);

  const numberOfItems = 5;

  useEffect(() => {
    setIsLoading(false);
    setIsParticipantListEmpty(false);
  }, []);

  if (isLoading) return <Loading />;
  if (isParticipantListEmpty) return <NoneContestParticipantListItem />;

  return (
    <tbody>
      {Array.from({ length: numberOfItems }, (_, idx) => (
        <ContestParticipantListItem
          key={idx}
          cid={'60a5294a8d3b55eac70912f1'}
        />
      ))}
    </tbody>
  );
}
