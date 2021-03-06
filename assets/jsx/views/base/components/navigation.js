import React from 'react'
import { IndexLink, Link } from 'react-router'


const Navigation = () =>
    <nav>
        <div className="wrapper">

            <div className="brand">
                <h4 className="title">Nerine Jansen</h4>
                <p className="subtitle">
                    Natural Healthcare Practitioner
                    <br/><small>PRO 08329 T</small>
                </p>
            </div>

            <div className="links">
                <div><IndexLink activeClassName="active" to="/">Home</IndexLink></div>
                <div><Link activeClassName="active" to="/about">About</Link></div>
                <div><Link activeClassName="active" to="/services">Services</Link></div>
                <div><Link activeClassName="active" to="/events/and/workshops">Events and Workshops</Link></div>
                <div><Link activeClassName="active" to="/resources">Resources</Link></div>
                <div><Link activeClassName="active" to="/contact">Contact</Link></div>
            </div>

        </div>
    </nav>


export default Navigation
