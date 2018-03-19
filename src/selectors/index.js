import { createSelector } from 'reselect';

const hero = state => state.hero
export const getHero = createSelector(
  hero, res => res[0]
)

const heroes = state => state.heroes;
export const getHeroes = createSelector(
  heroes, res => res
)
