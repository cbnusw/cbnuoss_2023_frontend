'use client';

import { useRouter } from 'next/navigation';
import { mypageTabNameStore } from '../store/MypageTabName';

export default function MyPagelayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const mypageTabName = mypageTabNameStore((state: any) => state.tabName);
  const updateTabName = mypageTabNameStore((state: any) => state.updateTabName);

  const router = useRouter();

  const handleChangeTab = (tabName: string) => {
    updateTabName(tabName);
    router.push(`/mypage/${tabName}`);
  };

  return (
    <div className="mt-6 px-5 2lg:px-0 overflow-x-auto">
      <div className="flex flex-col w-[60rem] mx-auto">
        <div className="text-3xl font-semibold tracking-wide lift-up">
          마이페이지
        </div>
        <div className="flex gap-8 mt-10">
          <div className="w-52">
            <div className="flex flex-col items-start gap-[1.125rem] font-semibold tracking-wide">
              <button
                onClick={() => handleChangeTab('profile')}
                className={`${
                  mypageTabName === 'profile'
                    ? 'text-[#242424] font-bold'
                    : 'text-[#6e6e6e] hover:text-[#3a8af9]'
                } `}
              >
                프로필 정보
              </button>
              <button
                onClick={() => handleChangeTab('participation-history')}
                className={`${
                  mypageTabName === 'participation-history'
                    ? 'text-[#242424] font-bold'
                    : 'text-[#6e6e6e] hover:text-[#3a8af9]'
                } `}
              >
                참가 내역
              </button>
              <button
                onClick={() => handleChangeTab('managing-my-post')}
                className={`${
                  mypageTabName === 'managing-my-post'
                    ? 'text-[#242424] font-bold'
                    : 'text-[#6e6e6e] hover:text-[#3a8af9]'
                } `}
              >
                작성글 관리
              </button>
            </div>
          </div>
          <div className="w-full mt-[-0.75rem]">{children}</div>
        </div>
      </div>
    </div>
  );
}
