'use client';

import Link from 'next/link';
import UserPracticeSubmitList from './components/UserPracticeSubmitList';
import { useEffect, useState } from 'react';
import Loading from '@/app/loading';
import Image from 'next/image';
import codeImg from '@/public/images/code.png';

interface DefaultProps {
  params: {
    pid: string;
    problemId: string;
  };
}

export default function UserPracticeSubmits(props: DefaultProps) {
  const [isLoading, setIsLoading] = useState(true);

  const pid = props.params.pid;
  const problemId = props.params.problemId;

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) return <Loading />;

  return (
    <div className="mt-2 px-5 2lg:px-0 overflow-x-auto">
      <div className="flex flex-col w-[60rem] mx-auto">
        <div className="flex flex-col mb-8">
          <p className="flex items-center text-2xl font-semibold tracking-tight">
            <Image
              src={codeImg}
              alt="code"
              width={70}
              height={0}
              quality={100}
              className="ml-[-1rem] drop-shadow-lg fade-in-fast"
            />
            <div className="lift-up">
              <span className="ml-4 text-3xl font-semibold tracking-wide">
                내 제출 현황
              </span>
              <Link
                href={`/practices/${pid}`}
                className="mt-1 ml-1 text-xl font-medium cursor-pointer hover:underline hover:text-[#0038a8] focus:underline focus:text-[#0038a8] text-[#1048b8]"
              >
                (A+B)
              </Link>
            </div>
          </p>
        </div>

        <section className="dark:bg-gray-900">
          <div className="mx-auto w-full">
            <div className="border dark:bg-gray-800 relative overflow-hidden rounded-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400 text-center">
                    <tr>
                      <th scope="col" className="px-4 py-2">
                        번호
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
                  <UserPracticeSubmitList pid={pid} problemId={problemId} />
                </table>
              </div>
            </div>
            <nav
              className="flex flex-col md:flex-row text-xs justify-between items-start md:items-center space-y-3 md:space-y-0 pl-1 mt-3"
              aria-label="Table navigation"
            >
              <span className="text-gray-500 dark:text-gray-400">
                <span className="text-gray-500 dark:text-white"> 1 - 10</span>{' '}
                of
                <span className="text-gray-500 dark:text-white"> 1000</span>
              </span>
              <ul className="inline-flex items-stretch -space-x-px">
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center h-full py-1.5 px-[0.3rem] ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    <span className="sr-only">Previous</span>
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-400 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    1
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-400 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    2
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    aria-current="page"
                    className="flex items-center justify-center text-sm z-10 py-2 px-3 leading-tight text-primary-600 bg-primary-50 border border-primary-300 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                  >
                    3
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-400 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    ...
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-400 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    100
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center h-full py-1.5 px-[0.3rem] leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    <span className="sr-only">Next</span>
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </section>
      </div>
    </div>
  );
}
