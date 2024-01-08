import React from 'react';
import UserScoreInfoListItem from './UserScoreInfoListItem';

interface UserScoreInfoListProps {
  cid: string;
}

export default function UserScoreInfoList({ cid }: UserScoreInfoListProps) {
  const numberOfItems = 5;

  return (
    <div className="flex flex-col gap-5">
      {Array.from({ length: numberOfItems }, (_, idx) => (
        <UserScoreInfoListItem key={idx} cid={cid} ranking={idx + 1} />
      ))}
    </div>
  );
}
