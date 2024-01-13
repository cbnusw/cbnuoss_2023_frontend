'use client';

import Loading from '@/app/loading';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';
import ExamProblemList from './components/ExamProblemList';

interface DefaultProps {
  params: {
    eid: string;
  };
}

export default function ExamProblems(props: DefaultProps) {
  const [isExamProblemListReady, setIsExamProblemListReady] = useState(false);
  const [
    isChagingExamProblemOrderActivate,
    setIsChangingExamProblemOrderActivate,
  ] = useState(false);

  const changingProblemOrderBtnRef = useRef<HTMLButtonElement>(null);

  const eid = props.params.eid;

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

  const handleChangeProblemOrder = () => {
    changingProblemOrderBtnRef.current?.blur();
    setIsChangingExamProblemOrderActivate((prev) => !prev);
    if (isChagingExamProblemOrderActivate) {
      alert('문제 순서를 변경하였습니다.');
    }
  };

  const handleRegisterExamProblem = () => {
    router.push(`/exams/${eid}/problems/register`);
  };

  useEffect(() => {
    setIsExamProblemListReady(true);
  }, []);

  return isExamProblemListReady ? (
    <div className="mt-6 mb-24 px-5 2lg:px-0 overflow-x-auto">
      <div className="flex flex-col w-[60rem] mx-auto">
        <div className="flex flex-col gap-8">
          <p className="text-2xl font-bold tracking-tight">
            <span className="mr-1">📃</span> 문제 목록
            <Link
              href={`/exams/${eid}`}
              className="mt-1 ml-1 text-base font-medium cursor-pointer hover:underline hover:text-[#0038a8] focus:underline focus:text-[#0038a8] text-[#1048b8]"
            >
              (시험: 2023-01-자료구조(소프트웨어학부 01반))
            </Link>
          </p>
          <div className="flex justify-between items-center pb-3 border-b border-gray-300">
            <div className="flex gap-3">
              {!isChagingExamProblemOrderActivate && (
                <>
                  <button
                    onClick={handleRegisterExamProblem}
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
                {isChagingExamProblemOrderActivate ? (
                  <>저장하기</>
                ) : (
                  <>순서 변경</>
                )}
              </button>
            </div>
            <div className="mt-3">
              <span className="font-semibold">
                시험 시간:{' '}
                <span className="text-red-500 font-bold">41분 3초 후 종료</span>
              </span>
            </div>
          </div>

          <section className="dark:bg-gray-900">
            <div className="mx-auto w-full">
              <div className="dark:bg-gray-800 relative overflow-hidden rounded-sm">
                <div className="overflow-x-auto">
                  <ExamProblemList
                    eid={eid}
                    isChagingExamProblemOrderActivate={
                      isChagingExamProblemOrderActivate
                    }
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
}
