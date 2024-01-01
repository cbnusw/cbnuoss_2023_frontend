'use client';

import Loading from '@/app/loading';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const MarkdownPreview = dynamic(
  () => import('@uiw/react-markdown-preview').then((mod) => mod.default),
  { ssr: false },
);

export default function NoticeDetail() {
  const [isExamPostReady, setIsExamPostReady] = useState(false);
  const [isMarkdownPreviewReady, setIsMarkdownPreviewReady] = useState(false);
  const router = useRouter();

  const handleDeleteExam = () => {
    let userResponse = confirm(
      '현재 공지사항 게시글을 삭제하시겠습니까?\n삭제 후 내용을 되돌릴 수 없습니다.',
    );
    if (!userResponse) return;
    alert('게시글을 삭제하였습니다.');
    router.push('/notices');
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
            <p className="text-2xl font-bold tracking-tight">
              시스템 이용 간 유의사항
            </p>
            <div className="flex justify-between pb-3 border-b border-gray-300">
              <div className="flex gap-3">
                <span className="font-semibold">
                  작성일: <span className="font-light">2023.07.12</span>
                </span>
              </div>
              <div className="flex gap-3">
                <span className="font-semibold">
                  작성자: <span className="font-light">신재혁</span>
                </span>
              </div>
            </div>
          </div>
          <div className="border-b mt-8 mb-4 pb-5">
            <MarkdownPreview
              className="markdown-preview"
              source={`
# 알고리즘 문제 채점 사이트 이용 간 유의사항
알고리즘 문제를 풀고 제출하실 때, 다음의 사항을 꼭 확인해 주세요.

> 상기 시스템은 베타 테스트 중에 있습니다.
> 사용에 있어 궁금하신 사항은 SW중심사업단 홈페이지의 E-help 데스크로 연락주세요.

## 1. 문제 이해

- 문제의 조건을 정확히 이해하고 풀이를 시작하세요. 부족한 부분은 문제에 있는 예제와 예시 해답을 이용하여 이해를 보완하세요.

## 2. 제출 형식

- 제출 형식이 정해져 있을 경우, 그에 맞게 코드를 작성하세요.

## 3. 실행 시간

- 복잡한 문제일수록 실행 시간에 더욱 주의해야 합니다. 
- 최적화 방법을 고려하고 시간 복잡도를 고려해 문제를 풀어보세요.

## 4. 코드 스타일

- 깔끔하고 이해하기 쉬운 코드를 작성하세요. 
- 가독성이 좋은 코드는 더 빨리 이해되고 디버깅하기도 쉽습니다.

## 5. 테스트 케이스

- 문제에서 주어진 테스트 케이스 뿐만 아니라, 자신만의 테스트 케이스도 작성해보세요. 
- 이를 통해 예상치 못한 에러나 예외 상황을 미리 파악하고 대비할 수 있습니다.

## 컴파일러 버전 정보

- **C** : GNU11
- **C++** : C++17
- **Python 2**: 2.7.17
- **Python 3**: 3.9.2
- **OpenJDK**: 1.8.0_292
- **Kotlin**: 1.5.31-release-548
- **Go**: 1.17.2
- **Node.js**: 10.24.1

감사합니다.
`}
            />
          </div>
          <div>
            <div className="flex gap-3 justify-end">
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
