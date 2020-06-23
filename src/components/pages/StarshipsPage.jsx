import React, { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { Table, Heading } from '../common';
import { getShips, columnsData } from '../../services/dataService';

export const StarshipsPage = () => {
  const [columns] = useState(columnsData.starships);
  const [ships, setShips] = useState([]);
  let { url } = useRouteMatch();

  useEffect(() => {
    const getData = async () => {
      const isStorageEmpty = !localStorage.getItem('starships');
      const data = isStorageEmpty
        ? await getShips()
        : JSON.parse(localStorage.getItem('starships'));
      
      setShips(data);
      isStorageEmpty && localStorage.setItem('starships', JSON.stringify(data));
    };

    getData();
  }, [])

  const handleItemDelete = (id) => {
    const data = [...ships];
    const filteredData = data.filter(item => item.id !== id);
    setShips(filteredData);
    localStorage.setItem('starships', JSON.stringify(filteredData));
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