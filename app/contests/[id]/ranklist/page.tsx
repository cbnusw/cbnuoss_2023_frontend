'use client';

import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Loading from '@/app/loading';
import UserScoreInfoList from './components/UserScoreInfoList';
import NoneUserScoreInfoList from './components/NoneUserScoreInfoList';

interface DefaultProps {
  params: {
    id: string;
  };
}

const MarkdownPreview = dynamic(
  () => import('@uiw/react-markdown-preview').then((mod) => mod.default),
  { ssr: false },
);

export default function ExamDetail(props: DefaultProps) {
  const [isContestPostReady, setIsContestPostReady] = useState(false);
  const [isMarkdownPreviewReady, setIsMarkdownPreviewReady] = useState(false);
  const [isUserScoreInfoListReady, setIsUserScoreInfoListReady] =
    useState(true);

  const cid = props.params.id;

  const router = useRouter();

  const handleGoToContestInfo = () => {
    router.push(`/contests/${cid}`);
  };

  useEffect(() => {
    setIsContestPostReady(true);
    setIsMarkdownPreviewReady(true);
  }, []);

  return isContestPostReady && isMarkdownPreviewReady ? (
    <div className="mt-6 mb-24 px-5 2lg:px-0 overflow-x-auto">
      <div className="flex flex-col w-[60rem] mx-auto">
        <div className="flex flex-col">
          <div className="flex flex-col gap-8">
            <p className="text-2xl font-bold tracking-tight">
              🏆{' '}
              <span className="text-[#1048b8]">
                2023년 제2회 충청북도 대학생 프로그래밍 경진대회 본선
              </span>{' '}
              순위
            </p>
            <div className="flex justify-between items-center pb-3 border-b border-gray-300">
              <div className="flex gap-3">
                <button
                  onClick={() => alert('개발 예정')}
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
                  onClick={handleGoToContestInfo}
                  className="flex gap-[0.375rem] items-center text-white bg-slate-500 px-2 py-[0.4rem] rounded-[0.2rem] font-light focus:bg-[#596478] hover:bg-[#596478] box-shadow"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 -960 960 960"
                    width="20"
                    fill="white"
                  >
                    <path d="M280-280h280v-80H280v80Zm0-160h400v-80H280v80Zm0-160h400v-80H280v80Zm-80 480q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z" />
                  </svg>
                  대회 정보
                </button>
              </div>
              <div className="mt-3">
                <span className="font-semibold">
                  <span className="text-red-500 font-semibold">
                    41분 3초 후 종료
                  </span>
                </span>
              </div>
            </div>
          </div>

          {isUserScoreInfoListReady ? (
            <>
              <div className="flex mt-4 justify-between items-center">
                <span>
                  총: <span className="text-red-500">8명</span>
                </span>
              </div>

              <div className="mt-4 mb-4 pb-5">
                <UserScoreInfoList cid={cid} />
              </div>
            </>
          ) : (
            <NoneUserScoreInfoList />
          )}
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
}
