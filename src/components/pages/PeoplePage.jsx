import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { connect } from 'react-redux';
import { Table, Heading } from '../common';
import { getPeopleList } from '../../store/selectors/people';
import { deletePerson, changeBelovedStatus } from '../../store/actions/people';

const PeoplePage = ({ people, dispatchChangeBelovedStatus, dispatchDeletePerson }) => {
  let { url } = useRouteMatch();

  const handleBelovedStatus = (id) => {
    dispatchChangeBelovedStatus(id);
  }

  const handleItemDelete = (id) => {
    dispatchDeletePerson(id);
  }

  const getColumns = () => {
    if (!people.length) return [];

    return Object.keys(people[0])
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
    <Heading text="People" />

    <Link to={`${url}/new`} className="btn btn-info" style={{ margin: '15px 0' }}>
      + Add person
    </Link>

    <Table
      data={people}
      columns={getColumns()}
      tableDescriptor="People"
      onItemDelete={handleItemDelete}
    />
  </>)
}

const mapStateToProps = (state) => {
  return {
    people: getPeopleList(state)
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchDeletePerson: (id) => {
      dispatch(deletePerson(id));
    },
    dispatchChangeBelovedStatus: (id) => {
      dispatch(changeBelovedStatus(id));
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PeoplePage);