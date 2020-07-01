import { SET_PEOPLE, DELETE_PERSON, CHANGE_BELOVED_STATUS } from '../actions/people';

const initialState = {
  peopleList: []
}

function people(state = initialState, action) {
  switch (action.type) {
    case SET_PEOPLE:
      return {
        ...state,
        peopleList: action.people
      };
    case DELETE_PERSON:
      return {
        ...state,
        peopleList: state.peopleList.filter(person => person.id !== action.id)
      };
    case CHANGE_BELOVED_STATUS:
      return {
        ...state,
        peopleList: state.peopleList.map((person) => {
          return person.id === action.id ? { ...person, beloved: !person.beloved } : person
        })
      };
    default:
      return state;
  }
}

export default people;