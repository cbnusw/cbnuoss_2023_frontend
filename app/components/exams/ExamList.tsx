'use client';

import React from 'react';
import axiosInstance from '../../utils/axiosInstance';
import { useQuery } from '@tanstack/react-query';
import NoneExamListItem from './NoneExamListItem';
import ExamListItem from './ExamListItem';
import { ExamInfo } from '@/app/types/exam';

// 시험 목록 반환 API (최근 데이터 3개까지)
const fetchExams = () => {
  return axiosInstance.get(
    `${process.env.NEXT_PUBLIC_API_VERSION}/assignment/?page=1&limit=3&sort=-createdAt`,
  );
};

export default function ExamList() {
  const { data } = useQuery({
    queryKey: ['examList'],
    queryFn: fetchExams,
  });

  const resData = data?.data.data;

  if (resData?.documents.length === 0) return <NoneExamListItem />;

  return (
    <>
      {resData?.documents.map((examInfo: ExamInfo) => (
        <ExamListItem examInfo={examInfo} key={examInfo._id} />
      ))}
    </>
  );
}
