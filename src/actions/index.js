import axios from 'axios';
import crypto from 'crypto';
import { format } from 'date-fns';

const publicKey = 'd8a7fbd21cdddacbb0e72a5c356f4c32';
const privateKey = '63e8762d066dd88b346ce8ec94f6354c630e3cb1';

export const fetchHeroes = () => dispatch => {
  const ts = format(new Date(), 'ssss');

  axios.get(`http://gateway.marvel.com/v1/public/comics?ts=${ts}&apikey=${publicKey}&hash=${crypto.createHash('md5').update(`${ts}${privateKey}${publicKey}`).digest('hex')}`).then(({ data }) => console.log(data.data.results))
};
