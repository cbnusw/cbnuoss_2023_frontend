'use client';

import React, { useEffect, useState } from 'react';
import Loading from '../loading';
// import PostList from './PostList';
import { useRouter } from 'next/navigation';
import ProfileInformation from './components/ProfileInformation';
import ParticipationHistory from './components/ParticipationHistory/ParticipationHistory';
import ManagingMyPost from './components/ManagingMyPost/ManagingMyPost';

export default function Mypage() {
  const [isLoading, setIsLoading] = useState(true);
  const [tab, setTab] = useState('profileInformation');

  const router = useRouter();

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const handleChangeTab = (tabName: string) => {
    setTab(tabName);
  };

  if (isLoading) return <Loading />;

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
                onClick={() => handleChangeTab('profileInformation')}
                className={`${
                  tab === 'profileInformation'
                    ? 'text-[#242424] font-bold'
                    : 'text-[#6e6e6e] hover:text-[#3a8af9]'
                } `}
              >
                프로필 정보
              </button>
              <button
                onClick={() => handleChangeTab('participationHistory')}
                className={`${
                  tab === 'participationHistory'
                    ? 'text-[#242424] font-bold'
                    : 'text-[#6e6e6e] hover:text-[#3a8af9]'
                } `}
              >
                참가 내역
              </button>
              <button
                onClick={() => handleChangeTab('managingMyPost')}
                className={`${
                  tab === 'managingMyPost'
                    ? 'text-[#242424] font-bold'
                    : 'text-[#6e6e6e] hover:text-[#3a8af9]'
                } `}
              >
                작성글 관리
              </button>
            </div>
          </div>

          <div className="w-full mt-[-0.75rem]">
            {tab === 'profileInformation' ? (
              <ProfileInformation />
            ) : tab === 'participationHistory' ? (
              <ParticipationHistory />
            ) : (
              <ManagingMyPost />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
