import * as React from 'react';
import { NavLink } from 'react-router-dom'
import './Navigation.css'

export default class Navigation extends React.Component {

    public render() {
        return (
            <nav>
                <div className="o-wrapper">

                    <div className="c-brand">
                        <h4 className="c-brand__title">Nerine Jansen</h4>
                        <p className="c-brand__subtitle">
                            Natural Healthcare Practitioner
                            <br/><small>PRO 08329 T</small>
                        </p>
                    </div>

                    <div className="c-links">
                        <div><NavLink activeClassName="c-links__active" to="/" exact={true}>Home</NavLink></div>
                        <div><NavLink activeClassName="c-links__active" to="/about">About</NavLink></div>
                        <div><NavLink activeClassName="c-links__active" to="/services">Services</NavLink></div>
                        <div><NavLink activeClassName="c-links__active" to="/events/and/workshops">Events and Workshops</NavLink></div>
                        <div><NavLink activeClassName="c-links__active" to="/resources">Resources</NavLink></div>
                        <div><NavLink activeClassName="c-links__active" to="/contact">Contact</NavLink></div>
                    </div>

                </div>
            </nav>
        );
    }
}
