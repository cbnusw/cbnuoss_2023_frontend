import { useRouter } from 'next/navigation';
import React from 'react';

interface MyPracticePostListItemProps {
  pid: string;
}

export default function MyPracticePostListItem({
  pid,
}: MyPracticePostListItemProps) {
  const router = useRouter();

  return (
    <tr
      className="border-b dark:border-gray-700 text-xs text-center cursor-pointer hover:bg-gray-50 focus:bg-gray-50"
      onClick={(e) => {
        router.push(`/practices/${pid}`);
      }}
    >
      <th
        scope="row"
        className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        1
      </th>
      <td className="">A+B</td>
      <td className="">2023.07.18</td>
    </tr>
  );
}
