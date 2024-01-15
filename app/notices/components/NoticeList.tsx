'use client';

import React, { useEffect, useState } from 'react';
import NoticeListItem from './NoticeListItem';
import NoneNoticeListItem from './NoneNoticeListItem';
import Loading from '@/app/loading';

export default function NoticeList() {
  const [isLoading, setIsLoading] = useState(true);
  const [isNoticeListEmpty, setIsNoticeListEmpty] = useState(true);

  useEffect(() => {
    setIsLoading(false);
    setIsNoticeListEmpty(false);
  }, []);

  if (isLoading) return <Loading />;
  if (isNoticeListEmpty) return <NoneNoticeListItem />;

  return (
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
  );
}
