'use client';

import Loading from '@/app/loading';
import { userInfoStore } from '@/app/store/UserInfo';
import { UserInfo } from '@/app/types/user';
import { fetchCurrentUserInfo } from '@/app/utils/fetchCurrentUserInfo';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

interface DefaultProps {
  params: {
    eid: string;
  };
}

const DynamicEditor = dynamic(
  () => import('@/app/components/CKEditor/CKEditor'),
  {
    ssr: false,
  },
);

export default function EditExam(props: DefaultProps) {
  const examInfo = {
    examName: '2023-01-자료구조(소프트웨어학부 01반)',
    courseName: '자료구조',
    content: `
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

감사합니다.`,
    examStartDateTime: '2023-07-13T10:00',
    examEndDateTime: '2023-07-13T11:00',
    isCheckedUsingExamPwd: true,
    examPwd: 'owrejreoi12321',
  };

  const updateUserInfo = userInfoStore((state: any) => state.updateUserInfo);

  const [isLoading, setIsLoading] = useState(true);
  const [examName, setExamName] = useState(examInfo.examName);
  const [courseName, setCourseName] = useState(examInfo.courseName);
  const [editorContent, setEditorContent] = useState();
  const [examStartDateTime, setExamStartDateTime] = useState(
    examInfo.examStartDateTime,
  );
  const [examEndDateTime, setExamEndDateTime] = useState(
    examInfo.examEndDateTime,
  );
  const [isCheckedUsingPwd, setIsCheckedUsingPwd] = useState(
    examInfo.isCheckedUsingExamPwd,
  );
  const [examPwd, setExamPwd] = useState(examInfo.examPwd);

  const [isExamNameValidFail, setIsExamNameValidFail] = useState(false);
  const [isCourseNameValidFail, setIsCourseNameValidFail] = useState(false);
  const [isExamPwdValidFail, setIsExamPwdValidFail] = useState(false);

  const examNameRef = useRef<HTMLInputElement>(null);
  const courseNameRef = useRef<HTMLInputElement>(null);
  const examPwdRef = useRef<HTMLInputElement>(null);

  const eid = props.params.eid;

  const router = useRouter();

  const currentDate = new Date().toISOString().slice(0, 16);
  // currentDate.setDate(currentDate.getDate() + 1);

  const handleExamNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExamName(e.target.value);
    setIsExamNameValidFail(false);
  };

  const handleCourseNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCourseName(e.target.value);
    setIsCourseNameValidFail(false);
  };

  const handleExamPwdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExamPwd(e.target.value);
    setIsExamPwdValidFail(false);
  };

  const handleCancelExamEdit = () => {
    const userResponse = confirm('시험 수정을 취소하시겠습니까?');
    if (!userResponse) return;

    router.push(`/exams/${eid}`);
  };

  const handleEditExam = () => {
    if (!examName) {
      alert('시험명을 입력해 주세요');
      window.scrollTo(0, 0);
      examNameRef.current?.focus();
      setIsExamNameValidFail(true);
      return;
    }

    if (!courseName) {
      alert('수업명을 입력해 주세요');
      window.scrollTo(0, 0);
      courseNameRef.current?.focus();
      setIsCourseNameValidFail(true);
      return;
    }

    if (!editorContent) {
      alert('본문을 입력해 주세요');
      window.scrollTo(0, 0);
      return;
    }

    if (!examStartDateTime || !examEndDateTime) {
      alert('시험 시간을 설정해 주세요');
      window.scrollTo(0, document.body.scrollHeight);
      return;
    }

    if (isCheckedUsingPwd && !examPwd) {
      alert('비밀번호를 입력해 주세요');
      window.scrollTo(0, document.body.scrollHeight);
      examPwdRef.current?.focus();
      setIsExamPwdValidFail(true);
      return;
    }

    alert('수정 기능 개발 예정');
  };

  // (로그인 한) 사용자 정보 조회 및 관리자 권한 확인
  useEffect(() => {
    fetchCurrentUserInfo(updateUserInfo).then((res: UserInfo) => {
      if (res.isAuth && res.role !== 'operator') {
        alert('접근 권한이 없습니다.');
        router.back();
        return;
      }
      setIsLoading(false);
    });
  }, [updateUserInfo, router]);

  if (isLoading) return <Loading />;

  return (
    <div className="mt-2 px-5 2lg:px-0 overflow-x-auto">
      <div className="flex flex-col w-[60rem] mx-auto">
        <p className="text-2xl font-semibold">시험 등록</p>

        <div className="flex gap-5 mt-5 mb-8">
          <div className="flex flex-col relative z-0 w-2/5 group">
            <input
              type="text"
              name="floating_first_name"
              className={`block pt-3 pb-[0.175rem] pl-0 pr-0 w-full font-normal text-gray-900 bg-transparent border-0 border-b border-gray-400 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-${
                isExamNameValidFail ? 'pink' : 'blue'
              }-500 focus:border-${
                isExamNameValidFail ? 'red' : 'blue'
              }-500 focus:outline-none focus:ring-0 peer`}
              placeholder=" "
              required
              value={examName}
              ref={examNameRef}
              onChange={handleExamNameChange}
            />
            <label
              htmlFor="floating_first_name"
              className={`peer-focus:font-light absolute text-base left-[0.1rem] font-light text-${
                isExamNameValidFail ? 'red' : 'gray'
              }-500 dark:text-gray-400 duration-300 transform -translate-y-5 scale-75 top-3 -z-10 origin-[0] peer-focus:left-[0.1rem] peer-focus:text-${
                isExamNameValidFail ? 'red' : 'blue'
              }-600 peer-focus:dark:text-${
                isExamNameValidFail ? 'red' : 'blue'
              }-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-[1.25rem]`}
            >
              시험명
            </label>
            <p
              className={`text-${
                isExamNameValidFail ? 'red' : 'gray'
              }-500 text-xs tracking-widest font-light mt-1`}
            >
              시험명을 입력해 주세요
            </p>
          </div>

          <div className="flex flex-col relative z-0 w-2/5 group">
            <input
              type="text"
              name="floating_first_name"
              className={`block pt-3 pb-[0.175rem] pl-0 pr-0 w-full font-normal text-gray-900 bg-transparent border-0 border-b border-gray-400 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-${
                isCourseNameValidFail ? 'pink' : 'blue'
              }-500 focus:border-${
                isCourseNameValidFail ? 'red' : 'blue'
              }-500 focus:outline-none focus:ring-0 peer`}
              placeholder=" "
              required
              value={courseName}
              ref={courseNameRef}
              onChange={handleCourseNameChange}
            />
            <label
              htmlFor="floating_first_name"
              className={`peer-focus:font-light absolute text-base left-[0.1rem] font-light text-${
                isCourseNameValidFail ? 'red' : 'gray'
              }-500 dark:text-gray-400 duration-300 transform -translate-y-5 scale-75 top-3 -z-10 origin-[0] peer-focus:left-[0.1rem] peer-focus:text-${
                isCourseNameValidFail ? 'red' : 'blue'
              }-600 peer-focus:dark:text-${
                isCourseNameValidFail ? 'red' : 'blue'
              }-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-[1.25rem]`}
            >
              수업명
            </label>
            <p
              className={`text-${
                isCourseNameValidFail ? 'red' : 'gray'
              }-500 text-xs tracking-widest font-light mt-1`}
            >
              수업명을 입력해 주세요
            </p>
          </div>
        </div>

        <div className="w-full mx-auto overflow-auto">
          <DynamicEditor
            initEditorContent={examInfo.content}
            onEditorChange={setEditorContent}
          />
        </div>

        <div className="mt-8">
          <p>시험 시간</p>
          <div className="flex gap-5 items-center mt-2">
            <input
              type="datetime-local"
              id="start-date"
              name="start-date"
              value={examStartDateTime.slice(0, 16)}
              min={currentDate}
              className="text-sm appearance-none border rounded shadow py-[0.375rem] px-2 text-gray-500"
              onChange={(e) => setExamStartDateTime(e.target.value)}
            />
            <span>~</span>
            <input
              type="datetime-local"
              id="end-date"
              name="end-date"
              value={examEndDateTime.slice(0, 16)}
              min={currentDate}
              className="text-sm appearance-none border rounded shadow py-[0.375rem] px-2 text-gray-500"
              onChange={(e) => setExamEndDateTime(e.target.value)}
            />
          </div>

          <div className="flex flex-col mt-10">
            <div className="flex">
              <div className="flex items-center h-5">
                <input
                  id="helper-checkbox"
                  aria-describedby="helper-checkbox-text"
                  type="checkbox"
                  checked={isCheckedUsingPwd}
                  onChange={() => setIsCheckedUsingPwd(!isCheckedUsingPwd)}
                  className="w-4 h-4 text-blue-600 border-2 border-[#757575] rounded-[0.175rem] focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
              <div className="ml-2 text-sm">
                <label
                  htmlFor="helper-checkbox"
                  className="font-medium text-gray-900 dark:text-gray-300"
                >
                  비밀번호 설정
                </label>

                <div className="flex mt-1">
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
                    비밀번호를 설정할 경우 게시글 열람 시 비밀번호 입력이
                    필요합니다.
                  </p>
                </div>
              </div>
            </div>
            {isCheckedUsingPwd ? (
              <div className="flex flex-col relative z-0 w-1/2 group mt-7">
                <input
                  type="text"
                  name="floating_first_name"
                  className={`block pt-3 pb-[0.175rem] pl-0 pr-0 w-full font-normal text-gray-900 bg-transparent border-0 border-b border-gray-400 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-${
                    isExamPwdValidFail ? 'pink' : 'blue'
                  }-500 focus:border-${
                    isExamPwdValidFail ? 'red' : 'blue'
                  }-500 focus:outline-none focus:ring-0 peer`}
                  placeholder=" "
                  required
                  value={examPwd}
                  ref={examPwdRef}
                  onChange={handleExamPwdChange}
                />
                <label
                  htmlFor="floating_first_name"
                  className={`peer-focus:font-light absolute text-base left-[0.1rem] font-light text-${
                    isExamPwdValidFail ? 'red' : 'gray'
                  }-500 dark:text-gray-400 duration-300 transform -translate-y-5 scale-75 top-3 -z-10 origin-[0] peer-focus:left-[0.1rem] peer-focus:text-${
                    isExamPwdValidFail ? 'red' : 'blue'
                  }-600 peer-focus:dark:text-${
                    isExamPwdValidFail ? 'red' : 'blue'
                  }-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-[1.25rem]`}
                >
                  비밀번호
                </label>
              </div>
            ) : null}
          </div>

          <div className="mt-14 pb-2 flex justify-end gap-3">
            <button
              onClick={handleCancelExamEdit}
              className="px-4 py-[0.5rem] rounded-[6px] font-light"
            >
              취소
            </button>
            <button
              onClick={handleEditExam}
              className="text-[#f9fafb] bg-[#3a8af9] px-4 py-[0.5rem] rounded-[6px] focus:bg-[#1c6cdb] hover:bg-[#1c6cdb]"
            >
              수정
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
