import { ContestSubmitInfo } from '@/app/types/contest';
import { formatDateToYYMMDDHHMM } from '@/app/utils/formatDate';
import {
  getCodeSubmitResultTypeColor,
  getCodeSubmitResultTypeDescription,
} from '@/app/utils/getCodeSubmitResultTypeDescription';
import { useRouter } from 'next/navigation';
import React from 'react';

interface UsersContestSubmitListItemProps {
  contestSubmitInfo: ContestSubmitInfo;
  cid: string;
  total: number;
  page: number;
  index: number;
}

export default function UsersContestSubmitListItem({
  contestSubmitInfo,
  cid,
  total,
  page,
  index,
}: UsersContestSubmitListItemProps) {
  const router = useRouter();

  return (
    <tr
      className="border-b dark:border-gray-700 text-xs text-center cursor-pointer hover:bg-gray-50 focus:bg-gray-50"
      onClick={(e) => {
        contestSubmitInfo.result &&
          router.push(`/contests/${cid}/submits/${contestSubmitInfo._id}`);
      }}
    >
      <th
        scope="row"
        className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {total - (page - 1) * 10 - index}
      </th>
      <td className="">{contestSubmitInfo.user.university}</td>
      <td className="">{contestSubmitInfo.user.department}</td>
      <td className="">{contestSubmitInfo.user.no}</td>
      <td className="">{contestSubmitInfo.user.name}</td>
      <td className="">{contestSubmitInfo.problem.title}</td>
      <td
        className={`${
          contestSubmitInfo.result
            ? getCodeSubmitResultTypeColor(contestSubmitInfo.result.type)
            : ''
        } font-semibold`}
      >
        {contestSubmitInfo.result
          ? getCodeSubmitResultTypeDescription(contestSubmitInfo.result.type)
          : 'N/A'}
      </td>
      <td>
        <span>{(contestSubmitInfo.result?.memory / 1048576).toFixed(2)} </span>
        <span className="ml-[-1px] text-red-500">MB</span>
      </td>
      <td className="">
        <span>{contestSubmitInfo.result?.time} </span>
        <span className="ml-[-1px] text-red-500">ms</span>
      </td>
      <td className="">{contestSubmitInfo.language}</td>
      <td className="">
        {formatDateToYYMMDDHHMM(contestSubmitInfo.createdAt)}
      </td>
    </tr>
  );
}
