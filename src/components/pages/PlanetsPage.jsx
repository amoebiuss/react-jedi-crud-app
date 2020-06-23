import React, { useState, useEffect } from 'react';
import { Table, Form, Heading } from '../common';
import * as dataService from '../../services/dataService';

let columns = [];

export const PlanetsPage = () => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const isStorageEmpty = !localStorage.getItem('planets');
      const data = isStorageEmpty
        ? await dataService.getPlanets()
        : JSON.parse(localStorage.getItem('planets'));

      columns = Object.keys(data[0]).filter(item => item !== 'id');
      setPlanets(data);

      isStorageEmpty && localStorage.setItem('planets', JSON.stringify(data));
    };

    getData();
  }, [])

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

  const handleRowDelete = (name) => {
    const data = [...planets];
    const filteredData = data.filter(item => item.name !== name);
    setPlanets(filteredData);
    localStorage.setItem('planets', JSON.stringify(filteredData));
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