import Link from 'next/link';
import React from 'react';

export default function Contest() {
  return (
    <div className="relative flex flex-col gap-4 bg-[#f7f7f7] p-3 group">
      <p className="font-bold">
        <Link href="/" className="hover:underline">
          제2회 충청북도 대학생 프로그래밍 경진대회 예선 [한국교통대학교 5/10]
        </Link>
      </p>
      <div className="flex flex-col 3xs:inline-block">
        <span className="text-xs">
          <span className="font-semibold">신청 기간</span> : ~{' '}
          <span className="font-light">2023.06.26. 03:00</span>
        </span>
        <span className="hidden 3xs:inline-block before:content-['|'] mx-3 font-thin text-[#aaa]"></span>
        <span className="text-xs">
          <span className="font-semibold">대회 시작</span> :{' '}
          <span className=""> 2023.06.26. 06:00</span>
        </span>
      </div>
      <div className="absolute right-0 bottom-0 border-l-[0.6rem] border-l-[#eee] border-t-[0.6rem] border-t-[#eee] border-b-[0.6rem] border-b-white border-r-[0.6rem] border-r-white group-hover:border-l-[#3274ba] group-hover:border-t-[#3274ba] ease-in duration-100"></div>
    </div>
  );
}
