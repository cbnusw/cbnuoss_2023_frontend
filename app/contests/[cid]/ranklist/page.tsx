'use client';

import { useEffect, useState } from 'react';
import Loading from '@/app/loading';
import UserScoreInfoList from './components/UserScoreInfoList';
import NoneUserScoreInfoList from './components/NoneUserScoreInfoListItem';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import trophyImg from '@/public/images/trophy.png';

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
    <div className="mt-2 mb-24 px-5 2lg:px-0 overflow-x-auto">
      <div className="flex flex-col w-[60rem] mx-auto">
        <div className="flex flex-col gap-8">
          <p className="flex items-center text-2xl font-bold tracking-tight">
            <Image
              src={trophyImg}
              alt="trophy"
              width={80}
              height={0}
              quality={100}
              className="ml-[-1rem] fade-in-fast drop-shadow-lg"
            />
            <div className="lift-up">
              <span className="ml-2 text-3xl font-semibold tracking-wide">
                대회 순위
              </span>
              <Link
                href={`/contests/${cid}`}
                className="mt-1 ml-1 text-xl font-medium cursor-pointer hover:underline hover:text-[#0038a8] focus:underline focus:text-[#0038a8] text-[#1048b8]"
              >
                (2023년 제2회 충청북도 대학생 프로그래밍 경진대회 본선)
              </Link>
            </div>
          </p>
          <div className="flex justify-between items-center pb-3 border-b border-gray-300">
            <div className="flex gap-2">
              <button
                onClick={handleGoToContestProblems}
                className="flex justify-center items-center gap-[0.375rem] text-[#f9fafb] bg-green-500 px-2 py-[0.45rem] rounded-[6px] focus:bg-[#3e9368] hover:bg-[#3e9368]"
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
