import { v4 as uuidv4 } from 'uuid';
const BASE_URL = 'https://swapi.dev/api';

export const getPeople = async () => {
  const peopleRes = await (await fetch(`${BASE_URL}/people`)).json();

  return peopleRes.results.map(({ name, height, mass, gender, birth_year }) => ({
    name, height, mass, gender, birth_year, id: uuidv4()
  }));
}

export const getPlanets = async () => {
  const planetsRes = await (await fetch(`${BASE_URL}/planets`)).json();

  return planetsRes.results.map(({ name, diameter, climate, terrain, population }) => ({
    name, diameter, climate, terrain, population, id: uuidv4()
  }));
};

export const getShips = async () => {
  const shipsRes = await (await fetch(`${BASE_URL}/starships`)).json();

  return shipsRes.results.map(({ name, model, manufacturer, crew, passengers }) => ({
    name, model, manufacturer, crew, passengers, id: uuidv4()
  }));
};