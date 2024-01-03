'use client';

import Loading from '@/app/loading';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const MarkdownPreview = dynamic(
  () => import('@uiw/react-markdown-preview').then((mod) => mod.default),
  { ssr: false },
);

export default function ExamDetail() {
  const [isExamPostReady, setIsExamPostReady] = useState(false);
  const [isMarkdownPreviewReady, setIsMarkdownPreviewReady] = useState(false);
  const [isApplyExam, setIsApplyExam] = useState(false);

  const router = useRouter();

  const handleApplyExam = () => {
    const userResponse = confirm('시험에 응시하시겠습니까?');
    if (!userResponse) return;

    setIsApplyExam(true);
    alert(
      '시험 응시가 완료되었습니다.\n시험 시간을 확인한 후, 해당 시간에 시작해 주세요',
    );
  };

  const handleCancelExam = () => {
    const userResponse = confirm(
      '시험 응시를 취소하시겠습니까?\n시험 시작 이후에는 다시 신청할 수 없습니다.',
    );
    if (!userResponse) return;

    setIsApplyExam(false);
    alert('시험 응시가 취소되었습니다.');
  };

  const handleDeleteExam = () => {
    const userResponse = confirm(
      '현재 시험 게시글을 삭제하시겠습니까?\n삭제 후 내용을 되돌릴 수 없습니다.',
    );
    if (!userResponse) return;
    alert('게시글을 삭제하였습니다.');
    router.push('/exams');
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
              2023-01-자료구조(소프트웨어학부 01반)
            </p>
            <div className="flex justify-between pb-3 border-b border-gray-300">
              <span className="font-semibold">
                제출 기간:
                {/* <span className="text-red-500 font-bold"> 49분 45초 남음</span> */}
                <span className="font-light">
                  {' '}
                  2023.07:13 15:00 ~ 2023.07.13 16:00{' '}
                  <span className="text-blue-500 font-semibold">
                    (41분 3초 전)
                  </span>
                </span>
                {/* <span className="text-red-500 font-bold"> 종료</span> */}
              </span>
              <div className="flex gap-3">
                <span className="font-semibold">
                  교과목명: <span className="font-light">자료구조</span>
                </span>
                <span className='relative bottom-[0.055rem] font-thin before:content-["|"]' />
                <span className="font-semibold">
                  작성자: <span className="font-light">노서영</span>
                </span>
              </div>
            </div>
          </div>
          <div className="border-b mt-8 mb-4 pb-5">
            <MarkdownPreview
              className="markdown-preview"
              source={`
# 자료구조 알고리즘 코딩 테스트 공지
안녕하세요, 여러분.

자료구조 과목에서 진행하는 **알고리즘 코딩 테스트**에 대해 공지합니다.

## 테스트 일정
- 날짜: 2023년 7월 13일 (목)
- 시간: 오후 3시 ~ 4시

## 테스트 방식
- 온라인으로 진행
- 개인 컴퓨터를 사용하여 코딩 테스트 진행
- Google Classroom에 공지된 링크를 통해 테스트 사이트 접속

## 테스트 범위
- 이번 테스트는 다음의 자료구조와 관련된 알고리즘에 대한 문제를 다룹니다:
            - 스택(Stack)과 큐(Queue)
            - 링크드 리스트(Linked List)
            - 트리(Tree)와 그래프(Graph)

## 기타 유의사항
- 본 테스트는 오픈 북 형태로 진행되나, 다른 사람과의 협업은 엄격히 금지합니다.
- 시작 시간에 맞춰 준비하여 테스트에 참가하시기 바랍니다.
- 테스트 중 문제가 발생하는 경우, 바로 저에게 연락해 주세요.

코딩 테스트를 통해 여러분의 알고리즘 구현 능력을 키울 수 있는 좋은 기회가 되길 바랍니다. 
모두 최선을 다해 보세요!

감사합니다.
`}
            />
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
                className="flex gap-[0.375rem] items-center text-white bg-[#0388ca] px-2 py-[0.4rem] rounded-[0.2rem] font-light focus:bg-[#007eb9] hover:bg-[#007eb9] box-shadow"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="18"
                  viewBox="0 -960 960 960"
                  width="18"
                  fill="white"
                >
                  <path d="M319-250h322v-60H319v60Zm0-170h322v-60H319v60ZM220-80q-24 0-42-18t-18-42v-680q0-24 18-42t42-18h361l219 219v521q0 24-18 42t-42 18H220Zm331-554h189L551-820v186Z" />
                </svg>
                문제 목록
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

          <div className="mt-2">
            <p className="text-2xl font-semibold mt-10 ">참여 방법</p>
            <div className="flex flex-col items-center gap-4 mt-4 mx-auto bg-[#fafafa] w-full py-[1.75rem] border border-[#e4e4e4] border-t-2 border-t-gray-400">
              {isApplyExam ? (
                <>
                  <button
                    onClick={handleCancelExam}
                    className="flex gap-[0.6rem] items-center w-fit h-11 text-[#3870e0] text-lg font-medium border-[1.5px] border-[#3870e0] px-4 py-[0.5rem] rounded-[3rem] box-shadow transition duration-75"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="25"
                      viewBox="0 -960 960 960"
                      width="25"
                      fill="#3870e0"
                    >
                      <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z" />
                    </svg>
                    시험 취소하기
                  </button>

                  <div className="flex flex-col gap-1 text-center">
                    <div className="text-[#777] text-xs">
                      시험 시작 전까지만{' '}
                      <span className="text-red-500">응시 취소가 가능</span>
                      합니다.
                    </div>
                    <div className="text-[#777] text-xs">
                      비정상적인 이력이 확인될 경우, 서비스 이용이 제한됩니다.
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <button
                    onClick={handleApplyExam}
                    className="flex gap-[0.6rem] items-center w-fit h-11 text-white text-lg font-medium bg-[#3870e0] px-4 py-[0.5rem] rounded-[3rem] focus:bg-[#3464c2] hover:bg-[#3464c2] box-shadow transition duration-75"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="25"
                      viewBox="0 -960 960 960"
                      width="25"
                      fill="white"
                    >
                      <path d="M480-120v-80h280v-560H480v-80h280q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H480Zm-80-160-55-58 102-102H120v-80h327L345-622l55-58 200 200-200 200Z" />
                    </svg>
                    시험 응시하기
                  </button>

                  <div className="flex flex-col gap-1 text-center">
                    <div className="text-[#777] text-xs">
                      시험 시작 후에는{' '}
                      <span className="text-red-500">응시가 불가능</span>
                      합니다.
                    </div>
                    <div className="text-[#777] text-xs">
                      시험 응시 전에 반드시 시험 내용을 자세히 읽어주시기
                      바랍니다.
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
}
