'use client';

import React from 'react';
import axiosInstance from '../../utils/axiosInstance';
import { useQuery } from '@tanstack/react-query';
import ContestListItem from './ContestListItem';
import NoneContestListItem from './NoneContestListItem';
import DummyContestListemItem from './DummyContestListemItem';
import { ContestInfo } from '@/app/types/contest';

const fetchProgressingContests = () => {
  return axiosInstance.get(
    `${process.env.NEXT_PUBLIC_API_VERSION}/contest/progressing`,
  );
};

export default function ContestList() {
  const { data } = useQuery({
    queryKey: ['progressingContests'],
    queryFn: fetchProgressingContests,
  });

  // 실제 대회 정보를 렌더링한 횟수를 추적
  let renderedContestsCount = 0;

  const resData = data?.data.data;

  if (resData?.documents.length === 0) return <NoneContestListItem />;

  return (
    <>
      {resData?.documents.map((contestInfo: ContestInfo) => {
        const now = new Date();
        let isContestApplicable = false;

        if (contestInfo.applyingPeriod) {
          // applyingPeriod이 존재하는 경우, applyingPeriod.end를 Date 객체로 변환
          const applyingPeriodEnd = new Date(contestInfo.applyingPeriod.end);
          // 현재 시간이 applyingPeriod.end 이전인지 확인
          isContestApplicable = applyingPeriodEnd > now;
        } else {
          // applyingPeriod이 null인 경우, testPeriod.start를 Date 객체로 변환
          const testPeriodStart = new Date(contestInfo.testPeriod.start);
          // 현재 시간이 testPeriod.start 이전인지 확인
          isContestApplicable = testPeriodStart > now;
        }

        if (!isContestApplicable) return;
        renderedContestsCount++;
        return (
          <ContestListItem contestInfo={contestInfo} key={contestInfo._id} />
        );
      })}

      {Array.from({ length: 4 - renderedContestsCount }, (_, index) => (
        <DummyContestListemItem key={index} />
      ))}
    </>
  );
}
