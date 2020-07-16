// Constants. Renamed to upper case
export const ROUTES = [
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

export const COLUMNS_DATA = {
  people: ['name', 'height', 'mass', 'gender', 'birth_year'],
  planets: ['name', 'diameter', 'climate', 'terrain', 'population'],
  starships: ['name', 'model', 'manufacturer', 'crew', 'passengers'],
};
