import React from 'react';
import ReactDOM from 'react-dom';
import Radium from 'radium';
import {} from 'react-bootstrap';
import ss from './Styles.jsx';


class Therapies extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.info('[Therapies] render');
        return <div>

            <h2 className="heading">Therapies</h2>

            A wide variety of safe, natural and non-invasive therapies are offered to meet all your healthcare needs.
-	Lifestyle counseling

            -	Iridology
-	Diet & applied nutrition
-	Herbal medicine and supplementation
-	Swedish massage
-	Detox
-	Hydrotherapy
-	Behavioral/cognitive therapy

        </div>;
    }
}


export default Radium(Therapies);
