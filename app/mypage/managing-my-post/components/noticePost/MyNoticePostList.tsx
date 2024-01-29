'use client';

import React, { useEffect, useState } from 'react';
import Loading from '@/app/loading';
import NoneMyNoticePostListItem from './NoneMyNoticePostListItem';
import MyNoticePostListItem from './MyNoticePostListItem';

export default function MyNoticePostList() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMyPracticePostEmpty, setIsMyPracticeListEmpty] = useState(true);

  const numberOfItems = 3;

  useEffect(() => {
    setIsLoading(false);
    setIsMyPracticeListEmpty(false);
  }, []);

  if (isLoading) return <Loading />;
  if (isMyPracticePostEmpty) return <NoneMyNoticePostListItem />;

  return (
    <div className="mx-auto mt-6 w-full">
      <div className="border dark:bg-gray-800 relative overflow-hidden rounded-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400 text-center">
              <tr>
                <th scope="col" className="w-16 px-4 py-2">
                  번호
                </th>
                <th scope="col" className="px-4 py-2">
                  제목
                </th>
                <th scope="col" className="w-24 px-4 py-2">
                  작성일
                </th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: numberOfItems }, (_, idx) => (
                <MyNoticePostListItem
                  key={idx}
                  nid={'64a52966a1203700203b8ddd'}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
