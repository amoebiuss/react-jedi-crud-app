import axios from 'axios';

const BASE_URL = 'https://swapi.dev/api';

async function get(path) {
  const response = await axios(
    `${BASE_URL}/${path}`,
  );

  const data = response.data.results.map((item, index) => {
    return { ...item, id: index }
  });

  return {
    data: data,
    columns: Object.keys(data[0]),
  };
}

export { get };