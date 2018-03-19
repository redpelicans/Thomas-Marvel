import { createSelector } from 'reselect';
import { isEmpty } from 'ramda';

const hero = state => state.hero
export const getHero = createSelector(
  hero, hero => hero[0]
)

const heroes = state => state.heroes;
export const getHeroes = createSelector(
  heroes, heroes => heroes
)
