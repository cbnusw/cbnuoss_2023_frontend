import React from 'react';

export default function Footer() {
  // 현재 년도를 가져오기
  const currentYear = new Date().getFullYear();

  return (
    <div className="w-full flex justify-start mt-auto font-light text-[10px] py-5 px-3 leading-[1.175rem] bg-[#505050]">
      <div className="flex flex-col 3xs:flex-row gap-10 justify-between mx-auto w-[60rem]">
        <div>
          <div className="mb-5 mx-auto">
            <a
              href="https://sw7up.cbnu.ac.kr/policy/privacy"
              target="_blank"
              className="text-[#eee] text-[10px]"
            >
              개인정보처리방침
            </a>
          </div>
          <div className="flex">
            <span className="mt-3 mr-2 text-[#eee]">
              충청북도 청주시 서원구 충대로1(개신동) 학연산공동기술연구원(E9동)
            </span>
          </div>
          <div className="mt-2 text-[#ccc]">
            © {currentYear} 충북대학교 SW중심대학사업단. All rights reserved.
          </div>
        </div>
        <div className="flex gap-5 mt-auto mr-2">
          <a
            href="https://sw7up.cbnu.ac.kr/home"
            target="_blank"
            className="relative left-[-5px]"
          >
            <img
              src="/images/sw7_logo.png"
              alt="cbnu_logo"
              className="w-[7rem] 3xs:w-[8rem]"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
