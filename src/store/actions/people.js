// nice add module to action type: people/SET_PEOPLE
export const SET_PEOPLE = 'people/SET_PEOPLE'
export const DELETE_PERSON = 'people/DELETE_PERSON'
export const CHANGE_BELOVED_STATUS = 'people/CHANGE_BELOVED_STATUS'

// TODO: use Flux standard Action
export const setPeople = people => ({ type: SET_PEOPLE, payload: { people } })

export const deletePerson = id => ({ type: DELETE_PERSON, payload: { id } })

export const changeBelovedStatus = id => ({ type: CHANGE_BELOVED_STATUS, payload: { id } })
