import { PracticeSubmitInfo } from '@/app/types/practice';
import { formatDateToYYMMDDHHMM } from '@/app/utils/formatDate';
import { getCodeSubmitResultTypeDescription } from '@/app/utils/getCodeSubmitResultTypeDescription';
import { useRouter } from 'next/navigation';
import React from 'react';

interface PracticeSubmitListItemProps {
  personalUserPracticeSubmitInfo: PracticeSubmitInfo;
  pid: string;
  total: number;
  index: number;
}

export default function UserPracticeSubmitListItem({
  personalUserPracticeSubmitInfo,
  pid,
  total,
  index,
}: PracticeSubmitListItemProps) {
  const router = useRouter();

  return (
    <tr
      className="border-b dark:border-gray-700 text-xs text-center cursor-pointer hover:bg-gray-50 focus:bg-gray-50"
      onClick={(e) => {
        router.push(
          `/practices/${pid}/submits/${personalUserPracticeSubmitInfo._id}`,
        );
      }}
    >
      <th
        scope="row"
        className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {total - index}
      </th>
      <td
        className={`${
          personalUserPracticeSubmitInfo.result?.type === 'done'
            ? 'text-[#0076C0]'
            : 'text-red-500'
        } font-semibold`}
      >
        {getCodeSubmitResultTypeDescription(
          personalUserPracticeSubmitInfo.result?.type,
        )}
      </td>
      <td>
        <span>
          {(personalUserPracticeSubmitInfo.result?.memory / 1048576).toFixed(2)}{' '}
        </span>
        <span className="ml-[-1px] text-red-500">MB</span>
      </td>
      <td className="">
        <span>{personalUserPracticeSubmitInfo.result?.time} </span>{' '}
        <span className="ml-[-1px] text-red-500">ms</span>
      </td>
      <td className="">{personalUserPracticeSubmitInfo.language}</td>
      <td className="">
        {formatDateToYYMMDDHHMM(personalUserPracticeSubmitInfo.createdAt)}
      </td>
    </tr>
  );
}
