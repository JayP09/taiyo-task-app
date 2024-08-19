import axios from 'axios';

type BaseOptions<T> = {
  url: string;
  params?: T;
};

type GetType<T> = BaseOptions<T>;

export const get = async <T>({ url, params = {} as T }: GetType<T>) => {
  return axios.get(url, { params });
};
