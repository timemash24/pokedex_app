import { ListItem } from 'apis/getPokemonList';
import axios, { AxiosRequestConfig } from 'axios';
import { BASE_URL, MAX_POKEMON_COUNT } from 'constants/common';
import {
  GetServerSideProps,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from 'next';
import { useRouter } from 'next/router';
import React, { useMemo, useRef } from 'react';
interface Color {
  name: string;
  url: string;
}

interface EvolutionChain {
  url: string;
}

export interface EvolvesFromSpecies {
  name: string;
  url: string;
}

interface FlavorText {
  flavor_text: string;
  language: {
    name: string;
    url: string;
  };
  version: {
    name: string;
    url: string;
  };
}

interface GeneraInfo {
  genus: string;
  language: {
    name: string;
    url: string;
  };
}

export interface PokemonSpecies {
  id: number;
  name: string;
  color: Color;
  evolution_chain: EvolutionChain;
  evolves_from_species: EvolvesFromSpecies;
  flavor_text_entries: FlavorText[];
  genera: GeneraInfo[];
}

type Props = {
  data: PokemonSpecies;
};

const Detail: NextPage<Props> = ({ data }) => {
  const router = useRouter();

  console.log(data);

  return (
    <div>
      <h1>Detail</h1>
      <p>{data.name}</p>
      {/* {params ? (
        <p>
          No.{params[1]}:{params[0]}
        </p>
      ) : null} */}
    </div>
  );
};

// 전역변수로 이용 가능?? 지금은 중복 호출이므로 개선하기
// params 이용??
export const getStaticPaths = async () => {
  const axiosConfig: AxiosRequestConfig = {
    baseURL: BASE_URL,
    params: { limit: MAX_POKEMON_COUNT, offset: 0 },
  };
  const client = axios.create(axiosConfig);
  try {
    const res = await client.get(`/pokemon`);
    const { results } = res.data;
    const paths = results.map((pokemon: ListItem) => ({
      params: { name: pokemon.name },
    }));
    return { paths, fallback: false };
  } catch (error) {
    console.log(error);
  }
};

type Params = {
  params: { name: string };
};

export const getStaticProps = async ({ params }: Params) => {
  const axiosConfig: AxiosRequestConfig = {
    baseURL: BASE_URL,
  };
  const client = axios.create(axiosConfig);
  try {
    const res = await client.get(`/pokemon-species/${params?.name}`);
    const data = res.data;
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.log(error);
  }
};

export default Detail;
