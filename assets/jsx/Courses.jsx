import React from 'react';
import ReactDOM from 'react-dom';
import Radium from 'radium';
import {} from 'react-bootstrap';
import ss from './Styles.jsx';


class Courses extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.info('[Courses] render');
        return <div>
            <p>Courses</p>
        </div>;
    }
}


export default Radium(Courses);
