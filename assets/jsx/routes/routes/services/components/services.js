import React from 'react'
import { Link } from 'react-router'


class Services extends React.Component {

    render() {
        console.info('[Services] render');
        return <div className="services">

            <div className="banner">
                <div className="wrapper">
                    <img src="/static/img/logo_small.png"/>
                    <h1>Services</h1>
                </div>
            </div>

            <div className="nav_services">
                <div className="wrapper">
                    <p><small>BeSetFree offer consulting and health education and training services:</small></p>
                    <p>
                        <Link to="/services/consulting" activeClassName="active">Consultation</Link>|
                        <Link to="/services/workshops/and/training" activeClassName="active">Health Education and Training</Link>
                    </p>
                </div>
            </div>

            {React.cloneElement(this.props.children, {})}
        </div>
    }
}


export default Services
