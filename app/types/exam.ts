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
