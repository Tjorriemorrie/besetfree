import React from 'react';
import { Link } from 'react-router';


export default class Home extends React.Component {

    render() {
        console.info('[Home] render');
        return <div className="home">

            <div className="jumbo">
                <div className="wrapper">
                    <div className="hero">
                        <h1>&quot;Let food be thy medicine and medicine be thy food&quot;</h1>
                        <Link to="/contact" className="book">Book a Session</Link>
                    </div>
                </div>
            </div>

        </div>;
    }

}
