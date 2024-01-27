'use client';

import React from 'react';
import axiosInstance from '../../utils/axiosInstance';
import { useQuery } from '@tanstack/react-query';
import ContestListItem from './ContestListItem';
import NoneContestListItem from './NoneContestListItem';
import DummyContestListemItem from './DummyContestListemItem';

export interface ContestInfo {
  password: string | null;
  isPassword: boolean;
  problems: string[];
  applyingPeriod: {
    start: string;
    end: string;
  } | null;
  contestants: string[];
  _id: string;
  title: string;
  content: string;
  testPeriod: {
    start: string; // Date 타입으로 변환할 수도 있습니다.
    end: string; // Date 타입으로 변환할 수도 있습니다.
  };
  writer: {
    center?: any; // 'null'이거나 더 구체적인 타입이 필요할 수 있습니다.
    permissions: string[];
    _id: string;
    no: string;
    name: string;
    email: string;
    phone: string;
    department: string;
    university: string;
    position: string;
    role: string;
    joinedAt: string; // Date 타입으로 변환할 수도 있습니다.
    updatedAt: string; // Date 타입으로 변환할 수도 있습니다.
    __v: number;
  };
  createdAt: string; // Date 타입으로 변환할 수도 있습니다.
  updatedAt: string; // Date 타입으로 변환할 수도 있습니다.
  __v: number;
}

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
