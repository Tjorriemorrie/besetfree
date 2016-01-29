import React from 'react';
import { IndexLink, Link } from 'react-router';


export default class Navigation extends React.Component {

    render() {
        console.info('[Navigation] render');
        return <nav>
            <div className="wrapper">
                <div className="brand">
                    <h4 className="title">Nerine Jansen</h4>
                    <p className="subtitle">Natural Healthcare Practitioner</p>
                </div>
                <div className="links">
                    <div><IndexLink activeClassName="active" to="/">Home</IndexLink></div>
                    <div><Link activeClassName="active" to="/about">About</Link></div>
                    <div><Link activeClassName="active" to="/services">Services</Link></div>
                    <div><Link activeClassName="active" to="/therapies">Therapies</Link></div>
                    <div><Link activeClassName="active" to="/events/and/workshops">Events and Workshops</Link></div>
                    <div><Link activeClassName="active" to="/contact">Contact</Link></div>
                </div>
            </div>
        </nav>;
    }

}
