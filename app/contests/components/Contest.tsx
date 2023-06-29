'use client';

import React from 'react';

export default function Contest() {
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
      <td className="">
        제2회 충청북도 대학생 프로그래밍 경진대회 예선 [한국교통대학교 5/10]
      </td>
      <td className="font-medium">~ 2023.06.26. 03:00</td>
      <td className="text-red-500 font-medium">~ 2023.06.26. 06:00</td>
      <td className="font-medium">신재혁</td>
      <td className="">2023.05.09</td>
    </tr>
  );
}
