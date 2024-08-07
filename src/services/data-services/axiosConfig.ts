import axios, {AxiosInstance} from 'axios';

export const httpsClient: AxiosInstance = axios.create({
  baseURL: 'https://my-json-server.typicode.com/typicode/demo',
});
