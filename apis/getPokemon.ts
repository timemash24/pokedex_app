import { BASE_URL } from './../constants/common';
import { Api } from './Api';

interface Info {
  name: string;
  url: string;
}

export interface Sprites {
  front_default: string;
  back_default: string;
}

export interface Type {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface Ability {
  ability: {
    name: string;
  };
}

export interface Stats {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

export interface Pokemon {
  name: string;
  id: number;
  forms: Info[];
  sprites: Sprites;
  types: Type[];
  abilities: Ability[];
  stats: Stats[];
  weight: number;
  height: number;
}

export const getPokemon = (name: string) =>
  Api.get<Pokemon>(`${BASE_URL}/pokemon/${name}`);
