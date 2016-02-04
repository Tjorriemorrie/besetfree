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
                        <button>Book a Session</button>
                    </div>
                </div>
            </div>

            <div className="wrapper">
                <div className="bio">
                    <div className="bio_img">
                        <img src="/static/img/nerine.jpg"/>
                    </div>
                    <div className="bio_text">
                        <h3>Meet Nerine</h3>
                        <p>My Name is Nerine Jansen and I am a Natural Healing Practitioner and Nutritional medicine
                            specialist with a special focus on nutrition, lifestyle, natural medicine and holistic
                            therapies. As a mom myself I understand the importance of Family health and wellness
                            through healthy balanced meals and nutrition. Be assured that I am as passionate about
                            your health as that of my own family! Join me on your personal journey to find the life
                            you were meant to live. a Life free from stress, or health concerns.
                            <br/><br/>
                            <Link to="/about">Read more &rang;</Link>
                        </p>
                    </div>
                </div>
            </div>

        </div>
    }

}
