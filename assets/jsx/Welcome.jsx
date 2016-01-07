import React from 'react';
import ReactDOM from 'react-dom';
import shouldPureComponentUpdate from 'react-pure-render/function';
import {
    Jumbotron
} from 'react-bootstrap';
import ss from './Styles.jsx';


export default class Welcome extends React.Component {
    shouldComponentUpdate = shouldPureComponentUpdate;
    constructor(props) {
        super(props);
    }

    render() {
        console.info('[Welcome] render');
        return <Jumbotron style={ss.flexChild}>
            <h1>Welcome!</h1>
            <p>Select an organization to get started.</p>
        </Jumbotron>
    }
}
