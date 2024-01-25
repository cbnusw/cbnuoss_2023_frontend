import { useRouter } from 'next/navigation';
import React from 'react';

interface MyNoticePostListItemProps {
  nid: string;
}

export default function MyNoticePostListItem({
  nid,
}: MyNoticePostListItemProps) {
  const router = useRouter();

  return (
    <tr
      className="border-b dark:border-gray-700 text-xs text-center cursor-pointer hover:bg-gray-50 focus:bg-gray-50"
      onClick={(e) => {
        router.push(`/notices/${nid}`);
      }}
    >
      <th
        scope="row"
        className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        1
      </th>
      <td className="">시스템 이용 간 유의사항</td>
      <td className="">2023.06.26</td>
    </tr>
  );
}
