import { ContestSubmitInfo } from '@/app/types/contest';
import { formatDateToYYMMDDHHMM } from '@/app/utils/formatDate';
import { getCodeSubmitResultTypeDescription } from '@/app/utils/getCodeSubmitResultTypeDescription';
import { useRouter } from 'next/navigation';
import React from 'react';

interface ContestSubmitListItemProps {
  personalUserContestSubmitInfo: ContestSubmitInfo;
  cid: string;
  problemId: string;
  total: number;
  index: number;
}

export default function UserContestSubmitListItem({
  personalUserContestSubmitInfo,
  cid,
  problemId,
  total,
  index,
}: ContestSubmitListItemProps) {
  const router = useRouter();

  return (
    <tr
      className="border-b dark:border-gray-700 text-xs text-center cursor-pointer hover:bg-gray-50 focus:bg-gray-50"
      onClick={(e) => {
        router.push(
          `/contests/${cid}/problems/${problemId}/submits/${personalUserContestSubmitInfo._id}`,
        );
      }}
    >
      <th
        scope="row"
        className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {total - index}
      </th>
      <td className="">{personalUserContestSubmitInfo.problem.title}</td>
      <td
        className={`${
          personalUserContestSubmitInfo.result?.type === 'done'
            ? 'text-[#0076C0]'
            : 'text-red-500'
        } font-semibold`}
      >
        {getCodeSubmitResultTypeDescription(
          personalUserContestSubmitInfo.result?.type,
        )}
      </td>
      <td>
        <span>
          {(personalUserContestSubmitInfo.result.memory / 1048576).toFixed(2)}{' '}
        </span>
        <span className="ml-[-1px] text-red-500">MB</span>
      </td>
      <td className="">
        <span>{personalUserContestSubmitInfo.result.time} </span>{' '}
        <span className="ml-[-1px] text-red-500">ms</span>
      </td>
      <td className="">{personalUserContestSubmitInfo.language}</td>
      <td className="">
        {' '}
        {formatDateToYYMMDDHHMM(personalUserContestSubmitInfo.createdAt)}
      </td>
    </tr>
  );
}
