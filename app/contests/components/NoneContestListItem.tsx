import React from 'react';

export default function NoneContestListItem() {
  return (
    <tr className="border-b dark:border-gray-700 text-xs text-center">
      <th
        scope="row"
        className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        1
      </th>
      <td className="text-sm">등록된 대회 정보가 없습니다</td>
      <td className="font-medium">-</td>
      <td className="font-medium">-</td>
      <td className="font-medium">-</td>
      <td className="font-medium">-</td>
    </tr>
  );
}
