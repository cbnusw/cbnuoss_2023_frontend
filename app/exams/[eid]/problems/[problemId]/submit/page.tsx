'use client';

import MyDropzone from '@/app/components/MyDropzone';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface DefaultProps {
  params: {
    eid: string;
    problemId: string;
  };
}

export default function SubmitExamProblemCode(props: DefaultProps) {
  const [selectedSubmitLanguage, setSelectedSubmitLanguage] =
    useState('언어 선택 *');
  const [uploadedCodeFileUrl, setUploadedCodeFileUrl] = useState('');

  const [
    isSelectedSubmitLanguageValidFail,
    setIsSelectedSubmitLanguageValidFail,
  ] = useState(false);
  const [isCodeFileUploadingValidFail, setIsCodeFileUploadingValidFail] =
    useState(false);

  const eid = props.params.eid;
  const problemId = props.params.eid;

  const router = useRouter();

  const handleGoToExamProblem = () => {
    router.push(`/exams/${eid}/problems/${problemId}`);
  };

  const handlSelectSubmitLanguage = (
    e: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setSelectedSubmitLanguage(e.target.value);
    setIsSelectedSubmitLanguageValidFail(false);
  };

  const handleSubmitExamProblemCode = () => {
    if (selectedSubmitLanguage === '언어 선택 *') {
      alert('제출 언어를 선택해 주세요');
      window.scrollTo(0, 0);
      setIsSelectedSubmitLanguageValidFail(true);
      return;
    }

    if (!isCodeFileUploadingValidFail) {
      alert('소스 코드 파일을 업로드해 주세요');
      window.scrollTo(0, 0);
      return;
    }

    router.push(`/exams/${eid}/problems/${problemId}/submits`);
  };

  return (
    <div className="mt-6 mb-24 px-5 2lg:px-0 overflow-x-auto">
      <div className="flex flex-col w-[60rem] mx-auto">
        <div className="flex flex-col gap-8">
          <p className="flex items-center text-2xl font-bold tracking-tight">
            {' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="40"
              viewBox="0 -960 960 960"
              width="40"
              fill="#3478c6"
            >
              <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="40"
              viewBox="0 -960 960 960"
              width="40"
              className="ml-[-0.75rem]"
              fill="#3478c6"
            >
              <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
            </svg>
            코드 제출
            <Link
              href={`/exams/${eid}/problems/${problemId}`}
              className="mt-1 ml-1 text-base font-medium cursor-pointer hover:underline hover:text-[#0038a8] focus:underline focus:text-[#0038a8] text-[#1048b8]"
            >
              (A+B)
            </Link>
          </p>
          <div className="flex justify-between pb-3 border-b border-gray-300">
            <div className="flex gap-3">
              <span className="font-semibold">
                시간 제한:
                <span className="font-mono font-light">
                  {' '}
                  <span>1</span>초
                </span>
              </span>
              <span className='relative bottom-[0.055rem] font-thin before:content-["|"]' />
              <span className="font-semibold">
                메모리 제한:
                <span className="font-mono font-light">
                  {' '}
                  <span className="mr-1">5</span>MB
                </span>
              </span>
            </div>
            <div className="flex gap-3">
              <span className="font-semibold">
                시험:{' '}
                <span className="font-light">
                  2023-01-자료구조(소프트웨어학부 01반)
                </span>
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 mt-8 pb-5">
          <div className="w-1/2">
            <select
              name="languages"
              id="lang"
              className={`text-sm w-full pl-0 py-1 ${
                selectedSubmitLanguage === '언어 선택 *' &&
                isSelectedSubmitLanguageValidFail
                  ? 'text-red-500'
                  : 'text-gray-500'
              }   bg-transparent border-0 border-b border-${
                isSelectedSubmitLanguageValidFail ? 'red-500' : 'gray-400'
              }  gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-${
                isSelectedSubmitLanguageValidFail ? 'red' : 'blue'
              }-500 peer`}
              value={selectedSubmitLanguage}
              onChange={handlSelectSubmitLanguage}
            >
              <option disabled selected>
                언어 선택 *
              </option>
              <option value="C">C</option>
              <option value="C++">C++</option>
              <option value="Java">Java</option>
              <option value="JavaScript">JavaScript</option>
              <option value="Python2">Python2</option>
              <option value="Python3">Python3</option>
              <option value="Kotlin">Kotlin</option>
              <option value="Go">Go</option>
            </select>
            <p
              className={`text-${
                isSelectedSubmitLanguageValidFail ? 'red' : 'gray'
              }-500 text-xs tracking-widest font-light mt-2`}
            >
              제출할 언어를 선택해 주세요
            </p>
          </div>

          <div className="flex flex-col gap-1 mt-5">
            <p className="text-lg">소스 코드 파일</p>
            <MyDropzone
              type="code"
              guideMsg="코드 파일을 이곳에 업로드해 주세요"
              setIsFileUploaded={setIsCodeFileUploadingValidFail}
              isFileUploaded={isCodeFileUploadingValidFail}
              initPdfUrl={''}
              initInAndOutFileUrls={[]}
              setUploadedCodeFileUrl={setUploadedCodeFileUrl}
            />
          </div>
        </div>

        <div className="mt-5 pb-2 flex justify-end gap-3">
          <button
            onClick={handleGoToExamProblem}
            className=" px-4 py-[0.4rem] rounded-[0.2rem] font-light"
          >
            취소
          </button>
          <button
            onClick={handleSubmitExamProblemCode}
            className=" text-white bg-[#3870e0] px-3 py-[0.4rem] rounded-[0.2rem] font-light focus:bg-[#3464c2] hover:bg-[#3464c2] box-shadow"
          >
            제출하기
          </button>
        </div>
      </div>
    </div>
  );
}
