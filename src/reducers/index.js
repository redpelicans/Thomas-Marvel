import { LOAD_HEROES, LOAD_HERO } from '../actions';

const initialState = {
  heroes: {},
  hero: {},
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOAD_HEROES:
      return { ...state, heroes: action.payload.heroes };
    case LOAD_HERO:
      return { ...state, hero: action.payload.hero };
    default:
      return state;
  }
}

export default reducer;
