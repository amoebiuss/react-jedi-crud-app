import { v4 as uuidv4 } from 'uuid';
import { routes } from './dataService';

export const generateColumns = (obj) => {
  return Object.keys(obj).filter(key => key !== 'id');
}

export const generateID = () => {
  return uuidv4();
}

export const generateHeading = (path, editing) => {
  const firstPart = editing ? 'Edit' : 'Add new';
  const route = routes.find(route => path.includes(route.path));

  return `${firstPart} ${route.titleSlug}`;
}