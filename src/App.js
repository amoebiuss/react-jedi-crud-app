import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import Navbar from './components/Navbar';
import { PeoplePage } from './pages/PeoplePage';
import { PlanetsPage } from './pages/PlanetsPage';
import { StarshipsPage } from './pages/StarshipsPage';
import { NotFoundPage } from './pages/NotFoundPage';
import 'bootstrap/dist/css/bootstrap.css';

const routes = [
    {
        path: '/people',
        title: 'People',
    },
    {
        path: '/planets',
        title: 'Planets',
    },
    {
        path: '/starships',
        title: 'Starships',
    },
]

function App() {
    return (
        <Router>
            <Navbar routes={routes} />
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
    </Router>
    )
}

export default App;
