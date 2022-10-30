import { ListItem } from 'apis/getPokemonList';
import axios, { AxiosRequestConfig } from 'axios';
import { BASE_URL, MAX_POKEMON_COUNT } from 'constants/common';
import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';

type Props = {
  results: ListItem[];
};

const Pokedex: NextPage<Props> = ({ results }) => {
  console.log(results);
  return (
    <div>
      <h1>pokedex</h1>
      <ul>
        {results?.map((pokemon: ListItem) => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
};

export const getStaticProps = async () => {
  const axiosConfig: AxiosRequestConfig = {
    baseURL: BASE_URL,
    params: { limit: MAX_POKEMON_COUNT, offset: 0 },
  };
  const client = axios.create(axiosConfig);
  try {
    const res = await client.get(`/pokemon`);
    const { results } = res.data;
    return {
      props: {
        results,
      },
    };
  } catch (error) {
    console.log(error);
  }
};

export default Pokedex;
