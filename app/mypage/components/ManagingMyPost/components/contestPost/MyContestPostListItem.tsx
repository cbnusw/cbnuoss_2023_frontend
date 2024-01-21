import { useRouter } from 'next/navigation';
import React from 'react';

interface MyContestPostListItemProps {
  cid: string;
}

export default function MyContestPostListItem({
  cid,
}: MyContestPostListItemProps) {
  const router = useRouter();

  return (
    <tr
      className="border-b dark:border-gray-700 text-xs text-center cursor-pointer hover:bg-gray-50 focus:bg-gray-50"
      onClick={(e) => {
        router.push(`/contests/${cid}`);
      }}
    >
      <th
        scope="row"
        className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        1
      </th>
      <td className="">
        2023년 제2회 충청북도 대학생 프로그래밍 경진대회 본선
      </td>

      <td className="">~ 2023.06.26. 03:00</td>
      <td className="">~ 2023.06.26. 06:00</td>
      <td className="">2023.07.18</td>
    </tr>
  );
}
