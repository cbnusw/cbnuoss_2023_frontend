'use client';

import MyDropzone from '@/app/components/MyDropzone';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import codeImg from '@/public/images/code.png';
import { IoSetItem } from '@/app/types/problem';

interface DefaultProps {
  params: {
    cid: string;
    problemId: string;
  };
}

export default function SubmitContestProblemCode(props: DefaultProps) {
  const [selectedSubmitLanguage, setSelectedSubmitLanguage] =
    useState('언어 선택 *');
  const [uploadedCodeFileUrl, setUploadedCodeFileUrl] = useState('');
  const [uploadedProblemPdfFileUrl, setUploadedProblemPdfFileUrl] =
    useState('');
  const [ioSetData, setIoSetData] = useState<IoSetItem[]>([]);

  const [
    isSelectedSubmitLanguageValidFail,
    setIsSelectedSubmitLanguageValidFail,
  ] = useState(false);
  const [isCodeFileUploadingValidFail, setIsCodeFileUploadingValidFail] =
    useState(false);

  const cid = props.params.cid;
  const problemId = props.params.cid;

  const router = useRouter();

  const handleGoToContestProblem = () => {
    router.push(`/contests/${cid}/problems/${problemId}`);
  };

  const handlSelectSubmitLanguage = (
    e: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setSelectedSubmitLanguage(e.target.value);
    setIsSelectedSubmitLanguageValidFail(false);
  };

  const handleSubmitContestProblemCode = () => {
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

    router.push(`/contests/${cid}/problems/${problemId}/submits`);
  };

  return (
    <div className="mt-2 mb-24 px-5 2lg:px-0 overflow-x-auto">
      <div className="flex flex-col w-[60rem] mx-auto">
        <div className="flex flex-col gap-8">
          <p className="flex items-center text-2xl font-bold tracking-tight">
            <Image
              src={codeImg}
              alt="trophy"
              width={70}
              height={0}
              quality={100}
              className="ml-[-1rem] fade-in-fast drop-shadow-lg"
            />

            <div className="lift-up">
              <span className="ml-4 text-3xl font-semibold tracking-wide">
                코드 제출
              </span>
              <Link
                href={`/contests/${cid}/problems/${problemId}`}
                className="mt-1 ml-1 text-xl font-medium cursor-pointer hover:underline hover:text-[#0038a8] focus:underline focus:text-[#0038a8] text-[#1048b8]"
              >
                (A+B)
              </Link>
            </div>
          </p>
          <div className="flex justify-between pb-3 border-b border-gray-300">
            <div className="flex gap-3">
              <span className="font-semibold">
                점수:
                <span className="font-mono font-light">
                  {' '}
                  <span className="font-mono font-semibold text-blue-600">
                    1
                  </span>
                  점
                </span>
              </span>
              <span className='relative bottom-[0.055rem] font-thin before:content-["|"]' />
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
                대회:{' '}
                <span className="font-light">
                  2023년 제2회 충청북도 대학생 프로그래밍 경진대회 본선
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
              initInAndOutFiles={[]}
            />
          </div>
        </div>

        <div className="mt-5 pb-2 flex justify-end gap-3">
          <button
            onClick={handleGoToContestProblem}
            className="px-4 py-[0.5rem] rounded-[6px] font-light"
          >
            취소
          </button>
          <button
            onClick={handleSubmitContestProblemCode}
            className="text-[#f9fafb] bg-[#3a8af9] px-4 py-[0.5rem] rounded-[6px] focus:bg-[#1c6cdb] hover:bg-[#1c6cdb]"
          >
            제출
          </button>
        </div>
      </div>
    </div>
  );
}
