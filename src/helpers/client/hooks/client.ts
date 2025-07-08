import axios from 'axios';

const client = axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? 'https://hanuri.or.kr/api'
      : 'http://localhost:3000/api',
  withCredentials: true,
});

client.interceptors.request.use((config) => {
  if (config.data instanceof FormData) {
    // FormData일 때는 Content-Type을 삭제
    delete config.headers['Content-Type'];
  }
  return config;
});

export { client };
