'use client';

import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Participant from './components/Participant';
import Loading from '@/app/loading';

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
  const [isApplyContest, setIsApplyContest] = useState(false);

  const cid = props.params.id;

  const router = useRouter();

  const handleGoToContestRankList = () => {
    router.push(`/contests/${cid}/ranklist`);
  };

  const handleCancelContest = () => {
    const userResponse = confirm(
      '대회 참가 신청을 취소하시겠습니까?\n참가신청 기간 이후에는 다시 신청할 수 없습니다.',
    );
    if (!userResponse) return;

    setIsApplyContest(false);
    alert('대회 참가 신청이 취소되었습니다.');
  };

  const handleEditContest = () => {
    router.push(`/contests/${cid}/edit`);
  };

  const handleDeleteExam = () => {
    const userResponse = confirm(
      '현재 대회 게시글을 삭제하시겠습니까?\n삭제 후 내용을 되돌릴 수 없습니다.',
    );
    if (!userResponse) return;

    alert('게시글을 삭제하였습니다.');
    router.push('/contests');
  };

  const handleApplyContest = () => {
    const userResponse = confirm('대회 참가 신청을 하시겠습니까?');
    if (!userResponse) return;

    setIsApplyContest(true);
    alert(
      '대회 참가 신청이 완료되었습니다.\n대회 시간을 확인한 후, 해당 시간에 참가해 주세요',
    );
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
              2023년 제2회 충청북도 대학생 프로그래밍 경진대회 본선
            </p>
            <div className="flex justify-between pb-3 border-b border-gray-300">
              <div className="flex gap-3">
                <span className="font-semibold">
                  참가신청 기간:
                  <span className="font-light">
                    {' '}
                    2023.07.13 12:00 ~ 2023.07.13 13:00{' '}
                  </span>
                </span>
                <span className='relative bottom-[0.055rem] font-thin before:content-["|"]' />
                <span className="font-semibold">
                  대회 시간:
                  {/* <span className="text-red-500 font-bold">
                  {' '}
                  49분 45초 남음
                </span> */}
                  <span className="font-light">
                    {' '}
                    2023.07.13 17:00 ~ 2023.07.13 18:00{' '}
                    <span className="text-blue-500 font-semibold">
                      (41분 3초 전)
                    </span>
                  </span>
                  {/* <span className="text-red-500 font-bold"> 종료</span> */}
                </span>
              </div>
              <div className="flex gap-3">
                <span className="font-semibold">
                  작성자: <span className="font-light">노서영</span>
                </span>
              </div>
            </div>
          </div>
          <div className="border-b mt-8 mb-4 pb-5">
            {isMarkdownPreviewReady ? (
              <MarkdownPreview
                className="markdown-preview"
                source={`
# 2023년 제2회 충청북도 대학생 프로그래밍 경진대회 본선

본선: **7월 8일 (토) 14:00~16:00 (대면)**  
장소: **충북대학교 학연산 241호, 271호**

### 시상
- 최우수상(1명) 충북도지사상, 상금 100만원
- 우수상(2명) 충북AI·SW교육공유협의체장상, 상금 50만원
- 장려상(7명) 충북대학교 SW중심대학사업단장상, 상금 20만원

> 장려상의 인원 및 상금은 참가 대학교 수에 따라 변경될 수 있음
> 협의체 미참여 대학은 합산하여 우수자 1명 수상
> 최우수, 우수 1,2,3위가 모두 같은 학교일 경우 3위는 장려상 수상, 그 외의 학교 중 가장 높은 점수를 획득한 참여자가 우수상 수상.

## 주최
- 주최: 충북AI·SW교육공유협의체
- 주관: 충북대학교 SW중심대학사업단
- 공동주관: 건국대학교, 공군사관학교, 서원대학교, 청주대학교, 충북대학교, 한국교통대학교

**후원: 충북도청**

![2](https://github.com/cbnusw/cbnuoss_2023_frontend/assets/56868605/639eb260-6567-472c-8c17-79d62e2e81fd)
`}
              />
            ) : null}
          </div>
          <div>
            <div className="flex gap-3 justify-end">
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
                onClick={handleEditContest}
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
              {isApplyContest ? (
                <>
                  <button
                    onClick={handleCancelContest}
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
                    대회 참가 취소하기
                  </button>

                  <div className="flex flex-col gap-1 text-center">
                    <div className="text-[#777] text-xs">
                      대회 시작 전까지만{' '}
                      <span className="text-red-500">신청 취소가 가능</span>
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
                    onClick={handleApplyContest}
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
                    대회 참가 신청하기
                  </button>

                  <div className="flex flex-col gap-1 text-center">
                    <div className="text-[#777] text-xs">
                      대회 시작 후에는{' '}
                      <span className="text-red-500">신청이 불가능</span>
                      합니다.
                    </div>
                    <div className="text-[#777] text-xs">
                      참가 신청 이전에 반드시 대회 내용을 자세히 읽어주시기
                      바랍니다.
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="mt-8 py-2">
            <p className="text-2xl font-semibold">참가자</p>
            <div className="flex mt-4 justify-between items-center">
              <span>
                신청자 수: <span className="text-red-500">8</span>명
              </span>
              <div className="flex gap-3">
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
            <div className="border mt-3 dark:bg-gray-800 relative overflow-hidden rounded-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400 text-center">
                    <tr>
                      <th scope="col" className="px-4 py-2">
                        학번
                      </th>
                      <th scope="col" className="px-4 py-2">
                        이름
                      </th>
                      <th scope="col" className="px-4 py-2">
                        소속 대학
                      </th>
                      <th scope="col" className="px-4 py-2">
                        소속 학과
                      </th>
                      <th scope="col" className="px-4 py-2">
                        이메일
                      </th>
                      <th scope="col" className="px-4 py-2">
                        연락처
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <Participant />
                    <Participant />
                    <Participant />
                    <Participant />
                    <Participant />
                    <Participant />
                    <Participant />
                    <Participant />
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
}
