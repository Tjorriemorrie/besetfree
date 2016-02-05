import React from 'react';
import { Link } from 'react-router';


export default class Services extends React.Component {

    render() {
        console.info('[Services] render');
        return <div className="services">

            <div className="banner">
                <div className="wrapper">
                    <img src="/static/img/logo.png"/>
                    <h1>Services</h1>
                </div>
            </div>

            <div className="nav_services">
                <div className="wrapper">
                    <p>
                        <Link to="/services/consulting" activeClassName="active">Consulting</Link>|
                        <Link to="/services/workshops/and/training" activeClassName="active">Workshops and Training</Link>
                    </p>
                </div>
            </div>

            {React.cloneElement(this.props.children, {})}
        </div>;
    }
}
