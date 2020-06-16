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
        id: 0,
        path: '/people',
        title: 'People',
    },
    {
        id: 1,
        path: '/planets',
        title: 'Planets',
    },
    {
        id: 2,
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
