import { HEROES_FETCHED, HERO_FETCHED, RESET_HERO } from '../actions';

const initialState = {
  heroes: [],
  hero: {},
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case HEROES_FETCHED:
      return { ...state, heroes: action.payload.heroes };
    case HERO_FETCHED:
      return { ...state, hero: action.payload };
    case RESET_HERO:
      return { ...state, hero: {} };
    default:
      return state;
  }
}

export default reducer;
