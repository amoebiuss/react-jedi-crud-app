import { nanoid } from 'nanoid';
import { ROUTES, COLUMNS_DATA } from './constants';

export const generateColumns = (path) => {
  return COLUMNS_DATA[path];
}

export const generateID = (value) => { // always new key
  return `${value}${nanoid()}`;
}

export const getNameBySlag = path => {
  const route = ROUTES.find(route => route.path.includes(path));
  return route.titleSlug;
}
