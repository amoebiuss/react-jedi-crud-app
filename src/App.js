import React, { useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Navbar from './components/Navbar';
import { PeoplePage, PlanetsPage, StarshipsPage, NotFoundPage, FormPage } from './components/pages';
import { routes, getPeople, getPlanets, getShips } from './services/dataService';
import { setPeople } from './store/actions/people';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        async function fetchData() {
            const peopleResponse = await getPeople();
            dispatch(setPeople(peopleResponse));
        }

        fetchData();
    }, [])

    return (
        <Router>
            <Navbar routes={routes} />
            <main className="container">
                <Switch>
                    <Redirect exact from="/" to="/people" />
                    <Route path="/people/:id" component={FormPage} />
                    <Route path="/people" component={PeoplePage} />
                    <Route path="/planets/:id" component={FormPage} />
                    <Route path="/planets" component={PlanetsPage} />
                    <Route path="/starships/:id" component={FormPage} />
                    <Route path="/starships" component={StarshipsPage} />
                    <Route exact path='*' component={NotFoundPage} />
                </Switch>
            </main>
        </Router>
    )
}

export default App;
