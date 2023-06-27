import Image from 'next/image';
import Link from 'next/link';
import Contest from './components/Contest';
import Assignment from './components/Assignment';

export default function Home() {
  return (
    <div className="mt-[-5rem]">
      <div className="h-80 flex justify-center items-center bg-[url('/images/main.jpg')] bg-cover bg-center bright-in">
        <span className="text-4xl text-center text-white font-thin tracking-[1.5rem] fade-in mt-12 px-5 uppercase">
          online judge
        </span>
      </div>
      <div className="flex">
        <div className="flex-col 2lg:flex-row mx-auto mt-12 mb-10 flex justify-center gap-5">
          <div className="w-[22.5rem] 3xs:w-[30rem] p-2 mb-8 2lg:mb-0">
            <div className="mb-5">
              <span className="text-[#595f68] text-xl pb-[11px] border-b-2 border-[#3274ba]">
                신청 가능한 대회
              </span>
              <div className="pb-2 border-b-[1.5px] border-dotted"></div>
            </div>

            <div className="flex flex-col gap-3">
              {/* 데이터 임시로 추가 */}
              <Contest />
              <Contest />
              <Contest />
              <Contest />
            </div>
          </div>

          {/*  */}

          <div className="w-[22.5rem] 3xs:w-[30rem] p-2 ">
            <div className="mb-5">
              <span className="text-[#595f68] text-xl pb-[11px] border-b-2 border-[#3274ba]">
                추가된 과제
              </span>
              <div className="pb-2 border-b-[1.5px] border-dotted"></div>
            </div>

            <div className="flex flex-col gap-3">
              {/* 데이터 임시로 추가 */}
              <Assignment />
              <Assignment />
              <div className="relative flex flex-col gap-4 bg-[#f7f7f7] p-3 group">
                <p className="font-bold">
                  <Link href="/" className="hover:underline">
                    코딩테스트 3차
                  </Link>
                </p>
                <div>
                  <span className="text-xs semiboldsemibold">
                    제출 기간 :{' '}
                    <span className="font-light">
                      2023.06.26. 03:00 ~ 2023.06.26. 03:00
                    </span>
                  </span>
                </div>
                <div className="mt-[-0.9rem]">
                  <span className="text-xs font-semibold text-blue-600">
                    #노서영
                  </span>
                  <span className="before:content-['|'] mx-3 font-thin text-[#aaa]"></span>
                  <span className="text-xs font-semibold">
                    2023-01-자료구조(소프트웨어학부 01반){' '}
                  </span>
                </div>
                <div className="absolute right-0 bottom-0 border-l-[0.6rem] border-l-[#eee] border-t-[0.6rem] border-t-[#eee] border-b-[0.6rem] border-b-white border-r-[0.6rem] border-r-white group-hover:border-l-[#3274ba] group-hover:border-t-[#3274ba] ease-in duration-100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
