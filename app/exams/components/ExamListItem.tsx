'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

export default function ExamListItem() {
  const router = useRouter();

  return (
    <tr
      className="border-b dark:border-gray-700 text-xs text-center cursor-pointer hover:bg-gray-50 focus:bg-gray-50"
      onClick={() => {
        router.push('exams/645f82d1dfc11e0020d07253');
      }}
    >
      <th
        scope="row"
        className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        1
      </th>
      <td className="">2023-01-자료구조(소프트웨어학부 01반)</td>
      <td className="font-medium">코딩테스트 3차</td>
      <td className="font-medium">노서영</td>
      <td className="font-medium">
        <span className="text-red-500 ">
          2023.06.26. 03:00<span> ~ </span>2023.06.26. 03:00
        </span>
      </td>
    </tr>
  );
}
