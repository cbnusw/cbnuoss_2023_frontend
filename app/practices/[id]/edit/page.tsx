'use client';

import MyDropzone from '@/app/components/MyDropzone';
import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';

interface DefaultProps {
  params: {
    id: string;
  };
}

export default function EditPractice(props: DefaultProps) {
  const practiceInfo = {
    title: '2023년 제2회 충청북도 대학생 프로그래밍 경진대회 본선',
    maxExeTime: 123,
    maxMemCap: 456,
    problemPdfFileUrl: 'http://localhost:3000/pdfs/test.pdf',
    problemInAndOutFileUrls: [
      'http://localhost:3000/in_and_out/1.in',
      'http://localhost:3000/in_and_out/1.out',
      'http://localhost:3000/in_and_out/2.in',
      'http://localhost:3000/in_and_out/2.out',
      'http://localhost:3000/in_and_out/3.in',
      'http://localhost:3000/in_and_out/3.out',
    ],
  };

  const [practiceName, setPracticeName] = useState(practiceInfo.title);
  const [maxExeTime, setMaxExeTime] = useState<number>(practiceInfo.maxExeTime);
  const [maxMemCap, setMaxMemCap] = useState<number>(practiceInfo.maxMemCap);
  const [uploadedProblemPdfFileUrl, setUploadedPdfFileUrl] = useState(
    practiceInfo.problemPdfFileUrl,
  );
  const [uploadedProblemInAndOutFileUrls, setUploadedProblemInAndOutFileUrls] =
    useState<string[]>(practiceInfo.problemInAndOutFileUrls);

  const [isPracticeNameValidFail, setIsPracticeNameValidFail] = useState(false);
  const [isMaxExeTimeValidFail, setIsMaxExeTimeValidFail] = useState(false);
  const [isMaxMemCapValidFail, setIsMaxMemCapValidFail] = useState(false);
  const [
    isPracticeFileUploadingValidFail,
    setIsPracticeFileUploadingValidFail,
  ] = useState(false);
  const [
    isInAndOutFileUploadingValidFail,
    setIsInAndOutFileUploadingValidFail,
  ] = useState(false);

  const practiceNameRef = useRef<HTMLInputElement>(null);
  const maxExeTimeRef = useRef<HTMLInputElement>(null);
  const maxMemCapRef = useRef<HTMLInputElement>(null);

  const router = useRouter();

  const handlePracticeNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPracticeName(e.target.value);
    setIsPracticeNameValidFail(false);
  };

  const handleMaxExeTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaxExeTime(parseInt(e.target.value));
    setIsMaxExeTimeValidFail(false);
  };

  const handleMaxMemCapChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaxMemCap(parseInt(e.target.value));
    setIsMaxMemCapValidFail(false);
  };

  const handleCancelContestEdit = () => {
    const userResponse = confirm('연습문제 등록을 취소하시겠습니까?');
    if (!userResponse) return;

    router.push('/practices');
  };

  const handleEditPractice = () => {
    if (!practiceName) {
      alert('문제명을 입력해 주세요');
      window.scrollTo(0, 0);
      practiceNameRef.current?.focus();
      setIsPracticeNameValidFail(true);
      return;
    }

    if (!maxExeTime) {
      alert('최대 실행 시간을 입력해 주세요');
      window.scrollTo(0, 0);
      maxExeTimeRef.current?.focus();
      setIsMaxExeTimeValidFail(true);
      return;
    }

    if (!maxMemCap) {
      alert('최대 메모리 사용량을 입력해 주세요');
      window.scrollTo(0, 0);
      maxMemCapRef.current?.focus();
      setIsMaxMemCapValidFail(true);
      return;
    }

    if (!isPracticeFileUploadingValidFail) {
      alert('문제 파일(PDF)을 업로드해 주세요');
      window.scrollTo(0, 0);
      return;
    }

    if (!isInAndOutFileUploadingValidFail) {
      alert('입/출력 파일 셋(in/out)을 업로드해 주세요');
      window.scrollTo(0, document.body.scrollHeight);
      return;
    }

    alert('등록 기능 개발 예정');

    // console.log('PDF: ', uploadedProblemPdfFileUrl);
    // console.log('In/Out: ', uploadedProblemInAndOutFileUrls);
  };

  return (
    <div className="mt-2 px-5 2lg:px-0 overflow-x-auto">
      <div className="flex flex-col w-[60rem] mx-auto">
        <p className="text-2xl font-semibold">연습문제 등록</p>

        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-5 mt-5 mb-8">
            <div className="flex flex-col relative z-0 w-1/2 group">
              <input
                type="text"
                name="floating_first_name"
                className={`block pt-3 pb-[0.175rem] pl-0 pr-0 w-full font-normal text-gray-900 bg-transparent border-0 border-b border-gray-400 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-${
                  isPracticeNameValidFail ? 'pink' : 'blue'
                }-500 focus:border-${
                  isPracticeNameValidFail ? 'red' : 'blue'
                }-500 focus:outline-none focus:ring-0 peer`}
                placeholder=" "
                required
                value={practiceName}
                ref={practiceNameRef}
                onChange={handlePracticeNameChange}
              />
              <label
                htmlFor="floating_first_name"
                className={`peer-focus:font-light absolute text-base left-[0.1rem] font-light text-${
                  isPracticeNameValidFail ? 'red' : 'gray'
                }-500 dark:text-gray-400 duration-300 transform -translate-y-5 scale-75 top-3 -z-10 origin-[0] peer-focus:left-[0.1rem] peer-focus:text-${
                  isPracticeNameValidFail ? 'red' : 'blue'
                }-600 peer-focus:dark:text-${
                  isPracticeNameValidFail ? 'red' : 'blue'
                }-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-[1.25rem]`}
              >
                문제명
              </label>
              <p
                className={`text-${
                  isPracticeNameValidFail ? 'red' : 'gray'
                }-500 text-xs tracking-widest font-light mt-1`}
              >
                문제명을 입력해 주세요
              </p>
            </div>

            <div className="flex gap-5">
              <div className="flex flex-col relative z-0 w-1/3 group">
                <input
                  type="number"
                  name="floating_first_name"
                  className={`block pt-3 pb-[0.175rem] pl-0 pr-0 w-full font-normal text-gray-900 bg-transparent border-0 border-b border-gray-400 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-${
                    isMaxExeTimeValidFail ? 'pink' : 'blue'
                  }-500 focus:border-${
                    isMaxExeTimeValidFail ? 'red' : 'blue'
                  }-500 focus:outline-none focus:ring-0 peer`}
                  placeholder=" "
                  required
                  value={maxExeTime}
                  ref={maxExeTimeRef}
                  onChange={handleMaxExeTimeChange}
                />
                <label
                  htmlFor="floating_first_name"
                  className={`peer-focus:font-light absolute text-base left-[0.1rem] font-light text-${
                    isMaxExeTimeValidFail ? 'red' : 'gray'
                  }-500 dark:text-gray-400 duration-300 transform -translate-y-5 scale-75 top-3 -z-10 origin-[0] peer-focus:left-[0.1rem] peer-focus:text-${
                    isMaxExeTimeValidFail ? 'red' : 'blue'
                  }-600 peer-focus:dark:text-${
                    isMaxExeTimeValidFail ? 'red' : 'blue'
                  }-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-[1.25rem]`}
                >
                  최대 실행 시간
                </label>
                <p
                  className={`text-${
                    isMaxExeTimeValidFail ? 'red' : 'gray'
                  }-500 text-xs tracking-widest font-light mt-1`}
                >
                  테스트 당 최대 수행 시간을 ms 단위로 입력해주세요
                </p>
              </div>

              <div className="flex flex-col relative z-0 w-1/3 group">
                <input
                  type="number"
                  name="floating_first_name"
                  className={`block pt-3 pb-[0.175rem] pl-0 pr-0 w-full font-normal text-gray-900 bg-transparent border-0 border-b border-gray-400 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-${
                    isMaxMemCapValidFail ? 'pink' : 'blue'
                  }-500 focus:border-${
                    isMaxMemCapValidFail ? 'red' : 'blue'
                  }-500 focus:outline-none focus:ring-0 peer`}
                  placeholder=" "
                  required
                  value={maxMemCap}
                  ref={maxMemCapRef}
                  onChange={handleMaxMemCapChange}
                />
                <label
                  htmlFor="floating_first_name"
                  className={`peer-focus:font-light absolute text-base left-[0.1rem] font-light text-${
                    isMaxMemCapValidFail ? 'red' : 'gray'
                  }-500 dark:text-gray-400 duration-300 transform -translate-y-5 scale-75 top-3 -z-10 origin-[0] peer-focus:left-[0.1rem] peer-focus:text-${
                    isMaxMemCapValidFail ? 'red' : 'blue'
                  }-600 peer-focus:dark:text-${
                    isMaxMemCapValidFail ? 'red' : 'blue'
                  }-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-[1.25rem]`}
                >
                  최대 메모리 사용량
                </label>
                <p
                  className={`text-${
                    isMaxMemCapValidFail ? 'red' : 'gray'
                  }-500 text-xs tracking-widest font-light mt-1`}
                >
                  테스트 당 최대 사용 메모리를 MB 단위로 입력해주세요
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-lg">문제 파일</p>
            <MyDropzone
              type="pdf"
              guideMsg="문제 파일(PDF)을 이곳에 업로드해 주세요"
              setIsFileUploaded={setIsPracticeFileUploadingValidFail}
              isFileUploaded={isPracticeFileUploadingValidFail}
              initPdfUrl={practiceInfo.problemPdfFileUrl}
              initInAndOutFileUrls={[]}
              setUploadedPdfFileUrl={setUploadedPdfFileUrl}
              setUploadedProblemInAndOutFileUrls={
                setUploadedProblemInAndOutFileUrls
              }
            />
          </div>

          <div className="flex flex-col gap-1 mt-9">
            <p className="text-lg">입/출력 파일 셋</p>
            <div>
              <div className="flex mt-2 mb-4 ml-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="15"
                  viewBox="0 -960 960 960"
                  width="15"
                  fill="#5762b3"
                  className="relative left-[-1.375rem] top-[0.1rem]"
                >
                  <path d="M440.667-269.333h83.999V-520h-83.999v250.667Zm39.204-337.333q17.796 0 29.962-11.833Q522-630.332 522-647.824q0-18.809-12.021-30.825-12.021-12.017-29.792-12.017-18.52 0-30.354 11.841Q438-666.984 438-648.508q0 17.908 12.038 29.875 12.038 11.967 29.833 11.967Zm.001 547.999q-87.157 0-163.841-33.353-76.684-33.354-133.671-90.34-56.986-56.987-90.34-133.808-33.353-76.821-33.353-164.165 0-87.359 33.412-164.193 33.413-76.834 90.624-134.057 57.211-57.224 133.757-89.987t163.578-32.763q87.394 0 164.429 32.763 77.034 32.763 134.117 90 57.082 57.237 89.916 134.292 32.833 77.056 32.833 164.49 0 87.433-32.763 163.67-32.763 76.236-89.987 133.308-57.223 57.073-134.261 90.608-77.037 33.535-164.45 33.535Zm.461-83.999q140.18 0 238.59-98.744 98.411-98.744 98.411-238.923 0-140.18-98.286-238.59Q620.763-817.334 480-817.334q-139.846 0-238.59 98.286Q142.666-620.763 142.666-480q0 139.846 98.744 238.59t238.923 98.744ZM480-480Z" />
                </svg>
                <p
                  id="helper-checkbox-text"
                  className="relative left-[-0.8rem] text-xs font-normal text-[#5762b3] dark:text-gray-300"
                >
                  입력/출력 파일의 확장자는 서로 다르며, 파일명이 같은 것끼리
                  하나의 입/출력 세트로 묶입니다.
                </p>
              </div>
              <MyDropzone
                type="inOut"
                guideMsg="입/출력 파일(in, out)들을 이곳에 업로드해 주세요"
                setIsFileUploaded={setIsInAndOutFileUploadingValidFail}
                isFileUploaded={isInAndOutFileUploadingValidFail}
                initPdfUrl={''}
                initInAndOutFileUrls={practiceInfo.problemInAndOutFileUrls}
                setUploadedPdfFileUrl={setUploadedPdfFileUrl}
                setUploadedProblemInAndOutFileUrls={
                  setUploadedProblemInAndOutFileUrls
                }
              />
            </div>
          </div>

          <div className="mt-5 pb-2 flex justify-end gap-3">
            <button
              onClick={handleCancelContestEdit}
              className=" px-4 py-[0.4rem] rounded-[0.2rem] font-light"
            >
              취소
            </button>
            <button
              onClick={handleEditPractice}
              className=" text-white bg-[#3870e0] px-4 py-[0.4rem] rounded-[0.2rem] font-light focus:bg-[#3464c2] hover:bg-[#3464c2] box-shadow"
            >
              수정
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
