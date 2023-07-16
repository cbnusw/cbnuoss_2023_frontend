'use client';

import React, { useEffect, useState } from 'react';
import Practice from './Practice';
import NonePracticeParticipant from './NonePracticePostInfo';

export default function PracticeList() {
  const [isPracticeListReady, setIsPracticeListReady] = useState(false);

  useEffect(() => {
    setIsPracticeListReady(true);
  }, []);

  return isPracticeListReady ? (
    <tbody>
      <Practice />
      <Practice />
      <Practice />
      <Practice />
      <Practice />
      <Practice />
      <Practice />
      <Practice />
      <Practice />
      <Practice />
    </tbody>
  ) : null;
  //   <NonePracticeParticipant />;
}
