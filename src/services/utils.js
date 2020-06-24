import { nanoid } from 'nanoid';
import { routes, columnsData } from './dataService';

export const generateColumns = (path) => {
  return columnsData[path];
}

export const generateID = (value) => {
  return `${value}${nanoid()}`;
}

export const generateHeading = (path, editing) => {
  const firstPart = editing ? 'Edit' : 'Add new';
  const route = routes.find(route => path.includes(route.path));

  return `${firstPart} ${route.titleSlug}`;
}