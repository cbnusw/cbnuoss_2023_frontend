'use client';

import React, { useState } from 'react';
import MyContestPostList from './components/contestPost/MyContestPostList';
import MyExamPostList from './components/examPost/MyExamPostList';
import MyPracticePostList from './components/practicePost/MyPracticePostList';
import MyNoticePostList from './components/noticePost/MyNoticePostList';

export default function ManagingMyPost() {
  const [category, setCategory] = useState('contest');

  const handleChangeCategory = (category: string) => {
    setCategory(category);
  };

  return (
    <div className="mb-20">
      <div className="flex border-b font-medium text-[0.925rem] leading-[1.375rem] pb-[1.5px]">
        <div>
          <button
            onClick={() => handleChangeCategory('contest')}
            className={`w-[4.75rem] py-2 tracking-wide ${
              category !== 'contest' ? 'text-[#505967]' : 'font-semibold'
            } hover:bg-[#f3f4f5] rounded-[7px]`}
          >
            대회
          </button>
          {category === 'contest' && (
            <div className="relative top-[3px] h-[2px] rounded-full bg-[#1a1f27]" />
          )}
        </div>
        <div>
          <div>
            <button
              onClick={() => handleChangeCategory('exam')}
              className={`w-[4.75rem] py-2 tracking-wide ${
                category !== 'exam' ? 'text-[#505967]' : 'font-semibold'
              } hover:bg-[#f3f4f5] rounded-[7px]`}
            >
              시험
            </button>
            {category === 'exam' && (
              <div className="relative top-[3px] h-[2px] rounded-full bg-[#1a1f27]" />
            )}
          </div>
        </div>
        <div>
          <div>
            <button
              onClick={() => handleChangeCategory('practice')}
              className={`w-[4.75rem] py-2 tracking-wide ${
                category !== 'practice' ? 'text-[#505967]' : 'font-semibold'
              } hover:bg-[#f3f4f5] rounded-[7px]`}
            >
              연습문제
            </button>
            {category === 'practice' && (
              <div className="relative top-[3px] h-[2px] rounded-full bg-[#1a1f27]" />
            )}
          </div>
        </div>
        <div>
          <div>
            <button
              onClick={() => handleChangeCategory('notice')}
              className={`w-[4.75rem] py-2 tracking-wide ${
                category !== 'notice' ? 'text-[#505967]' : 'font-semibold'
              } hover:bg-[#f3f4f5] rounded-[7px]`}
            >
              공지사항
            </button>
            {category === 'notice' && (
              <div className="relative top-[3px] h-[2px] rounded-full bg-[#1a1f27]" />
            )}
          </div>
        </div>
      </div>
      <div>
        {category === 'contest' ? (
          <section className="dark:bg-gray-900">
            <div className="mx-auto mt-6 w-full">
              <div className="border dark:bg-gray-800 relative overflow-hidden rounded-sm">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400 text-center">
                      <tr>
                        <th scope="col" className="px-4 py-2">
                          번호
                        </th>
                        <th scope="col" className="px-4 py-2">
                          대회명
                        </th>
                        <th scope="col" className="px-4 py-2">
                          신청기간
                        </th>
                        <th scope="col" className="px-4 py-2">
                          대회시간
                        </th>
                        <th scope="col" className="px-4 py-2">
                          작성일
                        </th>
                      </tr>
                    </thead>
                    <MyContestPostList />
                  </table>
                </div>
              </div>
            </div>
          </section>
        ) : category === 'exam' ? (
          <section className="dark:bg-gray-900">
            <div className="mx-auto mt-6 w-full">
              <div className="border dark:bg-gray-800 relative overflow-hidden rounded-sm">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400 text-center">
                      <tr>
                        <th scope="col" className="px-4 py-2">
                          번호
                        </th>
                        <th scope="col" className="px-4 py-2">
                          시험명
                        </th>
                        <th scope="col" className="px-4 py-2">
                          수업명
                        </th>
                        <th scope="col" className="px-4 py-2">
                          시험 시간
                        </th>
                        <th scope="col" className="px-4 py-2">
                          작성일
                        </th>
                      </tr>
                    </thead>
                    <MyExamPostList />
                  </table>
                </div>
              </div>
            </div>
          </section>
        ) : category === 'practice' ? (
          <section className="dark:bg-gray-900">
            <div className="mx-auto mt-6 w-full">
              <div className="border dark:bg-gray-800 relative overflow-hidden rounded-sm">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400 text-center">
                      <tr>
                        <th scope="col" className="px-4 py-2">
                          번호
                        </th>
                        <th scope="col" className="px-4 py-2">
                          문제명
                        </th>
                        <th scope="col" className="px-4 py-2">
                          작성일
                        </th>
                      </tr>
                    </thead>
                    <MyPracticePostList />
                  </table>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <section className="dark:bg-gray-900">
            <div className="mx-auto mt-6 w-full">
              <div className="border dark:bg-gray-800 relative overflow-hidden rounded-sm">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400 text-center">
                      <tr>
                        <th scope="col" className="px-4 py-2">
                          번호
                        </th>
                        <th scope="col" className="px-4 py-2">
                          제목
                        </th>
                        <th scope="col" className="px-4 py-2">
                          작성일
                        </th>
                      </tr>
                    </thead>
                    <MyNoticePostList />
                  </table>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
