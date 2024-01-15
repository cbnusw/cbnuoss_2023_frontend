import { useRouter } from 'next/navigation';
import React from 'react';

interface UsersContestSubmitListItemProps {
  cid: string;
}

export default function UsersContestSubmitListItem({
  cid,
}: UsersContestSubmitListItemProps) {
  const router = useRouter();

  return (
    <tr
      className="border-b dark:border-gray-700 text-xs text-center cursor-pointer hover:bg-gray-50 focus:bg-gray-50"
      onClick={(e) => {
        router.push(`/contests/${cid}/submits/${'650af6fe9c2734584192d5fb'}`);
      }}
    >
      <th
        scope="row"
        className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        1
      </th>
      <td className="">충북대학교</td>
      <td className="">소프트웨어학과</td>
      <td className="">2020123123</td>
      <td className="">홍길동</td>
      <td className="">A+B</td>
      <td className="text-[#0076C0] font-semibold">정답</td>
      <td>
        <span>1527 </span>
        <span className="ml-[-1px] text-red-500">KB</span>
      </td>
      <td className="">
        <span>64 </span> <span className="ml-[-1px] text-red-500">ms</span>
      </td>
      <td className="">C++17</td>
      <td className="">2023.09.26 07:00:00</td>
    </tr>
  );
}
