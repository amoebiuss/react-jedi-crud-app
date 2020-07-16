/* TODO:
 1. add module to action names
 2. use arrow function
 3. use Flux Standard Action
*/

export const SET_STARSHIPS = 'SET_STARSHIPS'
export const DELETE_STARSHIP = 'DELETE_STARSHIP'
export const CHANGE_BELOVED_STATUS = 'CHANGE_BELOVED_STATUS'

export function setStarships(starships) {
  return { type: SET_STARSHIPS, starships };
}

export function deleteStarship(id) {
  return { type: DELETE_STARSHIP, id };
}

export function changeBelovedStatus(id) {
  return { type: CHANGE_BELOVED_STATUS, id };
}
