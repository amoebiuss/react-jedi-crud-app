import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import Navbar from './components/Navbar';
import { PeoplePage, PlanetsPage, StarshipsPage, NotFoundPage, FormPage } from './components/pages';
import { routes } from './services/dataService';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
    return (
        <Router>
            <Navbar routes={routes} />
            <div className="container">
                <Switch>
                    <Redirect exact from="/" to="/people"/>
                    <Route path="/people/:id" component={FormPage}/>
                    <Route path="/people" component={PeoplePage} />
                    <Route path="/planets/:id" component={FormPage} />
                    <Route path="/planets" component={PlanetsPage} />
                    <Route path="/starships/:id" component={FormPage} />
                    <Route path="/starships" component={StarshipsPage} />
                    <Route exact path='*' component={NotFoundPage} />
                </Switch>
            </div>
        </Router>
    )
}

export default App;
