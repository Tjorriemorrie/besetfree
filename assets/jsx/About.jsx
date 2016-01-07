import React from 'react';
import ReactDOM from 'react-dom';
import Radium from 'radium';
import {} from 'react-bootstrap';
import ss from './Styles.jsx';


class About extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.info('[About] render');
        return <div>
            <p>about</p>
        </div>;
    }
}


export default Radium(About);
