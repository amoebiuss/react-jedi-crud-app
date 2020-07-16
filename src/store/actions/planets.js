/* TODO:
 1. add module to action names
 2. use arrow function
 3. use Flux Standard Action
*/

export const SET_PLANETS = 'SET_PLANETS';
export const DELETE_PLANET = 'DELETE_PLANET';
export const CHANGE_BELOVED_STATUS = 'CHANGE_BELOVED_STATUS';

export function setPlanets(planets) {
  return { type: SET_PLANETS, planets };
}

export function deletePlanet(id) {
  return { type: DELETE_PLANET, id };
}

export function changeBelovedStatus(id) {
  return { type: CHANGE_BELOVED_STATUS, id };
}
