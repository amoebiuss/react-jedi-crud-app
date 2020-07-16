import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { connect } from 'react-redux';
import { Table, Heading } from '../common';
import { getStarshipsList } from '../../store/selectors/starships';
import { deleteStarship, changeBelovedStatus } from '../../store/actions/starships';

export const StarshipsPage = ({ starships, dispatchChangeBelovedStatus, dispatchDeleteStarship }) => {
  let { url } = useRouteMatch();
  
  const handleBelovedStatus = (id) => {
    dispatchChangeBelovedStatus(id);
  }

  const handleItemDelete = (id) => {
    dispatchDeleteStarship(id);
  }

  const getColumns = () => {
    if (!starships.length) return [];

    return Object.keys(starships[0])
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
    <Heading text="Starships" />

    <Link to={`${url}/new`} className="btn btn-info" style={{ margin: '15px 0' }}>
      + Add starship
    </Link>

    <Table
      data={starships}
      columns={getColumns()}
      tableDescriptor="Starships"
      onItemDelete={handleItemDelete}
    />
  </>)
};


const mapStateToProps = (state) => {
  return {
    starships: getStarshipsList(state)
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchDeleteStarship: (id) => {
      dispatch(deleteStarship(id));
    },
    dispatchChangeBelovedStatus: (id) => {
      dispatch(changeBelovedStatus(id));
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StarshipsPage);
