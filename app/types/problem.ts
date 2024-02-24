export interface ProblemInfo {
  parentId: null | string;
  parentType: string;
  published: null | boolean;
  score: number;
  _id: string;
  title: string;
  content: string;
  ioSet: IoSetItem[];
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

// 업로드 파일 정보
export interface UploadedFileInfo {
  ref: null;
  refModel: null;
  _id: string;
  url: string;
  filename: string;
  mimetype: string;
  size: number;
  uploader: string;
  uploadedAt: string;
  __v: number;
}

export interface IoSetItem {
  inFile: UploadedFileInfo;
  outFile: UploadedFileInfo;
}

// 문제 등록/수정 API 호출을 위한 인터페이스 정의
export interface RegisterProblemParams {
  title: string;
  content: string;
  published: null | boolean;
  ioSet: Array<IoSetItem>;
  options: {
    maxRealTime: number;
    maxMemory: number;
  };
  score: number;
}

export interface ProblemsInfo {
  password: string;
  isPassword: boolean;
  problems: ProblemInfo[];
  applyingPeriod?: {
    start: string;
    end: string;
  };
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
