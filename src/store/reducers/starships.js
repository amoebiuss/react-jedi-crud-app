import { SET_STARSHIPS, DELETE_STARSHIP, CHANGE_BELOVED_STATUS } from '../actions/starships';

const initialState = {
  starshipsList: []
}

function starships(state = initialState, action) {
  switch (action.type) {
    case SET_STARSHIPS:
      return {
        ...state,
        starshipsList: action.starships
      };
    case DELETE_STARSHIP:
      return {
        ...state,
        starshipsList: state.starshipsList.filter(ship => ship.id !== action.id)
      };
    case CHANGE_BELOVED_STATUS:
      return {
        ...state,
        starshipsList: state.starshipsList.map((ship) => {
          return ship.id === action.id ? { ...ship, beloved: !ship.beloved } : ship
        })
      };
    default:
      return state;
  }
}

export default starships;