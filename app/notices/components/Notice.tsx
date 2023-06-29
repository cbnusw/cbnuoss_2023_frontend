'use client';

import React from 'react';

export default function Notice() {
  return (
    <tr
      className="border-b dark:border-gray-700 text-xs text-center cursor-pointer hover:bg-gray-50 focus:bg-gray-50"
      onClick={(e) => {
        alert('개발 예정');
      }}
    >
      <th
        scope="row"
        className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        1
      </th>
      <td className="">시스템 이용 간 유의사항</td>
      <td className="font-medium">신재혁</td>
      <td className="font-medium">2023.06.26</td>
      <td className="font-medium">5</td>
    </tr>
  );
}
