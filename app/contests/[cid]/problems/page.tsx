'use client';

import Loading from '@/app/loading';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';
import ContestProblemList from './components/ContestProblemList';

interface DefaultProps {
  params: {
    cid: string;
  };
}

export default function ContestProblems(props: DefaultProps) {
  const [
    isChagingContestProblemOrderActivate,
    setIsChangingContestProblemOrderActivate,
  ] = useState(false);

  const changingProblemOrderBtnRef = useRef<HTMLButtonElement>(null);

  const cid = props.params.cid;

  const [todos, setTodos] = useState([
    { id: '650ae1a19c2734584192d58e', problemTitle: 'A+B' },
    { id: '650af3809c2734584192d5b2', problemTitle: 'A-B' },
    { id: '650af7209c2734584192d603', problemTitle: '삼각형' },
    { id: '650af7379c2734584192d612', problemTitle: '피보나치 수' },
    { id: '650ce0110b8de0052a8cb971', problemTitle: '순열의 개수' },
    { id: '650ce0110b8de0052a8cb925', problemTitle: '가방 정리' },
    { id: '650ce0110b8de0052a1cb976', problemTitle: '카드 색칠' },
  ]);

  const router = useRouter();

  const handleGoToContestRankList = () => {
    router.push(`/contests/${cid}/ranklist`);
  };

  const handleRegisterContestProblem = () => {
    router.push(`/contests/${cid}/problems/register`);
  };

  const handleChangeProblemOrder = () => {
    changingProblemOrderBtnRef.current?.blur();
    setIsChangingContestProblemOrderActivate((prev) => !prev);
    if (isChagingContestProblemOrderActivate) {
      alert('문제 순서를 변경하였습니다.');
    }
  };

  return (
    <div className="mt-6 mb-24 px-5 2lg:px-0 overflow-x-auto">
      <div className="flex flex-col w-[60rem] mx-auto">
        <div className="flex flex-col gap-8">
          <p className="text-2xl font-bold tracking-tight">
            <span className="mr-1">📃</span> 문제 목록
            <Link
              href={`/contests/${cid}`}
              className="mt-1 ml-1 text-base font-medium cursor-pointer hover:underline hover:text-[#0038a8] focus:underline focus:text-[#0038a8] text-[#1048b8]"
            >
              (대회: 2023년 제2회 충청북도 대학생 프로그래밍 경진대회 본선)
            </Link>
          </p>
          <div className="flex justify-between items-center pb-3 border-b border-gray-300">
            <div className="flex gap-3">
              {!isChagingContestProblemOrderActivate && (
                <>
                  <button
                    onClick={handleGoToContestRankList}
                    className="flex gap-[0.375rem] items-center text-white bg-[#0388ca] px-2 py-[0.4rem] rounded-[0.2rem] font-light focus:bg-[#007eb9] hover:bg-[#007eb9] box-shadow"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="23"
                      viewBox="0 -960 960 960"
                      width="23"
                      fill="white"
                    >
                      <path d="M298-120v-60h152v-148q-54-11-96-46.5T296-463q-74-8-125-60t-51-125v-44q0-25 17.5-42.5T180-752h104v-88h392v88h104q25 0 42.5 17.5T840-692v44q0 73-51 125t-125 60q-16 53-58 88.5T510-328v148h152v60H298Zm-14-406v-166H180v44q0 45 29.5 78.5T284-526Zm392 0q45-10 74.5-43.5T780-648v-44H676v166Z" />
                    </svg>
                    대회 순위
                  </button>
                  <button
                    onClick={handleRegisterContestProblem}
                    className="flex gap-[0.375rem] items-center text-white bg-green-500 px-2 py-[0.4rem] rounded-[0.2rem] font-light focus:bg-[#3e9368] hover:bg-[#3e9368] box-shadow"
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
                    문제 등록
                  </button>
                </>
              )}

              <button
                onClick={handleChangeProblemOrder}
                ref={changingProblemOrderBtnRef}
                className="flex gap-[0.375rem] items-center text-white bg-[#ff5fb1] px-2 py-[0.4rem] rounded-[0.2rem] font-light focus:bg-[#f555a8] hover:bg-[#f555a8] box-shadow"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="23"
                  viewBox="0 -960 960 960"
                  width="23"
                  fill="white"
                >
                  <path d="M241.5-478.5q0 44.5 16.75 87T311-313l13 13v-61.5q0-15.5 11-26.5t26.5-11q15.5 0 26.5 11t11 26.5v157q0 15.5-11 26.5t-26.5 11h-157q-15.5 0-26.5-11t-11-26.5q0-15.5 11-26.5t26.5-11H277l-18-17q-49.5-46.5-71-103.75T166.5-478.5q0-91.5 47-167t126.5-115q13.5-7 27.5-.5t19 21.5q5 14.5-.25 28.25T367.5-690q-58 31.5-92 87.75t-34 123.75Zm477-3q0-44.5-16.75-87T649-647l-13-13v61.5q0 15.5-11 26.5t-26.5 11q-15.5 0-26.5-11t-11-26.5v-157q0-15.5 11-26.5t26.5-11h157q15.5 0 26.5 11t11 26.5q0 15.5-11 26.5t-26.5 11H683l18 17q48 48 70.25 104.5t22.25 115q0 91.5-47 166.5t-126 115q-13.5 7-27.75.75T573.5-220.5q-5-14.5.25-28.25T592.5-270q58-31.5 92-87.75t34-123.75Z" />
                </svg>
                {isChagingContestProblemOrderActivate ? (
                  <>저장하기</>
                ) : (
                  <>순서 변경</>
                )}
              </button>
            </div>
            <div className="mt-3">
              <span className="font-semibold">
                대회 시간:{' '}
                <span className="text-red-500 font-bold">41분 3초 후 종료</span>
              </span>
            </div>
          </div>

          <section className="dark:bg-gray-900">
            <div className="mx-auto w-full">
              <div className="dark:bg-gray-800 relative overflow-hidden rounded-sm">
                <div className="overflow-x-auto">
                  <ContestProblemList
                    cid={cid}
                    isChagingContestProblemOrderActivate={
                      isChagingContestProblemOrderActivate
                    }
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
