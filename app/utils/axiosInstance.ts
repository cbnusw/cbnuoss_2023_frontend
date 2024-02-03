import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('access-token');
    if (accessToken) config.headers['x-access-token'] = accessToken;
    return config;
  },
  (error) => {
    // 요청 에러 처리
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response) => {
    // 응답 데이터를 처리
    return response;
  },
  (error) => {
    // 응답 에러 처리
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 401 Unauthorized 에러 처리
          localStorage.removeItem('access-token');
          localStorage.removeItem('refresh-token');
          localStorage.removeItem('activeAuthorization');
          if (typeof window !== 'undefined') window.location.href = '/login';
          break;
        case 500:
          // 500 Internal Server Error 에러 처리
          alert('서버에 오류가 발생하였습니다. 잠시 후 다시 시도해주세요.');
          break;
        default:
          break;
      }
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
