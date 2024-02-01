export interface PracticeInfo {
  parentId: null | string;
  parentType: string;
  published: null | boolean;
  score: number;
  _id: string;
  title: string;
  content: string;
  ioSet: {
    inFile: string;
    outFile: string;
  }[];
  options: {
    maxRealTime: number;
    maxMemory: number;
  };
  writer: {
    _id: string;
    name: string;
  };
  createdAt: string; // Date 타입으로 변환할 수도 있습니다.
  updatedAt: string; // Date 타입으로 변환할 수도 있습니다.
  __v: number;
}
