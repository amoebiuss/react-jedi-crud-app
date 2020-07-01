import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { connect } from 'react-redux';
import { Table, Heading } from '../common';
import { getPlanetsList } from '../../store/selectors/planets';
import { deletePlanet, changeBelovedStatus } from '../../store/actions/planets';

const PlanetsPage = ({ planets, dispatchChangeBelovedStatus, dispatchDeletePlanet }) => {
  let { url } = useRouteMatch();

  const handleBelovedStatus = (id) => {
    dispatchChangeBelovedStatus(id);
  }

  const handleItemDelete = (id) => {
    dispatchDeletePlanet(id);
  }

  const getColumns = () => {
    if (!planets.length) return [];

    return Object.keys(planets[0])
      .filter(item => item !== 'id')
      .map(columnTitle => {
        if (columnTitle === 'beloved') {
          return {
            columnTitle,
            content: ({ beloved, id }) => (
              <input
                type="checkbox"
                checked={beloved}
                onChange={() => handleBelovedStatus(id)}
              />
            )
          }
        }

        if (columnTitle === 'name') {
          return {
            columnTitle,
            content: (item) => (
              <Link
                to={{
                  pathname: `${url}/${item.id}`,
                  state: { ...item }
                }}
                style={{ color: '#ffcc00' }}
              >
                {item.name}
              </Link>
            )
          }
        }

        return { columnTitle };
      })
  }

  return (<>
    <Heading text="Planets" />

    <Link to={`${url}/new`} className="btn btn-info" style={{ margin: '15px 0' }}>
      + Add planet
    </Link>

    <Table
      data={planets}
      columns={getColumns()}
      tableDescriptor="Planets"
      onItemDelete={handleItemDelete}
    />
  </>)
};

const mapStateToProps = (state) => {
  return {
    planets: getPlanetsList(state)
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchDeletePlanet: (id) => {
      dispatch(deletePlanet(id));
    },
    dispatchChangeBelovedStatus: (id) => {
      dispatch(changeBelovedStatus(id));
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlanetsPage);