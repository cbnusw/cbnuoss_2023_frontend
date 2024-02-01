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
    nid: string;
  };
}

const CustomCKEditor = dynamic(() => import('@/components/CustomCKEditor'), {
  ssr: false,
});

export default function EditNotice(props: DefaultProps) {
  const noticeInfo = {
    title: '시스템 이용 간 유의사항',
    content: `
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

감사합니다.`,
    isCheckedUsingNoticePwd: true,
    noticePwd: 'owrejreoi12321',
  };

  const updateUserInfo = userInfoStore((state: any) => state.updateUserInfo);

  const [isLoading, setIsLoading] = useState(true);
  const [noticeName, setNoticeName] = useState(noticeInfo.title);
  const [editorContent, setEditorContent] = useState(noticeInfo.content);
  const [isCheckedUsingPwd, setIsCheckedUsingPwd] = useState(
    noticeInfo.isCheckedUsingNoticePwd,
  );
  const [noticePwd, setNoticePwd] = useState(noticeInfo.noticePwd);

  const [isNoticeNameValidFail, setIsNoticeNameValidFail] = useState(false);
  const [isNoticePwdValidFail, setIsNoticePwdValidFail] = useState(false);

  const noticeNameRef = useRef<HTMLInputElement>(null);
  const noticePwdRef = useRef<HTMLInputElement>(null);

  const nid = props.params.nid;

  const router = useRouter();

  const handleNoticeNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNoticeName(e.target.value);
    setIsNoticeNameValidFail(false);
  };

  const handleNoticePwdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNoticePwd(e.target.value);
    setIsNoticePwdValidFail(false);
  };

  const handleCancelNoticeEdit = () => {
    const userResponse = confirm('공지사항 수정을 취소하시겠습니까?');
    if (!userResponse) return;

    router.push(`/notices/${nid}`);
  };

  const handleEditNotice = () => {
    if (!noticeName) {
      alert('제목을 입력해 주세요');
      window.scrollTo(0, 0);
      noticeNameRef.current?.focus();
      setIsNoticeNameValidFail(true);
      return;
    }

    if (!editorContent) {
      alert('본문을 입력해 주세요');
      window.scrollTo(0, 0);
      return;
    }

    if (isCheckedUsingPwd && !noticePwd) {
      alert('비밀번호를 입력해 주세요');
      window.scrollTo(0, document.body.scrollHeight);
      noticePwdRef.current?.focus();
      setIsNoticePwdValidFail(true);
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
        <p className="text-2xl font-semibold">공지사항 등록</p>

        <div className="flex gap-5 mt-5 mb-8">
          <div className="flex flex-col relative z-0 w-2/5 group">
            <input
              type="text"
              name="floating_first_name"
              className={`block pt-3 pb-[0.175rem] pl-0 pr-0 w-full font-normal text-gray-900 bg-transparent border-0 border-b border-gray-400 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-${
                isNoticeNameValidFail ? 'pink' : 'blue'
              }-500 focus:border-${
                isNoticeNameValidFail ? 'red' : 'blue'
              }-500 focus:outline-none focus:ring-0 peer`}
              placeholder=" "
              required
              value={noticeName}
              ref={noticeNameRef}
              onChange={handleNoticeNameChange}
            />
            <label
              htmlFor="floating_first_name"
              className={`peer-focus:font-light absolute text-base left-[0.1rem] font-light text-${
                isNoticeNameValidFail ? 'red' : 'gray'
              }-500 dark:text-gray-400 duration-300 transform -translate-y-5 scale-75 top-3 -z-10 origin-[0] peer-focus:left-[0.1rem] peer-focus:text-${
                isNoticeNameValidFail ? 'red' : 'blue'
              }-600 peer-focus:dark:text-${
                isNoticeNameValidFail ? 'red' : 'blue'
              }-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-[1.25rem]`}
            >
              제목
            </label>
            <p
              className={`text-${
                isNoticeNameValidFail ? 'red' : 'gray'
              }-500 text-xs tracking-widest font-light mt-1`}
            >
              제목을 입력해 주세요
            </p>
          </div>
        </div>

        <div className="w-full mx-auto overflow-auto">
          <CustomCKEditor
            initEditorContent={noticeInfo.content}
            onEditorChange={setEditorContent}
          />
        </div>

        <div className="mt-8">
          <div className="flex flex-col mt-3">
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
                    isNoticePwdValidFail ? 'pink' : 'blue'
                  }-500 focus:border-${
                    isNoticePwdValidFail ? 'red' : 'blue'
                  }-500 focus:outline-none focus:ring-0 peer`}
                  placeholder=" "
                  required
                  value={noticePwd}
                  ref={noticePwdRef}
                  onChange={handleNoticePwdChange}
                />
                <label
                  htmlFor="floating_first_name"
                  className={`peer-focus:font-light absolute text-base left-[0.1rem] font-light text-${
                    isNoticePwdValidFail ? 'red' : 'gray'
                  }-500 dark:text-gray-400 duration-300 transform -translate-y-5 scale-75 top-3 -z-10 origin-[0] peer-focus:left-[0.1rem] peer-focus:text-${
                    isNoticePwdValidFail ? 'red' : 'blue'
                  }-600 peer-focus:dark:text-${
                    isNoticePwdValidFail ? 'red' : 'blue'
                  }-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-[1.25rem]`}
                >
                  비밀번호
                </label>
              </div>
            ) : null}
          </div>

          <div className="mt-14 pb-2 flex justify-end gap-3">
            <button
              onClick={handleCancelNoticeEdit}
              className="px-4 py-[0.5rem] rounded-[6px] font-light"
            >
              취소
            </button>
            <button
              onClick={handleEditNotice}
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
