'use client';

import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const DynamicEditor = dynamic(() => import('@/app/components/Editor'), {
  ssr: false,
});

export default function RegisterExam() {
  const [isEditorReady, setIsEditorReady] = useState(false);
  const [isCheckedAppliedPeriod, setIsCheckedAppliedPeriod] = useState(false);
  const [isCheckedUsingPwd, setIsCheckedUsingPwd] = useState(false);
  const [courseName, setCourseName] = useState('');
  const [examName, setExamName] = useState('');
  const [examPwd, setExamPwd] = useState('');
  const [selectedContestDateTime, setSelectedContestDateTime] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });
  const [selectedContestAppliedDateTime, setSelectedContestAppliedDateTime] =
    useState({
      startDate: new Date(),
      endDate: new Date(),
    });

  const router = useRouter();

  const koreaTimeZone = 'ko-KR'; // 한국 시간을 사용하는 로케일 (예: en-US, ko-KR 등)

  const handleContestStartDateChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSelectedContestDateTime((prevState) => ({
      ...prevState,
      startDate: new Date(e.target.value),
    }));
  };

  const handleContestEndDateChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSelectedContestDateTime((prevState) => ({
      ...prevState,
      endDate: new Date(e.target.value),
    }));
  };

  const handleContestAppliedStartDateChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSelectedContestAppliedDateTime((prevState) => ({
      ...prevState,
      startDate: new Date(e.target.value),
    }));
  };

  const handleContestAppliedEndDateChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSelectedContestAppliedDateTime((prevState) => ({
      ...prevState,
      endDate: new Date(e.target.value),
    }));
  };

  const handleCancelContestRegister = () => {
    let userResponse = confirm('시험 등록을 취소하시겠습니까?');
    if (!userResponse) return;

    router.push('/exams');
  };

  useEffect(() => {
    setIsEditorReady(true);
  }, []);

  return (
    <div className="mt-2 px-5 2lg:px-0 overflow-x-auto">
      <div className="flex flex-col w-[60rem] mx-auto">
        <p className="text-2xl font-semibold">시험 등록</p>

        <div className="flex flex-col gap-5 mt-5 mb-8">
          <div className="flex flex-col relative z-0 w-1/2 group">
            <input
              type="text"
              name="floating_first_name"
              id="floating_first_name"
              className="block pt-3 pb-[0.175rem] pl-0 pr-0 w-full font-normal text-gray-900 bg-transparent border-0 border-b border-gray-400 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              value={examName}
              onChange={(e) => setExamName(e.target.value)}
            />
            <label
              htmlFor="floating_first_name"
              className="peer-focus:font-light absolute text-base left-[0.1rem] font-light text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-5 scale-75 top-3 -z-10 origin-[0] peer-focus:left-[0.1rem] peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-[1.25rem]"
            >
              시험명
            </label>
            <p className="text-gray-500 text-xs tracking-widest font-light mt-1">
              시험명을 입력해 주세요
            </p>
          </div>

          <div className="flex gap-5">
            <div className="flex flex-col relative z-0 w-1/2 group">
              <input
                type="text"
                name="floating_first_name"
                id="floating_first_name"
                className="block pt-3 pb-[0.175rem] pl-0 pr-0 w-full font-normal text-gray-900 bg-transparent border-0 border-b border-gray-400 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
                value={courseName}
                onChange={(e) => setCourseName(e.target.value)}
              />
              <label
                htmlFor="floating_first_name"
                className="peer-focus:font-light absolute text-base left-[0.1rem] font-light text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-5 scale-75 top-3 -z-10 origin-[0] peer-focus:left-[0.1rem] peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-[1.25rem]"
              >
                교과목명
              </label>
              <p className="text-gray-500 text-xs tracking-widest font-light mt-1">
                교과목명을 입력해 주세요
              </p>
            </div>

            <div className="flex flex-col relative z-0 w-1/4 group">
              <input
                type="text"
                name="floating_first_name"
                id="floating_first_name"
                className="block pt-3 pb-[0.175rem] pl-0 pr-0 w-full font-normal text-gray-900 bg-transparent border-0 border-b border-gray-400 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
                value={examPwd}
                onChange={(e) => setExamPwd(e.target.value)}
              />
              <label
                htmlFor="floating_first_name"
                className="peer-focus:font-light absolute text-base left-[0.1rem] font-light text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-5 scale-75 top-3 -z-10 origin-[0] peer-focus:left-[0.1rem] peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-[1.25rem]"
              >
                비밀번호
              </label>
              <p className="text-gray-500 text-xs tracking-widest font-light mt-1">
                게시글 열람 비밀번호를 입력해 주세요
              </p>
            </div>
          </div>
        </div>

        {isEditorReady ? (
          <div className="w-full mx-auto overflow-auto">
            <DynamicEditor isEditorReady={isEditorReady} />
          </div>
        ) : (
          <p>로딩중입니다...</p>
        )}

        <div className="mt-8">
          <p>제출 기한</p>
          <div className="flex gap-5 items-center mt-2">
            <input
              type="datetime-local"
              id="start-date"
              name="start-date"
              value={selectedContestDateTime.startDate
                .toISOString()
                .slice(0, 16)}
              min={new Date().toISOString().slice(0, 16)}
              className="text-sm appearance-none border rounded shadow py-[0.375rem] px-2 text-gray-500"
              onChange={handleContestStartDateChange}
            />
            <span>~</span>
            <input
              type="datetime-local"
              id="end-date"
              name="end-date"
              value={selectedContestDateTime.endDate.toISOString().slice(0, 16)}
              min={new Date().toISOString().slice(0, 16)}
              className="text-sm appearance-none border rounded shadow py-[0.375rem] px-2 text-gray-500"
              onChange={handleContestEndDateChange}
            />
          </div>

          <div className="mt-14 pb-2 flex justify-end gap-3">
            <button
              onClick={handleCancelContestRegister}
              className=" px-4 py-[0.4rem] rounded-[0.2rem] font-light"
            >
              취소
            </button>
            <button
              onClick={() => alert('개발 예정')}
              className=" text-white bg-[#3870e0] px-4 py-[0.4rem] rounded-[0.2rem] font-light focus:bg-[#3464c2] hover:bg-[#3464c2] box-shadow"
            >
              등록
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
