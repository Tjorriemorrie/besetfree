import React from 'react';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/lib/createBrowserHistory'
import {
    Router, Route, IndexRoute
} from 'react-router';
import App from './App.jsx';
import Welcome from './Welcome.jsx';
import Services from './Services.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';


let routes = (
    <Router>
        <Route path="/" component={App}>
            <IndexRoute component={Welcome}/>
            <Route path="services" component={Services}/>
            <Route path="about" component={About}/>
            <Route path="contact" component={Contact}/>
        </Route>
    </Router>
);

let history = createBrowserHistory();

const el = document.getElementById('app');

ReactDOM.render(<Router routes={routes} history={history}/>, el);

