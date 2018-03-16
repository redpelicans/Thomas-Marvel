import { isEmpty } from 'ramda';

export const getHero = state => state.hero[0]
export const getHeroes = state => state.heroes;
