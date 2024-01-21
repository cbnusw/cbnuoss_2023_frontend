import React from 'react';

export default function ProfileInformation() {
  return (
    <div className="mb-20">
      <p className="text-2xl font-semibold">회원정보</p>
      <div className="border-t-[3px] mt-4 border-black" />
      <div className="flex flex-col mt-4 tracking-tight text-xs">
        <div className="flex items-center pb-3 border-b ">
          <span className="w-44 text-sm">학번</span>
          <span className="w-80 font-bold">2020123123</span>
        </div>
        <div className="flex items-center py-3 border-b">
          <div className="w-44 text-sm">비밀번호</div>
          <div className="w-80 font-bold">********</div>
          <a
            href="https://sw7up.cbnu.ac.kr/my-page/password"
            target="_blank"
            className="flex justify-center items-center text-black border w-24 h-7 duration-200 hover:border-black"
          >
            비밀번호 변경
          </a>
        </div>
        <div className="flex items-center py-3 border-b">
          <div className="w-44 text-sm">이름(실명)</div>
          <div className="w-80 font-bold">홍길동</div>
          <a
            href="https://sw7up.cbnu.ac.kr/my-page/info"
            target="_blank"
            className="flex justify-center items-center text-black border w-24 h-7 duration-200 hover:border-black"
          >
            개인정보 변경
          </a>
        </div>
        <div className="flex items-center py-3 border-b">
          <div className="w-44 text-sm">이메일</div>
          <div className="w-80 font-bold">{'abc@naver.com'}</div>
        </div>
        <div className="flex items-center py-3 border-b">
          <div className="w-44 text-sm">대학</div>
          <div className="w-80 font-bold">{'충북대학교'}</div>
        </div>
        <div className="flex items-center py-3 border-b">
          <div className="w-44 text-sm">학부(과)</div>
          <div className="w-80 font-bold">{'소프트웨어학과'}</div>
        </div>
      </div>
    </div>
  );
}
