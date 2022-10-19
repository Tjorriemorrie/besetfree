import 'normalize.css';
import * as React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Courses from "./Courses";
import Home from "./Home";
import Resources from "./Resources";
import Services from "./Services";


export default class App extends React.Component {
    public render() {
        return (
            <Router>
                <div>
                    <Route path="/" component={Home} exact={true}/>
                    <Route path="/about" component={About}/>
                    <Route path="/services" component={Services}/>
                    <Route path="/events/and/workshops" component={Courses}/>
                    <Route path="/resources" component={Resources}/>
                    <Route path="/contact" component={Contact}/>
                </div>
            </Router>
        );
    }
}
