import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

export default ({ routes }) => (
  <Navbar>
    <Navbar.Collapse>
      <Nav>
        {routes.map((route, id) => (
          <NavItem eventkey={id} href={route.path}>
            <Nav.Link as={Link} to={route.path}>{route.title}</Nav.Link>
          </NavItem>
        ))}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);