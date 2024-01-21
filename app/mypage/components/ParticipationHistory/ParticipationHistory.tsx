import React from 'react';
import ContestParticipantListItem from './components/contestHistory/ContestParticipantListItem';
import ContestParticipantList from './components/contestHistory/ContestParticipantList';
import ExamParticipantList from './components/examHistory/ExamParticipantList';

export default function ParticipationHistory() {
  return (
    <div className="flex flex-col gap-16 mb-20">
      <div>
        <p className="text-2xl font-semibold">대회 참가 내역</p>
        <div className="border-t-[3px] mt-4 border-black" />
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
                    </tr>
                  </thead>
                  <ContestParticipantList />
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div>
        <p className="text-2xl font-semibold">시험 참가 내역</p>
        <div className="border-t-[3px] mt-4 border-black" />
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
                    </tr>
                  </thead>
                  <ExamParticipantList />
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
