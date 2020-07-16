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
import { loadPeople, loadPlanets, loadShips } from './services/dataService';
import { setPeople } from './store/actions/people';
import { setPlanets } from './store/actions/planets';
import { setStarships } from './store/actions/starships';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        async function fetchData() {
            const peopleResponse = await loadPeople();
            dispatch(setPeople(peopleResponse));
        }
        fetchData();
    }, [])

    useEffect(() => {
        async function fetchData() {
            const planetsResponse = await loadPlanets();
            dispatch(setPlanets(planetsResponse));
        }
        fetchData();
    }, [])


    useEffect(() => {
        async function fetchData() {
            const starshipsResponse = await loadShips();
            dispatch(setStarships(starshipsResponse));
        }
        fetchData();
    }, [])

    return (
        <Router>
            <Navbar /> {/* import constant in Navbar instead past via props */}
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
