'use client';

import React, { useEffect, useState } from 'react';
import Contest from './Contest';
import NoneContestParticipant from './NoneContestPostInfo';

export default function ContestList() {
  const [isContestListReady, setIsContestListReady] = useState(false);

  useEffect(() => {
    setIsContestListReady(true);
  }, []);

  return isContestListReady ? (
    <tbody>
      <Contest />
      <Contest />
      <Contest />
      <Contest />
      <Contest />
      <Contest />
      <Contest />
      <Contest />
      <Contest />
      <Contest />
    </tbody>
  ) : null;
  // <NoneContestParticipant />
}
