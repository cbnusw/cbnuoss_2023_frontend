'use client';

import Loading from '@/app/loading';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

interface DefaultProps {
  params: {
    cid: string;
    problemId: string;
  };
}

const MarkdownPreview = dynamic(
  () => import('@uiw/react-markdown-preview').then((mod) => mod.default),
  { ssr: false },
);

export default function UserContestSubmit(props: DefaultProps) {
  const [isLoading, setIsLoading] = useState(true);

  const cid = props.params.cid;
  const problemId = props.params.problemId;

  const router = useRouter();

  const handleGoToContestSubmits = () => {
    router.push(`/contests/${cid}/problems/${problemId}/submits`);
  };

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) return <Loading />;

  return (
    <div className="mt-6 mb-24 px-5 2lg:px-0 overflow-x-auto">
      <div className="flex flex-col w-[60rem] mx-auto">
        <div className="flex justify-end items-center pb-3">
          <button
            onClick={handleGoToContestSubmits}
            className="flex gap-[0.375rem] items-center text-white bg-[#717171] px-2 py-[0.4rem] rounded-[0.2rem] font-light focus:bg-[#686868] hover:bg-[#686868] box-shadow"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="17.5"
              viewBox="0 -960 960 960"
              width="17.5"
              fill="white"
            >
              <path d="m313-440 196 196q12 12 11.5 28T508-188q-12 11-28 11.5T452-188L188-452q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l264-264q11-11 27.5-11t28.5 11q12 12 12 28.5T508-715L313-520h447q17 0 28.5 11.5T800-480q0 17-11.5 28.5T760-440H313Z" />
            </svg>
            뒤로가기
          </button>
        </div>
        <div className="border-y border-[#e4e4e4] border-t-2 border-t-gray-400">
          <MarkdownPreview
            className="markdown-preview"
            source={`
\`\`\`cpp
#include <iostream>

using namespace std;

int main(int argc, const char* argv[]) {
  ios_base::sync_with_stdio(false);
  cin.tie(0);

  int a, b;
  cin >> a >> b;
  cout << a + b;

  return 0;
}
\`\`\`
`}
          />
        </div>

        <div className="relative mt-10 dark:bg-gray-800 overflow-hidden rounded-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase dark:text-gray-400 text-center">
                <tr>
                  <th scope="col" className="px-4 py-2">
                    대회명
                  </th>
                  <th scope="col" className="px-4 py-2">
                    문제명
                  </th>
                  <th scope="col" className="px-4 py-2">
                    결과
                  </th>
                  <th scope="col" className="px-4 py-2">
                    메모리
                  </th>
                  <th scope="col" className="px-4 py-2">
                    시간
                  </th>
                  <th scope="col" className="px-4 py-2">
                    언어
                  </th>
                  <th scope="col" className="px-4 py-2">
                    제출 시간
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t dark:border-gray-700 text-xs text-center bg-[#f9f9f9]">
                  <th
                    scope="row"
                    className="py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    2023년 제2회 충청북도 대학생 프로그래밍 경진대회 본선
                  </th>
                  <td className="">A+B</td>
                  <td className="text-[#0076C0] font-semibold">정답</td>
                  <td>
                    <span>1527 </span>
                    <span className="ml-[-1px] text-red-500">KB</span>
                  </td>
                  <td className="">
                    <span>64 </span>{' '}
                    <span className="ml-[-1px] text-red-500">ms</span>
                  </td>
                  <td className="">C++17</td>
                  <td className="">2023.09.26 07:00:00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <div className="flex gap-3 justify-end"></div>
        </div>
      </div>
    </div>
  );
}
