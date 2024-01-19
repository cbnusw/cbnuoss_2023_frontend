import { useRouter } from 'next/navigation';
import React from 'react';

interface PracticeSubmitListItemProps {
  pid: string;
  problemId: string;
}

export default function UserPracticeSubmitListItem({
  pid,
  problemId,
}: PracticeSubmitListItemProps) {
  const router = useRouter();

  return (
    <tr
      className="border-b dark:border-gray-700 text-xs text-center cursor-pointer hover:bg-gray-50 focus:bg-gray-50"
      onClick={(e) => {
        router.push(`/practices/${pid}/submits/${'65445155c4fc3d9d4396ae0e'}`);
      }}
    >
      <th
        scope="row"
        className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        1
      </th>
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
