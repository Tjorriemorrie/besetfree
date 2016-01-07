import React from 'react';
import ReactDOM from 'react-dom';
import Radium from 'radium';
import {} from 'react-bootstrap';
import ss from './Styles.jsx';


class Services extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.info('[Services] render');
        return <div>
            <p>services</p>
        </div>;
    }
}


export default Radium(Services);
