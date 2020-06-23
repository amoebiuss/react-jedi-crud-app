import { v4 as uuidv4 } from 'uuid';
const BASE_URL = 'https://swapi.dev/api';

export const routes = [
  {
    id: 0,
    path: '/people',
    title: 'People',
    titleSlug: 'person',
  },
  {
    id: 1,
    path: '/planets',
    title: 'Planets',
    titleSlug: 'planet',
  },
  {
    id: 2,
    path: '/starships',
    title: 'Starships',
    titleSlug: 'starship',
  },
];

export const columnsData = {
  people: ['name', 'height', 'mass', 'gender', 'birth_year'],
  planets: ['name', 'diameter', 'climate', 'terrain', 'population'],
  starships: ['name', 'model', 'manufacturer', 'crew', 'passengers'],
};

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