import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { BASE_URL } from 'constants/common';
import { Layout } from 'components/Layout';
import Link from 'next/link';
import Menu from 'components/Menu';
import axios from 'axios';

const Home: NextPage = (results) => {
  console.log(results);
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

export const getServerSideProps = async () => {
  const data = await (await axios.get(`${BASE_URL}/pokemon-species/1`)).data;
  return {
    props: {
      results: data,
    },
  };
};

export default Home;
