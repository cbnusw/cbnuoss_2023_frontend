'use client';

import Link from 'next/link';
import ContestSubmitList from './components/ContestSubmitList';

interface DefaultProps {
  params: {
    cid: string;
  };
}

export default function ContestSubmits(props: DefaultProps) {
  const cid = props.params.cid;

  return (
    <div className="mt-2 px-5 2lg:px-0 overflow-x-auto">
      <div className="flex flex-col w-[60rem] mx-auto">
        <p className="flex items-center text-2xl font-semibold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="40"
            viewBox="0 -960 960 960"
            width="40"
            fill="#3478c6"
          >
            <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="40"
            viewBox="0 -960 960 960"
            width="40"
            className="ml-[-0.75rem]"
            fill="#3478c6"
          >
            <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
          </svg>
          코드 제출 목록
          <Link
            href={`/contests/${cid}`}
            className="mt-1 ml-1 text-base font-medium cursor-pointer hover:underline hover:text-[#0038a8] focus:underline focus:text-[#0038a8] text-[#1048b8]"
          >
            (대회: 2023년 제2회 충청북도 대학생 프로그래밍 경진대회 본선)
          </Link>
        </p>
        <div className="flex mt-5 mb-4">
          <div className="flex flex-col relative z-0 w-1/2 group">
            <input
              type="text"
              name="floating_first_name"
              className="block pl-7 pt-3 pb-[0.175rem] pr-0 w-full font-normal text-gray-900 bg-transparent border-0 border-b border-gray-400 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <div className="absolute pt-[0.9rem] left-[-0.9rem] flex items-center pl-3 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="21"
                viewBox="0 -960 960 960"
                width="21"
                fill="#464646"
                className="scale-x-[-1]"
              >
                <path d="M785.269-141.629 530.501-396.501q-29.502 26.199-69.036 40.003-39.533 13.805-80.64 13.805-100.978 0-170.677-69.711-69.698-69.71-69.698-169.473 0-99.764 69.423-169.558 69.423-69.795 169.62-69.795 100.198 0 169.974 69.757 69.776 69.756 69.776 169.593 0 41.752-14.411 81.136-14.41 39.385-40.064 70.298L820.05-176.667l-34.781 35.038ZM380.256-390.577q79.907 0 135.505-55.536t55.598-135.91q0-80.375-55.598-135.849-55.598-55.475-135.767-55.475-80.511 0-136.086 55.537-55.575 55.536-55.575 135.91 0 80.375 55.619 135.849 55.618 55.474 136.304 55.474Z" />
              </svg>
            </div>
            <label
              htmlFor="floating_first_name"
              className="peer-focus:font-light absolute text-base font-light text-gray-500 dark:text-gray-400 duration-300 transform -translate-x-[-1.75rem] -translate-y-5 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-[1.25rem]"
            >
              검색
            </label>
            <p className="text-gray-500 text-xs tracking-widest font-light mt-1">
              이름, 학번으로 검색
            </p>
          </div>
          <div className="relative ml-auto mt-auto bottom-[-0.75rem]">
            <div className="flex justify-end mb-2">
              <button
                onClick={() => alert('개발 예정')}
                className="flex gap-[0.375rem] items-center text-white bg-[#4fa16a] px-2 py-[0.4rem] rounded-[0.2rem] font-light focus:bg-[#3b8d56] hover:bg-[#3b8d56] box-shadow"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  width="18"
                  height="18"
                  fill="white"
                >
                  <path d="M 28.8125 0.03125 L 0.8125 5.34375 C 0.339844 5.433594 0 5.863281 0 6.34375 L 0 43.65625 C 0 44.136719 0.339844 44.566406 0.8125 44.65625 L 28.8125 49.96875 C 28.875 49.980469 28.9375 50 29 50 C 29.230469 50 29.445313 49.929688 29.625 49.78125 C 29.855469 49.589844 30 49.296875 30 49 L 30 1 C 30 0.703125 29.855469 0.410156 29.625 0.21875 C 29.394531 0.0273438 29.105469 -0.0234375 28.8125 0.03125 Z M 32 6 L 32 13 L 34 13 L 34 15 L 32 15 L 32 20 L 34 20 L 34 22 L 32 22 L 32 27 L 34 27 L 34 29 L 32 29 L 32 35 L 34 35 L 34 37 L 32 37 L 32 44 L 47 44 C 48.101563 44 49 43.101563 49 42 L 49 8 C 49 6.898438 48.101563 6 47 6 Z M 36 13 L 44 13 L 44 15 L 36 15 Z M 6.6875 15.6875 L 11.8125 15.6875 L 14.5 21.28125 C 14.710938 21.722656 14.898438 22.265625 15.0625 22.875 L 15.09375 22.875 C 15.199219 22.511719 15.402344 21.941406 15.6875 21.21875 L 18.65625 15.6875 L 23.34375 15.6875 L 17.75 24.9375 L 23.5 34.375 L 18.53125 34.375 L 15.28125 28.28125 C 15.160156 28.054688 15.035156 27.636719 14.90625 27.03125 L 14.875 27.03125 C 14.8125 27.316406 14.664063 27.761719 14.4375 28.34375 L 11.1875 34.375 L 6.1875 34.375 L 12.15625 25.03125 Z M 36 20 L 44 20 L 44 22 L 36 22 Z M 36 27 L 44 27 L 44 29 L 36 29 Z M 36 35 L 44 35 L 44 37 L 36 37 Z" />
                </svg>
                명단 다운로드
              </button>
            </div>
          </div>
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
                        대학
                      </th>
                      <th scope="col" className="px-4 py-2">
                        학과(부)
                      </th>
                      <th scope="col" className="px-4 py-2">
                        학번
                      </th>
                      <th scope="col" className="px-4 py-2">
                        이름
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
                  <ContestSubmitList cid={cid} />
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