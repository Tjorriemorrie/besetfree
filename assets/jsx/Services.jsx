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
            <ul>
                <li>Individual consultation sessions (Individualized Care Programs, Consultations & Examinations)</li>
                <li>Health coaching</li>
                <li>Group Sessions</li>
                <li>Workplace Wellness Screening</li>
                <li>Health Expos</li>
                <li>Health and Wellness Workshops</li>
                <li>Health awareness talks</li>
                <li>Stop Smoking Programs</li>
                <li>Training Seminaars</li>
                <li>Cooking demos</li>
                <li>Recipes and daily health tips on Facebook</li>
                <li>Health retreats</li>
            </ul>
        </div>;
    }
}


export default Radium(Services);
