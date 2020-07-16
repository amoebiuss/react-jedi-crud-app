import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { ROUTES } from '../services/constants';

export default () => (
  <Navbar>
    <Navbar.Collapse>
      <Nav>
        {ROUTES.map((route, id) => (
          <NavItem eventkey={id} key={route.id} href={route.path}>
            <Nav.Link as={Link} to={route.path}>{route.title}</Nav.Link>
          </NavItem>
        ))}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
