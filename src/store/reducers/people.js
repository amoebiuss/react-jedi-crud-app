import { SET_PEOPLE, DELETE_PERSON, CHANGE_BELOVED_STATUS } from '../actions/people';

const initialState = {
  peopleList: [],
}
// TODO: use arrow function.
function people(state = initialState, action) {
  switch (action.type) {
    case SET_PEOPLE:
      return {
        ...state,
        peopleList: action.payload.people,
      };
    case DELETE_PERSON:
      return {
        ...state,
        peopleList: state.peopleList.filter(person => person.id !== action.payload.id), // action data should be in payload
      };
    case CHANGE_BELOVED_STATUS: // better name toggle
      return {
        ...state,
        peopleList: state.peopleList.map((person) => {
          return person.id === action.payload.id ? { ...person, beloved: !person.beloved } : person
        }),
      };
    default:
      return state;
  }
}

export default people;
