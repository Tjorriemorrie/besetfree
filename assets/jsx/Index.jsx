import React from 'react';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/lib/createBrowserHistory'
import {Router, Route, IndexRoute} from 'react-router';
import App from './App.jsx';
import Home from './Home.jsx';
import About from './About.jsx';
import Services from './Services.jsx';
import Consulting from './Consulting.jsx';
import Training from './Training.jsx';
import Therapies from './Therapies.jsx';
import Courses from './Courses.jsx';
import Contact from './Contact.jsx';


let routes = (
    <Router>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/services" component={Services}>
                <IndexRoute component={Consulting}/>
                <Route path="consulting" component={Consulting}/>
                <Route path="workshops/and/training" component={Training}/>
            </Route>
            <Route path="/therapies" component={Therapies}/>
            <Route path="/events/and/workshops" component={Courses}/>
            <Route path="/contact" component={Contact}/>
        </Route>
    </Router>
);

let history = createBrowserHistory();

const el = document.getElementById('app');

ReactDOM.render(<Router routes={routes} history={history}/>, el);

