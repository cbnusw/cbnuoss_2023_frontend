'use client';

import React from 'react';

export default function Assignment() {
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
