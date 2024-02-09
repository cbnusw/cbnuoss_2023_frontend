export interface ContestInfo {
  password: string | null;
  isPassword: boolean;
  problems: string[];
  applyingPeriod: {
    start: string;
    end: string;
  } | null;
  contestants: {
    center: null;
    _id: string;
    no: string;
    name: string;
    email: string;
    phone: string;
    department: string;
    university: string;
    position: null;
    role: string;
    joinedAt: string;
    updatedAt: string;
    __v: number;
    image?: null; // 옵셔널 필드 (일부 객체에만 존재)
  }[];
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

export interface ContestEnrolledInfo {
  _id: string;
  title: string;
}

export interface ContestRankInfo {
  _id: string;
  contest: string;
  user: {
    center: null | string;
    permissions: string[];
    _id: string;
    no: string;
    name: string;
    email: string;
    phone: string;
    department: string;
    university: string;
    position: null | string;
    role: string;
    joinedAt: string;
    updatedAt: string;
    __v: number;
  };
  scores: {
    right: boolean;
    tries: number;
    time: number;
    score: number;
    problem: string;
  }[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}
