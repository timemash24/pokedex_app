import { getPokemon, Pokemon } from 'apis/getPokemon';
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
import { dehydrate, QueryClient, useQuery } from 'react-query';

interface Props {
  name: string;
}

const Detail = ({ name }: Props) => {
  const { data, isLoading } = useQuery(['pokemon'], () => getPokemon(name));
  console.log(data);
  if (isLoading || !data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Detail</h1>
      {/* {data?.name} */}
      {/* {data && <ul>
        <li>{data?.name}</li>
      </ul>} */}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (contexts) => {
  try {
    if (contexts?.params?.name) {
      const name = contexts.params.name[0];
      const queryClient = new QueryClient();

      await queryClient.prefetchQuery('pokemons', () => getPokemon(name));

      return {
        props: {
          dehydratedState: dehydrate(queryClient),
          name: contexts.params.name,
        },
      };
    }
  } catch (error) {
    console.error('Error', error);
  }

  return {
    props: {
      name: 'bulbasaur',
    },
  };
};

export default Detail;
