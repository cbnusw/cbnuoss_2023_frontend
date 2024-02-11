export function formatDateToYYMMDDHHMMSS(dateString: string): string {
  // Date 객체 생성
  const date = new Date(dateString);

  // 연도, 월, 일, 시간, 분을 추출
  const year = date.getFullYear().toString().slice(-2);
  const month = date.getMonth() + 1; // getMonth()는 0부터 시작하므로 1을 더함
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  // 각 부분을 두 자리 문자열로 변환 (예: '01', '02', ...)
  const monthStr = month.toString().padStart(2, '0');
  const dayStr = day.toString().padStart(2, '0');
  const hoursStr = hours.toString().padStart(2, '0');
  const minutesStr = minutes.toString().padStart(2, '0');
  const secondsStr = seconds.toString().padStart(2, '0');

  // 최종 형식으로 문자열 구성
  return `${year}/${monthStr}/${dayStr} ${hoursStr}:${minutesStr}:${secondsStr}`;
}

export function formatDateToYYMMDDHHMM(dateString: string): string {
  // Date 객체 생성
  const date = new Date(dateString);

  // 연도, 월, 일, 시간, 분을 추출
  const year = date.getFullYear().toString().slice(-2);
  const month = date.getMonth() + 1; // getMonth()는 0부터 시작하므로 1을 더함
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  // 각 부분을 두 자리 문자열로 변환 (예: '01', '02', ...)
  const monthStr = month.toString().padStart(2, '0');
  const dayStr = day.toString().padStart(2, '0');
  const hoursStr = hours.toString().padStart(2, '0');
  const minutesStr = minutes.toString().padStart(2, '0');

  // 최종 형식으로 문자열 구성
  return `${year}/${monthStr}/${dayStr} ${hoursStr}:${minutesStr}`;
}

export function formatDateToYYMMDD(dateString: string): string {
  // Date 객체 생성
  const date = new Date(dateString);

  // 연도, 월, 일을 추출
  const year = date.getFullYear().toString().slice(-2); // 연도의 마지막 두 자리
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // getMonth()는 0부터 시작하므로 1을 더함
  const day = date.getDate().toString().padStart(2, '0');

  // 'YY/MM/DD' 형식으로 문자열 구성
  return `${year}/${month}/${day}`;
}

export interface TimeDifference {
  isPast: boolean;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}
