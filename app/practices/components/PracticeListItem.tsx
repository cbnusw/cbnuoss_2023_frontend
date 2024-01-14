'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

export default function PracticeListItem() {
  const router = useRouter();

  return (
    <tr
      className="border-b dark:border-gray-700 text-xs text-center cursor-pointer hover:bg-gray-50 focus:bg-gray-50"
      onClick={(e) => {
        router.push('/practices/6461d43ec14a5a002b85e081');
      }}
    >
      <th
        scope="row"
        className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        1
      </th>
      <td className="hover:underline focus:underline">A+B</td>
      <td className="font-medium">신재혁</td>
    </tr>
  );
}
