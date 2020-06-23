import React, { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { Table, Heading } from '../common';
import { getPlanets, columnsData } from '../../services/dataService';

export const PlanetsPage = () => {
  const [columns] = useState(columnsData.planets);
  const [planets, setPlanets] = useState([]);
  let { url } = useRouteMatch();

  useEffect(() => {
    const getData = async () => {
      const isStorageEmpty = !localStorage.getItem('planets');
      const data = isStorageEmpty
        ? await getPlanets()
        : JSON.parse(localStorage.getItem('planets'));
      
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