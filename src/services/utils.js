import { v4 as uuidv4 } from 'uuid';
import { routes, columnsData } from './dataService';

export const generateColumns = (path) => {
  return columnsData[path];
}

export const generateID = () => {
  return uuidv4();
}

export const generateHeading = (path, editing) => {
  const firstPart = editing ? 'Edit' : 'Add new';
  const route = routes.find(route => path.includes(route.path));

  return `${firstPart} ${route.titleSlug}`;
}