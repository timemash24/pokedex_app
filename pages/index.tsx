import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { BASE_URL, MAX_POKEMON_COUNT } from 'constants/common';
import { Layout } from 'components/Layout';
import Link from 'next/link';
import Menu from 'components/Menu';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { getPocketmonList } from 'apis/getPokemonList';
import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';

const Home: NextPage = () => {
  return (
    <Layout>
      <Menu
        name="포켓몬 도감 열기"
        imgURL="/img/pokedex_menu.png"
        page="pokedex"
      />
      <Menu
        name="나와 맞는 포켓몬 찾기"
        imgURL="/img/findPokemon_menu.png"
        page="findPokemon"
      />
    </Layout>
  );
};
interface ListItem {
  name: string;
  url: string;
}
interface Params {
  limit: number;
  offset: number;
}

interface Response {
  count: number;
  next: string;
  previous: string;
  results: ListItem[];
}

// export const getStaticProps = async () => {
//   const axiosConfig: AxiosRequestConfig = {
//     baseURL: BASE_URL,
//     params: { limit: MAX_POKEMON_COUNT, offset: 0 },
//   };
//   const client = axios.create(axiosConfig);
//   try {
//     const res = await client.get(`/pokemon`);
//     // const res = await axios.get<Response>(`${BASE_URL}/pokemon`, {limit: MAX_POKEMON_COUNT, offset:0});
//     const data = res.data;
//     return {
//       props: {
//         results: data,
//       },
//     };
//   } catch (error) {
//     console.log(error);
//   }
// };

export default Home;
