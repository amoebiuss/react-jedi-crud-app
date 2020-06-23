import React, { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { Table, Heading } from '../common';
import * as dataService from '../../services/dataService';

let columns = [];

export const PlanetsPage = () => {
  const [planets, setPlanets] = useState([]);
  let { url } = useRouteMatch();

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

  const handleItemDelete = (id) => {
    const data = [...planets];
    const filteredData = data.filter(item => item.id !== id);
    setPlanets(filteredData);
    localStorage.setItem('planets', JSON.stringify(filteredData));
  }

  return (<>
    <Heading text="Planets" />

    <Link to={`${url}/new`} className="btn btn-info" style={{ margin: '15px 0' }}>
      + Add planet
    </Link>

    <Table
      data={planets}
      columns={columns}
      tableDescriptor="Planets"
      onItemDelete={handleItemDelete}
    />
  </>)
};