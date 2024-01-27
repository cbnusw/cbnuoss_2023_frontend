'use client';

import React from 'react';
import axiosInstance from '../../utils/axiosInstance';
import { useQuery } from '@tanstack/react-query';
import NoneExamListItem from './NoneExamListItem';
import ExamListItem from './ExamListItem';

export interface ExamInfo {
  problems: string[];
  students: string[];
  _id: string;
  title: string;
  course: string;
  content: string;
  password: string;
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
