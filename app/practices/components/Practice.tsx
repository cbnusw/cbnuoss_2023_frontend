'use client';

import React from 'react';

export default function Practice() {
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
      <td className="">기능개발</td>
      <td className="font-medium">신재혁</td>
      <td className="">3</td>
    </tr>
  );
}
