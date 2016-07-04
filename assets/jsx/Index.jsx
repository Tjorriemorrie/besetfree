import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {anchorate} from 'anchorate';
import App from './App.jsx';
import Home from './Home.jsx';
import About from './About.jsx';
import Services from './Services.jsx';
import Consulting from './Consulting.jsx';
import Training from './Training.jsx';
import Courses from './Courses.jsx';
import Resources from './Resources.jsx';
import Contact from './Contact.jsx';
import ga from 'react-ga';


ga.initialize('UA-78369933-1', {
    debug: false
});


function onUpdate() {
    ga.pageview(window.location.pathname);
    anchorate();
}


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
            <Route path="/events/and/workshops" component={Courses}/>
            <Route path="/resources" component={Resources}>
                <Route path=":resource" component={Resources}/>
            </Route>
            <Route path="/contact" component={Contact}/>
        </Route>
    </Router>
);

ReactDOM.render(
    <Router routes={routes} history={browserHistory} onUpdate={onUpdate}/>,
    document.getElementById('app')
);
