'use client';

import { useEffect, useState } from 'react';
import Loading from '@/app/loading';
import UserScoreInfoList from './components/UserScoreInfoList';
import NoneUserScoreInfoList from './components/NoneUserScoreInfoListItem';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface DefaultProps {
  params: {
    cid: string;
  };
}

export default function ContestRankList(props: DefaultProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isUserScoreInfoListEmpty, setIsUserScoreInfoListEmpty] =
    useState(true);

  const cid = props.params.cid;

  const router = useRouter();

  const handleGoToContestProblems = () => {
    router.push(`/contests/${cid}/problems`);
  };

  useEffect(() => {
    setIsLoading(false);
    setIsUserScoreInfoListEmpty(false);
  }, []);

  if (isLoading) return <Loading />;

  return (
    <div className="mt-6 mb-24 px-5 2lg:px-0 overflow-x-auto">
      <div className="flex flex-col w-[60rem] mx-auto">
        <div className="flex flex-col gap-8">
          <p className="text-2xl font-bold tracking-tight">
            <span className="mr-2">🏆</span>
            대회 순위
            <Link
              href={`/contests/${cid}`}
              className="mt-1 ml-1 text-base font-medium cursor-pointer hover:underline hover:text-[#0038a8] focus:underline focus:text-[#0038a8] text-[#1048b8]"
            >
              (2023년 제2회 충청북도 대학생 프로그래밍 경진대회 본선)
            </Link>
          </p>
          <div className="flex justify-between items-center pb-3 border-b border-gray-300">
            <div className="flex gap-3">
              <button
                onClick={handleGoToContestProblems}
                className="flex gap-[0.375rem] items-center text-white bg-[#3870e0] px-2 py-[0.4rem] rounded-[0.2rem] font-light focus:bg-[#3464c2] hover:bg-[#3464c2] box-shadow"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 -960 960 960"
                  width="20"
                  fill="white"
                >
                  <path d="M320-240h320v-80H320v80Zm0-160h320v-80H320v80ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520h200L520-800v200Z" />
                </svg>
                문제 목록
              </button>
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
            <div className="mt-3">
              <span className="font-semibold">
                대회 시간:{' '}
                <span className="text-red-500 font-bold">41분 3초 후 종료</span>
              </span>
            </div>
          </div>
        </div>

        {isUserScoreInfoListEmpty ? (
          <NoneUserScoreInfoList />
        ) : (
          <>
            <div className="flex mt-4 justify-between items-center">
              <span>
                총:{' '}
                <span>
                  <span className="text-red-500">8</span>명
                </span>
              </span>
            </div>

            <div className="mt-4 mb-4 pb-5">
              <UserScoreInfoList cid={cid} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
