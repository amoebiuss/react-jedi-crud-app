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
  const route = routes.find(route => route.path.includes(path));

  return `${firstPart} ${route.titleSlug}`;
}