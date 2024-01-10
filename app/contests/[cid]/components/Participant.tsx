'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

export default function Participant() {
  const router = useRouter();

  return (
    <tr className="border-b dark:border-gray-700 text-xs text-center">
      <th
        scope="row"
        className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        2020123456
      </th>
      <td className="font-medium">홍길동</td>
      <td className="font-medium">충북대학교</td>
      <td className="font-medium">소프트웨어학과</td>
      <td className="font-medium">abc123@naver.com</td>
      <td className="font-medium">01012345678</td>
    </tr>
  );
}
