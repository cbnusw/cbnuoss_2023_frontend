'use client';

import Loading from '@/app/loading';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const PDFViewer = dynamic(() => import('@/app/components/PDFViewer'), {
  ssr: false,
});

const MarkdownPreview = dynamic(
  () => import('@uiw/react-markdown-preview').then((mod) => mod.default),
  { ssr: false },
);

export default function PracticeDetail() {
  const [isExamPostReady, setIsExamPostReady] = useState(false);
  const [isMarkdownPreviewReady, setIsMarkdownPreviewReady] = useState(false);
  const router = useRouter();

  const handleDeleteExam = () => {
    let userResponse = confirm(
      '현재 연습문제 게시글을 삭제하시겠습니까?\n삭제 후 내용을 되돌릴 수 없습니다.',
    );
    if (!userResponse) return;
    alert('게시글을 삭제하였습니다.');
    router.push('/practices');
  };

  useEffect(() => {
    setIsMarkdownPreviewReady(true);
    setIsExamPostReady(true);
  }, []);

  return isExamPostReady && isMarkdownPreviewReady ? (
    <div className="mt-6 mb-24 px-5 2lg:px-0 overflow-x-auto">
      <div className="flex flex-col w-[60rem] mx-auto">
        <div className="flex flex-col">
          <div className="flex flex-col gap-8">
            <p className="text-2xl font-bold tracking-tight">기능개발</p>
            <div className="flex justify-between pb-3 border-b border-gray-300">
              <div className="flex gap-3">
                <span className="font-semibold">
                  시간 제한:
                  <span className="font-mono font-light"> 1초</span>
                </span>
                <span className='relative bottom-[0.055rem] font-thin before:content-["|"]' />
                <span className="font-semibold">
                  메모리 제한:
                  <span className="font-mono font-light"> 5MB</span>
                </span>
              </div>
              <div className="flex gap-3">
                <span className="font-semibold">
                  작성자: <span className="font-light">노서영</span>
                </span>
              </div>
            </div>
          </div>
          <div className="gap-5 border-b mt-8 mb-4 pb-5">
            <MarkdownPreview
              className="markdown-preview"
              source={`\`\`\`C
// 두 정수의 합을 반환하는 함수
function add(int a, int b) {
  return a + b;
}

// 두 정수의 차이 값을 반환하는 함수
function sub(int a, int b) {
  return a - b;
}
\`\`\`
> (예시) 상단에 주어진 두 함수를 수정하지 않고 모두 사용하시오.`}
            />
            <PDFViewer pdfFileURL={'/pdfs/test.pdf'} />
          </div>
          <div>
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => alert('개발 예정')}
                className="flex gap-[0.375rem] items-center text-white bg-[#6860ff] px-2 py-[0.4rem] rounded-[0.2rem] font-light focus:bg-[#5951f0] hover:bg-[#5951f0] box-shadow"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 -960 960 960"
                  width="20"
                  fill="white"
                >
                  <path d="M320-242 80-482l242-242 43 43-199 199 197 197-43 43Zm318 2-43-43 199-199-197-197 43-43 240 240-242 242Z" />
                </svg>
                코드 제출 목록
              </button>
              <button
                onClick={() => alert('개발 예정')}
                className="flex gap-[0.375rem] items-center text-white bg-[#eba338] px-2 py-[0.4rem] rounded-[0.2rem] font-light focus:bg-[#dc9429] hover:bg-[#dc9429] box-shadow"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 -960 960 960"
                  width="20"
                  fill="white"
                >
                  <path d="M794-666 666-794l42-42q17-17 42.5-16.5T793-835l43 43q17 17 17 42t-17 42l-42 42Zm-42 42L248-120H120v-128l504-504 128 128Z" />
                </svg>
                게시글 수정
              </button>
              <button
                onClick={handleDeleteExam}
                className="flex gap-[0.375rem] items-center text-white bg-red-500 px-2 py-[0.4rem] rounded-[0.2rem] font-light focus:bg-[#e14343] hover:bg-[#e14343] box-shadow"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 -960 960 960"
                  width="20"
                  fill="white"
                >
                  <path d="m361-299 119-121 120 121 47-48-119-121 119-121-47-48-120 121-119-121-48 48 120 121-120 121 48 48ZM261-120q-24 0-42-18t-18-42v-570h-41v-60h188v-30h264v30h188v60h-41v570q0 24-18 42t-42 18H261Z" />
                </svg>
                게시글 삭제
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
}
