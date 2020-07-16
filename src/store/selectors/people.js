export const getPeopleList = (state) => state.people.peopleList || []

/*
  1. now when you will change path for peopleList in state you will change only one selector
  2. validate for null or undefined done in getPeopleList
 */
export const getPerson = (state, id) =>
  getPeopleList(state).find(person => person.id === id) || null
