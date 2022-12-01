import axios, { AxiosRequestConfig } from 'axios';
import { BASE_URL, MAX_POKEMON_COUNT } from 'constants/common';

export const getPokemons = async () => {
  const axiosConfig: AxiosRequestConfig = {
    baseURL: BASE_URL,
    params: { limit: MAX_POKEMON_COUNT, offset: 0 },
  };
  const client = axios.create(axiosConfig);
  try {
    const res = await client.get(`/pokemon`);
    console.log(res);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
