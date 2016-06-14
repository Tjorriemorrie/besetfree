import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './Navigation.jsx';
import Footer from './Footer.jsx';
import Signup from './Signup.jsx';
require("normalize-css");
require("./../less/main.less");


export default class App extends React.Component {

    render() {
        console.info('[App] render');
        return <div>
            <Signup/>
            <Navigation/>
            {React.cloneElement(this.props.children, {})}
            <Footer/>
        </div>;
    }
}
