import { ExamSubmitInfo } from '@/app/types/exam';
import { formatDateToYYMMDDHHMM } from '@/app/utils/formatDate';
import { getCodeSubmitResultTypeDescription } from '@/app/utils/getCodeSubmitResultTypeDescription';
import { useRouter } from 'next/navigation';
import React from 'react';

interface ExamSubmitListItemProps {
  personalUserExamSubmitInfo: ExamSubmitInfo;
  eid: string;
  problemId: string;
  total: number;
  index: number;
}

export default function UserExamSubmitListItem({
  personalUserExamSubmitInfo,
  eid,
  problemId,
  total,
  index,
}: ExamSubmitListItemProps) {
  const router = useRouter();

  return (
    <tr
      className="border-b dark:border-gray-700 text-xs text-center cursor-pointer hover:bg-gray-50 focus:bg-gray-50"
      onClick={(e) => {
        router.push(
          `/exams/${eid}/problems/${problemId}/submits/${personalUserExamSubmitInfo._id}`,
        );
      }}
    >
      <th
        scope="row"
        className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {total - index}
      </th>
      <td className="">{personalUserExamSubmitInfo.problem.title}</td>
      <td
        className={`${
          personalUserExamSubmitInfo.result?.type === 'done'
            ? 'text-[#0076C0]'
            : 'text-red-500'
        } font-semibold`}
      >
        {getCodeSubmitResultTypeDescription(
          personalUserExamSubmitInfo.result?.type,
        )}
      </td>
      <td>
        <span>
          {(personalUserExamSubmitInfo.result?.memory / 1048576).toFixed(2)}{' '}
        </span>
        <span className="ml-[-1px] text-red-500">MB</span>
      </td>
      <td className="">
        <span>{personalUserExamSubmitInfo.result.time} </span>{' '}
        <span className="ml-[-1px] text-red-500">ms</span>
      </td>
      <td className="">{personalUserExamSubmitInfo.language}</td>
      <td className="">
        {formatDateToYYMMDDHHMM(personalUserExamSubmitInfo.createdAt)}
      </td>
    </tr>
  );
}
