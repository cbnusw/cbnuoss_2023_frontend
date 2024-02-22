'use client';

import dynamic from 'next/dynamic';

const MarkdownPreview = dynamic(
  () => import('@uiw/react-markdown-preview').then((mod) => mod.default),
  { ssr: false },
);

export default function NoticeTemp() {
  return (
    <div className="mt-6 mb-24 px-5 2lg:px-0 overflow-x-auto">
      <div className="flex flex-col w-[60rem] mx-auto">
        <div className="flex flex-col gap-3">
          <p className="text-2xl font-bold tracking-tight">공지사항</p>
          <div className="flex justify-between border-b border-gray-300"></div>
        </div>
        <div className="border-b mt-8 mb-4 pb-5">
          <MarkdownPreview
            className="markdown-preview"
            source={`
상기 시스템은 현재 <span style="color:hsl(240, 75%, 60%);"><strong>베타 테스트</strong></span> 중에 있습니다.

사용에 있어 궁금하신 사항은 <u>홈페이지 우측 하단의</u>

<b>문의 공간</b>을 이용하여 남겨주세요.

<br />

## 💻 컴파일러 버전 정보

- **C** : GNU11
- **C++** : C++17
- **Python 2**: 2.7.17
- **Python 3**: 3.9.2
- **OpenJDK**: 1.8.0_292
- **Kotlin**: 1.5.31-release-548
- **Go**: 1.17.2
- **Node.js**: 10.24.1
`}
          />
        </div>
      </div>
    </div>
  );
}
