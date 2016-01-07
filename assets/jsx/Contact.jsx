import React from 'react';
import ReactDOM from 'react-dom';
import Radium from 'radium';
import {} from 'react-bootstrap';
import ss from './Styles.jsx';


class Contact extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.info('[Contact] render');
        return <div>
            <p>contact</p>
        </div>;
    }
}


export default Radium(Contact);
