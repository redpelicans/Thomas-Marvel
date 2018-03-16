import { LOAD_HEROES } from '../actions';

const initialState = {};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOAD_HEROES:
      return { ...state, heroes: action.payload.heroes }
    default:
      return state;
  }
}

export default reducer;
