'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

interface UserScoreInfoListItemProps {
  cid: string;
  ranking: number;
}

export default function UserScoreInfoListItem({
  cid,
  ranking,
}: UserScoreInfoListItemProps) {
  const router = useRouter();

  const handleGoToTheProblem = (problemIdx: number) => {
    alert('개발 예정');
    // router.push(`/contests/${cid}/problems/${problemIdx}`);
  };

  return (
    <div className="flex justify-between min-h-[9rem] border border-gray-300 shadow-md">
      <div className="flex flex-col p-3">
        <div className="flex items-center h-fit">
          <div className="flex justify-center items-center w-[1.625rem] h-[1.625rem] bg-[#3870e0] rounded-sm">
            <span className="text-white font-semibold text-base">
              {ranking}
            </span>
          </div>
          <div className="ml-2">
            <span className="text-base">홍길동</span>{' '}
            <span className="text-xs text-gray-600">
              (충북대학교 소프트웨어학과)
            </span>
          </div>
        </div>
        <div className="flex flex-wrap mt-5 gap-3">
          <div className="relative flex flex-col justify-center items-center w-[5.5rem] h-[4.5rem] bg-[#3870e0] border border-[#3565c4] hover:brightness-90 duration-150">
            <div className="absolute top-[0.175rem] left-[0.175rem]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="5"
                viewBox="0 -960 960 960"
                width="5"
                fill="white"
              >
                <path d="M480.238-137q-71.145 0-133.868-27.023t-109.12-73.348q-46.398-46.325-73.324-108.826Q137-408.699 137-479.762q0-71.145 27.023-133.868t73.348-109.12q46.325-46.398 108.826-73.324Q408.699-823 479.762-823q71.145 0 133.868 27.023t109.12 73.348q46.398 46.325 73.324 108.826Q823-551.301 823-480.238q0 71.145-27.023 133.868t-73.348 109.12q-46.325 46.398-108.826 73.324Q551.301-137 480.238-137Z" />
              </svg>
            </div>
            <button
              className="text-white text-[0.825rem] underline font-medium hover:text-[#eee] focus:text-[#eee]"
              onClick={() => handleGoToTheProblem(1)}
            >
              문제 1번
            </button>
            <span className="text-white text-[0.825rem]">시도: 1회</span>
            <span className="text-white text-[0.825rem]">시간: 3분</span>
          </div>

          <div className="relative flex flex-col justify-center items-center w-[5.5rem] h-[4.5rem] bg-[#3870e0] border border-[#3565c4] hover:brightness-90 duration-150">
            <div className="absolute top-[0.175rem] left-[0.175rem]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="5"
                viewBox="0 -960 960 960"
                width="5"
                fill="white"
              >
                <path d="M480.238-137q-71.145 0-133.868-27.023t-109.12-73.348q-46.398-46.325-73.324-108.826Q137-408.699 137-479.762q0-71.145 27.023-133.868t73.348-109.12q46.325-46.398 108.826-73.324Q408.699-823 479.762-823q71.145 0 133.868 27.023t109.12 73.348q46.398 46.325 73.324 108.826Q823-551.301 823-480.238q0 71.145-27.023 133.868t-73.348 109.12q-46.325 46.398-108.826 73.324Q551.301-137 480.238-137Z" />
              </svg>
            </div>
            <button
              className="text-white text-[0.825rem] underline font-medium hover:text-[#eee] focus:text-[#eee]"
              onClick={() => handleGoToTheProblem(2)}
            >
              문제 2번
            </button>
            <span className="text-white text-[0.825rem]">시도: 1회</span>
            <span className="text-white text-[0.825rem]">시간: 3분</span>
          </div>

          <div className="relative flex flex-col justify-center items-center w-[5.5rem] h-[4.5rem] bg-[#e0e0e0] border border-[#d3d3d3] hover:brightness-90 duration-150">
            <div className="absolute top-[0.175rem] left-[0.175rem]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="5"
                viewBox="0 -960 960 960"
                width="5"
                fill="white"
              >
                <path d="M480.238-137q-71.145 0-133.868-27.023t-109.12-73.348q-46.398-46.325-73.324-108.826Q137-408.699 137-479.762q0-71.145 27.023-133.868t73.348-109.12q46.325-46.398 108.826-73.324Q408.699-823 479.762-823q71.145 0 133.868 27.023t109.12 73.348q46.398 46.325 73.324 108.826Q823-551.301 823-480.238q0 71.145-27.023 133.868t-73.348 109.12q-46.325 46.398-108.826 73.324Q551.301-137 480.238-137Z" />
              </svg>
            </div>
            <button
              className="text-[#3f3f3f] text-[0.825rem] underline font-medium hover:text-black focus:text-black"
              onClick={() => handleGoToTheProblem(3)}
            >
              문제 3번
            </button>
            <span className="text-[#3f3f3f] text-[0.825rem]">시도: 1회</span>
            <span className="text-[#3f3f3f] text-[0.825rem]">시간: 3분</span>
          </div>

          <div className="relative flex flex-col justify-center items-center w-[5.5rem] h-[4.5rem] bg-[#3870e0] border border-[#3565c4] hover:brightness-90 duration-150">
            <div className="absolute top-[0.175rem] left-[0.175rem]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="5"
                viewBox="0 -960 960 960"
                width="5"
                fill="white"
              >
                <path d="M480.238-137q-71.145 0-133.868-27.023t-109.12-73.348q-46.398-46.325-73.324-108.826Q137-408.699 137-479.762q0-71.145 27.023-133.868t73.348-109.12q46.325-46.398 108.826-73.324Q408.699-823 479.762-823q71.145 0 133.868 27.023t109.12 73.348q46.398 46.325 73.324 108.826Q823-551.301 823-480.238q0 71.145-27.023 133.868t-73.348 109.12q-46.325 46.398-108.826 73.324Q551.301-137 480.238-137Z" />
              </svg>
            </div>
            <button
              className="text-white text-[0.825rem] underline font-medium hover:text-[#eee] focus:text-[#eee]"
              onClick={() => handleGoToTheProblem(4)}
            >
              문제 4번
            </button>
            <span className="text-white text-[0.825rem]">시도: 1회</span>
            <span className="text-white text-[0.825rem]">시간: 3분</span>
          </div>

          <div className="relative flex flex-col justify-center items-center w-[5.5rem] h-[4.5rem] bg-[#e0e0e0] border border-[#d3d3d3] hover:brightness-90 duration-150">
            <div className="absolute top-[0.175rem] left-[0.175rem]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="5"
                viewBox="0 -960 960 960"
                width="5"
                fill="white"
              >
                <path d="M480.238-137q-71.145 0-133.868-27.023t-109.12-73.348q-46.398-46.325-73.324-108.826Q137-408.699 137-479.762q0-71.145 27.023-133.868t73.348-109.12q46.325-46.398 108.826-73.324Q408.699-823 479.762-823q71.145 0 133.868 27.023t109.12 73.348q46.398 46.325 73.324 108.826Q823-551.301 823-480.238q0 71.145-27.023 133.868t-73.348 109.12q-46.325 46.398-108.826 73.324Q551.301-137 480.238-137Z" />
              </svg>
            </div>
            <button
              className="text-[#3f3f3f] text-[0.825rem] underline font-medium hover:text-black focus:text-black"
              onClick={() => handleGoToTheProblem(5)}
            >
              문제 5번
            </button>
            <span className="text-[#3f3f3f] text-[0.825rem]">시도: 1회</span>
            <span className="text-[#3f3f3f] text-[0.825rem]">시간: 3분</span>
          </div>

          <div className="relative flex flex-col justify-center items-center w-[5.5rem] h-[4.5rem] bg-[#e0e0e0] border border-[#d3d3d3] hover:brightness-90 duration-150">
            <div className="absolute top-[0.175rem] left-[0.175rem]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="5"
                viewBox="0 -960 960 960"
                width="5"
                fill="white"
              >
                <path d="M480.238-137q-71.145 0-133.868-27.023t-109.12-73.348q-46.398-46.325-73.324-108.826Q137-408.699 137-479.762q0-71.145 27.023-133.868t73.348-109.12q46.325-46.398 108.826-73.324Q408.699-823 479.762-823q71.145 0 133.868 27.023t109.12 73.348q46.398 46.325 73.324 108.826Q823-551.301 823-480.238q0 71.145-27.023 133.868t-73.348 109.12q-46.325 46.398-108.826 73.324Q551.301-137 480.238-137Z" />
              </svg>
            </div>
            <button
              className="text-[#3f3f3f] text-[0.825rem] underline font-medium hover:text-black focus:text-black"
              onClick={() => handleGoToTheProblem(6)}
            >
              문제 6번
            </button>
            <span className="text-[#3f3f3f] text-[0.825rem]">시도: 1회</span>
            <span className="text-[#3f3f3f] text-[0.825rem]">시간: 3분</span>
          </div>

          <div className="relative flex flex-col justify-center items-center w-[5.5rem] h-[4.5rem] bg-[#e0e0e0] border border-[#d3d3d3] hover:brightness-90 duration-150">
            <div className="absolute top-[0.175rem] left-[0.175rem]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="5"
                viewBox="0 -960 960 960"
                width="5"
                fill="white"
              >
                <path d="M480.238-137q-71.145 0-133.868-27.023t-109.12-73.348q-46.398-46.325-73.324-108.826Q137-408.699 137-479.762q0-71.145 27.023-133.868t73.348-109.12q46.325-46.398 108.826-73.324Q408.699-823 479.762-823q71.145 0 133.868 27.023t109.12 73.348q46.398 46.325 73.324 108.826Q823-551.301 823-480.238q0 71.145-27.023 133.868t-73.348 109.12q-46.325 46.398-108.826 73.324Q551.301-137 480.238-137Z" />
              </svg>
            </div>
            <button
              className="text-[#3f3f3f] text-[0.825rem] underline font-medium hover:text-black focus:text-black"
              onClick={() => handleGoToTheProblem(7)}
            >
              문제 7번
            </button>
            <span className="text-[#3f3f3f] text-[0.825rem]">시도: 1회</span>
            <span className="text-[#3f3f3f] text-[0.825rem]">시간: 3분</span>
          </div>

          <div className="relative flex flex-col justify-center items-center w-[5.5rem] h-[4.5rem] bg-[#e0e0e0] border border-[#d3d3d3] hover:brightness-90 duration-150">
            <div className="absolute top-[0.175rem] left-[0.175rem]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="5"
                viewBox="0 -960 960 960"
                width="5"
                fill="white"
              >
                <path d="M480.238-137q-71.145 0-133.868-27.023t-109.12-73.348q-46.398-46.325-73.324-108.826Q137-408.699 137-479.762q0-71.145 27.023-133.868t73.348-109.12q46.325-46.398 108.826-73.324Q408.699-823 479.762-823q71.145 0 133.868 27.023t109.12 73.348q46.398 46.325 73.324 108.826Q823-551.301 823-480.238q0 71.145-27.023 133.868t-73.348 109.12q-46.325 46.398-108.826 73.324Q551.301-137 480.238-137Z" />
              </svg>
            </div>
            <button
              className="text-[#3f3f3f] text-[0.825rem] underline font-medium hover:text-black focus:text-black"
              onClick={() => handleGoToTheProblem(7)}
            >
              문제 8번
            </button>
            <span className="text-[#3f3f3f] text-[0.825rem]">시도: 1회</span>
            <span className="text-[#3f3f3f] text-[0.825rem]">시간: 3분</span>
          </div>
        </div>
      </div>

      <div className="flex justify-around w-32 border-l border-gray-300">
        <div className="flex flex-col w-full text-center bg-[#f7f7f7]">
          <div className="flex justify-center items-center text-[0.825rem] font-semibold bg-[#f7f7f7] h-8 border-b border-gray-300">
            점수
          </div>
          <div className="flex justify-center items-center bg-white h-full">
            10
          </div>
        </div>
        <div className="flex flex-col w-full text-center bg-[#f7f7f7]">
          <div className="flex justify-center items-center text-[0.825rem] font-semibold bg-[#f7f7f7] h-8 border-b border-l border-gray-300">
            패널티
          </div>
          <div className="flex justify-center items-center bg-white h-full border-l text-red-600">
            194
          </div>
        </div>
      </div>
    </div>
  );
}
