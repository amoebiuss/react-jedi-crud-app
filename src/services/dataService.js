import { nanoid } from 'nanoid';
const BASE_URL = 'https://swapi.dev/api';

// rename: get => load - avoid confusing with selectors
export const loadPeople = async () => {
  const peopleRes = await (await fetch(`${BASE_URL}/people`)).json();

  return peopleRes.results.map(({ name, height, mass, gender, birth_year }) => ({
    name, height, mass, gender, birth_year, id: nanoid(), beloved: false
  }));
}

export const loadPlanets = async () => {
  const planetsRes = await (await fetch(`${BASE_URL}/planets`)).json();

  return planetsRes.results.map(({ name, diameter, climate, terrain, population }) => ({
    name, diameter, climate, terrain, population, id: nanoid(), beloved: false
  }));
};

export const loadShips = async () => {
  const shipsRes = await (await fetch(`${BASE_URL}/starships`)).json();

  return shipsRes.results.map(({ name, model, manufacturer, crew, passengers }) => ({
    name, model, manufacturer, crew, passengers, id: nanoid(), beloved: false
  }));
};
