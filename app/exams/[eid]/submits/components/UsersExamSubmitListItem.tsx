import { ExamSubmitInfo } from '@/app/types/exam';
import { formatDateToYYMMDDHHMM } from '@/app/utils/formatDate';
import { getCodeSubmitResultTypeDescription } from '@/app/utils/getCodeSubmitResultTypeDescription';
import { useRouter } from 'next/navigation';
import React from 'react';

interface UsersExamSubmitListItemProps {
  examSubmitInfo: ExamSubmitInfo;
  eid: string;
  total: number;
  page: number;
  index: number;
}

export default function UsersExamSubmitListItem({
  examSubmitInfo,
  eid,
  total,
  page,
  index,
}: UsersExamSubmitListItemProps) {
  const router = useRouter();

  return (
    <tr
      className="border-b dark:border-gray-700 text-xs text-center cursor-pointer hover:bg-gray-50 focus:bg-gray-50"
      onClick={(e) => {
        router.push(`/exams/${eid}/submits/${examSubmitInfo._id}`);
      }}
    >
      <th
        scope="row"
        className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {total - (page - 1) * 10 - index}
      </th>
      <td className="">{examSubmitInfo.user.no}</td>
      <td className="">{examSubmitInfo.user.name}</td>
      <td className="">{examSubmitInfo.problem.title}</td>
      <td
        className={`${
          examSubmitInfo.result.type === 'done'
            ? 'text-[#0076C0]'
            : 'text-red-500'
        } font-semibold`}
      >
        {getCodeSubmitResultTypeDescription(examSubmitInfo.result.type)}
      </td>
      <td>
        <span>{(examSubmitInfo.result.memory / 1048576).toFixed(2)} </span>
        <span className="ml-[-1px] text-red-500">MB</span>
      </td>
      <td className="">
        <span>{examSubmitInfo.result.time} </span>{' '}
        <span className="ml-[-1px] text-red-500">ms</span>
      </td>
      <td className="">{examSubmitInfo.language}</td>
      <td className="">{formatDateToYYMMDDHHMM(examSubmitInfo.createdAt)}</td>
    </tr>
  );
}
