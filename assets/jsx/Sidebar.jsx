import React from 'react';
import { Link } from 'react-router';


export default class Sidebar extends React.Component {

    render() {
        console.info('[Sidebar] render');
        return <div className="sidebar">
            <Link to="/"><img src="/static/img/logo.png" className="logo"/></Link>
            <p>Be Set Free</p>
            <ul className="navLinks">
                <li><Link to="/">Services</Link></li>
            </ul>
        </div>;
    }

}
