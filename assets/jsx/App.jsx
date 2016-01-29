import React from 'react';import ReactDOM from 'react-dom';
import Navigation from './Navigation.jsx';
require("normalize-css");
require("./../less/main.less");


export default class App extends React.Component {

    render() {
        console.info('[App] render');
        return <div>
            <Navigation/>
            {React.cloneElement(this.props.children, {})}
        </div>;
    }
}
