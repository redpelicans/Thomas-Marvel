import axios from 'axios';
import crypto from 'crypto';
import { format } from 'date-fns';

export const HERO_FETCHED = 'LOAD_HERO';
export const HeroFetched = hero => ({ type: HERO_FETCHED, payload: hero });

export const HEROES_FETCHED = 'LOAD_HEROES';
export const HeroesFetched = heroes => ({ type: HEROES_FETCHED, payload: { heroes: heroes } });

export const RESET_HERO = 'RESET_HERO';
export const resetHero = () => ({ type: RESET_HERO });

const publicKey = 'd8a7fbd21cdddacbb0e72a5c356f4c32';
const privateKey = '63e8762d066dd88b346ce8ec94f6354c630e3cb1';

export const fetchHero = id => dispatch => {
  const ts = format(new Date(), 'ssss');
  const baseURL = `http://gateway.marvel.com/v1/public/characters/${id}?`;
  const queryParams = `ts=${ts}&apikey=${publicKey}&hash=${crypto
    .createHash('md5')
    .update(`${ts}${privateKey}${publicKey}`)
    .digest('hex')}`;

  axios.get(`${baseURL}${queryParams}`)
  .then(({ data }) => dispatch(HeroFetched(data.data.results)))
  .catch(error => console.log(error))
}

export const fetchHeroes = () => dispatch => {
  const ts = format(new Date(), 'ssss');
  const baseURL = 'http://gateway.marvel.com/v1/public/characters?';
  const queryParams = `ts=${ts}&apikey=${publicKey}&hash=${crypto
    .createHash('md5')
    .update(`${ts}${privateKey}${publicKey}`)
    .digest('hex')}`;

  axios.get(`${baseURL}${queryParams}`)
  .then(({ data }) => dispatch(HeroesFetched(data.data.results)))
  .catch(error => console.log(error))
};
