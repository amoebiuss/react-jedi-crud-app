import React, { useState } from 'react';
import Table from '../components/common/Table';
import Form from '../components/common/Form';
import Heading from '../components/common/Heading';

const data = [
  { name: 'Tatooine', diameter: '10465', terrain: 'desert', id: '1' },
  { name: 'Alderaan', diameter: '12500', terrain: 'grasslands, mountains', id: '2' },
  { name: 'Dagobah', diameter: '8900', terrain: 'swamp, jungles', id: '3' },
]

const columns = Object.keys(data[0]);

export const PlanetsPage = () => {
  const [planets, setPlanets] = useState(data);

  const handleAppPlanet = (planetData) => {
    const data = [...planets, planetData];
    setPlanets(data)
  }

  const getInitialPlanetData = () => {
    return columns.reduce((cols, columnName) => {
      cols[columnName] = "";
      return cols;
    }, {})
  }

  const handleRowDelete = (id) => {
    const data = [...planets];
    const filteredData = data.filter(item => item.id !== id);
    setPlanets(filteredData);
  }

  return (<>
    <Heading text="Planets" />

    <Table
      data={planets}
      columns={columns}
      tableDescriptor="Planets"
      onRowDelete={handleRowDelete}
    />

    <Form
      initialData={getInitialPlanetData()}
      columns={columns}
      onAddData={handleAppPlanet}
    />
  </>)
};