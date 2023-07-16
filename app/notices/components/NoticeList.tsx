'use client';

import React, { useEffect, useState } from 'react';
import Notice from './Notice';
import NoneNoticeParticipant from './NoneNoticePostInfo';

export default function NoticeList() {
  const [isNoticeListReady, setIsNoticeListReady] = useState(false);

  useEffect(() => {
    setIsNoticeListReady(true);
  }, []);

  return isNoticeListReady ? (
    <tbody>
      <Notice />
      <Notice />
      <Notice />
      <Notice />
      <Notice />
      <Notice />
      <Notice />
      <Notice />
      <Notice />
      <Notice />
    </tbody>
  ) : null;
  //   <NoneNoticeParticipant />;
}
