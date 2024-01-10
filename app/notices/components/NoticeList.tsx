'use client';

import React, { useEffect, useState } from 'react';
import NoticeListItem from './NoticeListItem';
import NoneNoticeListItem from './NoneNoticeListItem';

export default function NoticeList() {
  const [isNoticeListReady, setIsNoticeListReady] = useState(false);

  useEffect(() => {
    setIsNoticeListReady(true);
  }, []);

  return isNoticeListReady ? (
    <tbody>
      <NoticeListItem />
      <NoticeListItem />
      <NoticeListItem />
      <NoticeListItem />
      <NoticeListItem />
      <NoticeListItem />
      <NoticeListItem />
      <NoticeListItem />
      <NoticeListItem />
      <NoticeListItem />
    </tbody>
  ) : (
    <NoneNoticeListItem />
  );
}
