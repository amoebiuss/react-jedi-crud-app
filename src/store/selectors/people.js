export const getPeopleList = (state) => {
  return state.people.peopleList;
}

export const getPerson = (state, id) => {
  return state.people.peopleList.find(person => person.id === id) || null;
}