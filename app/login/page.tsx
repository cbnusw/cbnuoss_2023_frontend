import React, { useEffect, useState } from 'react';

export default function Login() {
  return (
    <div className="2md:mt-[10rem] mb-[5rem]">
      <div className="w-fit 2md:w-96 p-4 mx-auto">
        <div className="flex flex-col text-center border p-8 rounded-md border-[#d8d9dc] bg-[#fefefe] shadow-lg">
          <div className="flex flex-col gap-2 text-xl my-2">
            <img
              src="/images/logo.png"
              alt="logo"
              style={{ width: '2rem' }}
              className="mx-auto mb-1"
            />
            <p>로그인</p>
            <p className="text-sm">사업단 계정 사용</p>
          </div>

          <form>
            <div className="flex flex-col h-28 gap-[1.175rem] w-full mx-auto mt-6">
              <div className="relative h-12">
                <input
                  type="text"
                  id="floating_outlined"
                  className="block px-2.5 pb-3.5 pt-3.5 w-full text-sm text-gray-900 bg-transparent rounded-[0.2rem] border-1 border-[#d8d9dc] appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 focus:border-2 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_outlined"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-150 transform -translate-y-[1.07rem] scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-1 peer-focus:px-1 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-2"
                >
                  학번/교번 또는 아이디
                </label>
              </div>

              <div className="relative h-12 ">
                <input
                  type="password"
                  id="floating_outlined"
                  className="block px-2.5 pb-3.5 pt-3.5 w-full text-sm text-gray-900 bg-transparent rounded-[0.2rem] border-1 border-[#d8d9dc] appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 focus:border-2 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_outlined"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-150 transform -translate-y-[1.07rem] scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-1 peer-focus:px-1 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-2"
                >
                  비밀번호
                </label>
              </div>
            </div>
            <div className="h-36 flex flex-col justify-between mt-[0.625rem] text-left mb-6">
              <a
                href="https://sw7up.cbnu.ac.kr/account/password"
                target="_blank"
                className="text-[#437ae1] text-[0.8rem] font-semibold w-fit"
              >
                비밀번호를 잊으셨나요?
              </a>
              <div className="text-[0.8rem] text-gray-600">
                내 컴퓨터가 아닌가요? 게스트 모드를 사용하여 비공개로
                로그인하세요.
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://sw7up.cbnu.ac.kr/account/password"
                  target="_blank"
                  className="text-[#437ae1] translate-x-[-0.5rem] text-[0.8rem] font-normal px-2 py-1 hover:bg-[#f3f4f5] rounded-md focus:bg-[#f3f4f5]"
                >
                  계정 만들기
                </a>
                <button
                  type="submit"
                  className=" text-white bg-[#3870e0] px-4 py-[0.4rem] rounded-[0.2rem] font-light focus:bg-[#3464c2] hover:bg-[#3464c2] box-shadow"
                >
                  로그인
                </button>
              </div>
            </div>
          </form>
          <div>
            <div date-rangepicker className="flex items-center">
              <div className="relative"></div>
            </div>
          </div>
        </div>
        <div className="flex mt-5 text-[0.6rem] text-gray-700 justify-end">
          <a href="https://sw7up.cbnu.ac.kr/policy/privacy" target="_blank">
            개인정보처리방침
          </a>
        </div>
      </div>
    </div>
  );
}
