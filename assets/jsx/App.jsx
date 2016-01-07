import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import Radium from 'radium';
import {} from 'react-bootstrap';
import ss from './Styles.jsx';


class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.info('[App] render');
        return <div style={[ss.fullHeight, ss.flexParent]}>
            <div style={ss.sidebar}>
                <img src="/static/img/logo.png" style={[ss.logo]}/>
                <ul style={[ss.navLinks]} className="navLinks">
                    <li><Link to="services">Services</Link></li>
                    <li><Link to="about">About</Link></li>
                    <li><Link to="contact">Contact</Link></li>
                </ul>
            </div>
            {React.cloneElement(this.props.children, {})}
        </div>;
    }
}


export default Radium(App);
