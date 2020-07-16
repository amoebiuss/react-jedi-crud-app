import { SET_PLANETS, DELETE_PLANET, CHANGE_BELOVED_STATUS } from '../actions/planets';

const initialState = {
  planetsList: [],
}

function planets(state = initialState, action) {
  switch (action.type) {
    case SET_PLANETS:
      return {
        ...state,
        planetsList: action.planets,
      };
    case DELETE_PLANET:
      return {
        ...state,
        planetsList: state.planetsList.filter(planet => planet.id !== action.id),
      };
    case CHANGE_BELOVED_STATUS:
      return {
        ...state,
        planetsList: state.planetsList.map((planet) => {
          return planet.id === action.id ? { ...planet, beloved: !planet.beloved } : planet
        }),
      };
    default:
      return state;
  }
}

export default planets;
