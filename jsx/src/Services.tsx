import * as React from 'react';
import {Switch} from "react-router";
import {NavLink, Redirect, Route, RouteProps} from 'react-router-dom'
import Banner from "./Banner";
import Footer from "./Footer";
import Navigation from "./Navigation";
import './Services.css';
import ServicesConsulting from "./ServicesConsulting";
import ServicesTraining from "./ServicesTraining";


export default class Services extends React.Component<RouteProps, {}> {

    public render() {
        return (
            <div>
                <Navigation/>
                {this.renderBody()}
                <Footer/>
            </div>
        );
    }

    public renderBody() {
        return <div>
            <Banner>Services</Banner>
            <div className="c-nav_services">
                <div className="o-middle">
                    <p>
                        <small>BeSetFree offer consulting and health education and training services:</small>
                    </p>
                    <p>
                        <NavLink to="/services/consulting" activeClassName="active">Consultation</NavLink>|
                        <NavLink to="/services/workshops/and/training" activeClassName="active">Health Education and Training</NavLink>
                    </p>
                </div>
            </div>

            <div className="o-wrapper">
                <div>
                    <Switch>
                        <Route path="/services/consulting" component={ServicesConsulting} />
                        <Route path="/services/workshops/and/training" component={ServicesTraining} />
                        <Redirect to="/services/consulting"/>
                    </Switch>
                </div>
            </div>
        </div>
    }
}
