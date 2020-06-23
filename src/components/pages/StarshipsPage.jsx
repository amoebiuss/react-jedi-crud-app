import React, { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { Table, Heading } from '../common';
import * as dataService from '../../services/dataService';

let columns = [];

export const StarshipsPage = () => {
  const [ships, setShips] = useState([]);
  let { url } = useRouteMatch();

  useEffect(() => {
    const getData = async () => {
      const isStorageEmpty = !localStorage.getItem('starships');
      const data = isStorageEmpty
        ? await dataService.getShips()
        : JSON.parse(localStorage.getItem('starships'));

      columns = Object.keys(data[0]).filter(item => item !== 'id');
      setShips(data);

      isStorageEmpty && localStorage.setItem('starships', JSON.stringify(data));
    };

    getData();
  }, [])

  const handleItemDelete = (id) => {
    const data = [...ships];
    const filteredData = data.filter(item => item.id !== id);
    setShips(filteredData);
    localStorage.setItem('ships', JSON.stringify(filteredData));
  }

  return (<>
    <Heading text="Starships" />

    <Link to={`${url}/new`} className="btn btn-info" style={{ margin: '15px 0' }}>
      + Add starship
    </Link>

    <Table
      data={ships}
      columns={columns}
      tableDescriptor="Starships"
      onItemDelete={handleItemDelete}
    />
  </>)
};