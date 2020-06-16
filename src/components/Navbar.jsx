import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { PeoplePage } from '../pages/PeoplePage';
import { PlanetsPage } from '../pages/PlanetsPage';
import { StarshipsPage } from '../pages/StarshipsPage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

export default () => (
  <Router>
    <>
      <Navbar>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventkey={1} href="/people">
              <Nav.Link as={Link} to="/people">People</Nav.Link>
            </NavItem>

            <NavItem eventkey={2} href="/planets">
              <Nav.Link as={Link} to="/planets">Planets</Nav.Link>
            </NavItem>

            <NavItem eventkey={3} href="/starships">
              <Nav.Link as={Link} to="/starships">Starships</Nav.Link>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div className="container">
        <Switch>
          <Route exact path="/">
            <PeoplePage />
          </Route>
          <Route path="/people">
            <PeoplePage />
          </Route>
          <Route path="/planets">
            <PlanetsPage />
          </Route>
          <Route path="/starships">
            <StarshipsPage />
          </Route>
          <Route exact path='*'>
            <NotFoundPage />
          </Route>
        </Switch>
      </div>
    </>
  </Router>
);