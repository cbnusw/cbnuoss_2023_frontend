import { useRouter } from 'next/navigation';
import React from 'react';

interface ExamParticipantListItemProps {
  eid: string;
}

export default function ExamParticipantListItem({
  eid,
}: ExamParticipantListItemProps) {
  const router = useRouter();

  return (
    <tr
      className="border-b dark:border-gray-700 text-xs text-center cursor-pointer hover:bg-gray-50 focus:bg-gray-50"
      onClick={(e) => {
        router.push(`/exams/${eid}`);
      }}
    >
      <th
        scope="row"
        className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        1
      </th>
      <td className="">코딩테스트 1차</td>
      <td className="">2023-01-자료구조(소프트웨어학부 01반)</td>
    </tr>
  );
}
