import { v4 as uuidv4 } from 'uuid';

export const generateColumns = (obj) => {
  return Object.keys(obj).filter(key => key !== 'id');
}

export const generateID = () => {
  return uuidv4();
}
