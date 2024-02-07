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
  const { isPending, data } = useQuery({
    queryKey: ['progressingContests'],
    queryFn: fetchProgressingContests,
  });

  const resData = data?.data.data;

  // Filter contests that are applicable
  const applicableContests = resData?.documents.filter(
    (contestInfo: ContestInfo) => {
      const now = new Date();
      let isContestApplicable = false;

      if (contestInfo.applyingPeriod) {
        const applyingPeriodEnd = new Date(contestInfo.applyingPeriod.end);
        isContestApplicable = applyingPeriodEnd > now;
      } else {
        const testPeriodStart = new Date(contestInfo.testPeriod.start);
        isContestApplicable = testPeriodStart > now;
      }

      return isContestApplicable;
    },
  );

  if (resData?.documents.length === 0 || applicableContests?.length === 0)
    return <NoneContestListItem />;

  return (
    <>
      {isPending ? (
        <>
          {Array.from({ length: 4 }, (_, index) => (
            <DummyContestListemItem key={index} />
          ))}
        </>
      ) : (
        <>
          {applicableContests.map((contestInfo: ContestInfo) => (
            <ContestListItem contestInfo={contestInfo} key={contestInfo._id} />
          ))}

          {Array.from(
            { length: 4 - applicableContests?.length },
            (_, index) => (
              <DummyContestListemItem key={index} />
            ),
          )}
        </>
      )}
    </>
  );
}
