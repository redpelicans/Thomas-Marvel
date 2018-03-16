import axios from 'axios';
import crypto from 'crypto';
import { format } from 'date-fns';

// export const SET_HERO_ID = 'SET_HERO_ID';
// export const setHeroId = id => ({ type: SET_HERO_ID, payload: { heroId: } })

export const LOAD_HERO = 'LOAD_HERO';
export const loadHero = hero => ({ type: LOAD_HERO, payload: { hero: hero } });

export const LOAD_HEROES = 'LOAD_HEROES';
export const loadHeroes = heroes => ({ type: LOAD_HEROES, payload: { heroes: heroes } });

const publicKey = 'd8a7fbd21cdddacbb0e72a5c356f4c32';
const privateKey = '63e8762d066dd88b346ce8ec94f6354c630e3cb1';

export const fetchHeroes = () => dispatch => {
  const ts = format(new Date(), 'ssss');
  const baseURL = 'http://gateway.marvel.com/v1/public/characters?';
  const queryParams = `ts=${ts}&apikey=${publicKey}&hash=${crypto
    .createHash('md5')
    .update(`${ts}${privateKey}${publicKey}`)
    .digest('hex')}`;

  axios.get(`${baseURL}${queryParams}`)
  .then(({ data }) => dispatch(loadHeroes(data.data.results)))
};
