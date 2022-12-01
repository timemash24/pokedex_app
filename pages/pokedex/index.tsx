import { getPokemonList, ListItem } from 'apis/getPokemonList';
import axios, { AxiosRequestConfig } from 'axios';
import { BASE_URL, MAX_POKEMON_COUNT } from 'constants/common';
import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';
import { dehydrate, QueryClient, useQuery } from 'react-query';

type Props = {
  results: ListItem[];
};

const Pokedex: NextPage<Props> = ({ results }) => {
  console.log(results);
  const { data } = useQuery(['pokemonList'], getPokemonList);
  console.log(data);

  return (
    <div>
      <h1>pokedex</h1>
      <ul>
        {results?.map((pokemon: ListItem, i: number) => {
          return (
            <li key={pokemon.name}>
              <Link href={`/pokedex/pokemons/${pokemon.name}`}>
                <a>{pokemon.name}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export const getStaticProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery('pokemonList', getPokemonList);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
  // const axiosConfig: AxiosRequestConfig = {
  //   baseURL: BASE_URL,
  //   params: { limit: MAX_POKEMON_COUNT, offset: 0 },
  // };
  // const client = axios.create(axiosConfig);
  // try {
  //   const res = await client.get(`/pokemon`);
  //   const { results } = res.data;
  //   return {
  //     props: {
  //       results,
  //     },
  //   };
  // } catch (error) {
  //   console.log(error);
  // }
};

export default Pokedex;
