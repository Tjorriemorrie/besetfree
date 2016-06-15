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

            <div className="wrapper">
                <div>
                    <img src="/static/img/nerine_home_optimized.jpg"/>
                </div>
                <div className="nerine">
                    <h2>Meet Nerine</h2>
                    <p>My Name is Nerine Jansen and I am a Natural Healing Practitioner and Nutritional medicine specialist with a special focus on nutrition, lifestyle, natural medicine and holistic therapies. As a mom myself I understand the importance of Family health and wellness through healthy balanced meals and nutrition. Be assured that I am as passionate about your health as that of my own family! Join me on your personal journey to find the life you were meant to live. a Life free from stress, or health concerns.</p>
                    <p className="link"><Link to="/about">Read more &rang;</Link></p>
                </div>
            </div>

            <div className="wrapper brand">
                <div>
                    <img src="/static/img/logo_small.png"/>
                </div>
                <div className="brand">
                    <h2>Be Set Free Health Solutions</h2>
                    <p>Holistic Healing Practice focusing on Health Screening, Lifestyle Coaching and Alternative Healing.</p>
                </div>
            </div>

            <div className="wrapper plant">
                <img src="/static/img/plant_crush.jpg"/>
            </div>

            <div className="wrapper services">
                <div>
                    <h2>Services</h2>
                    <img src="/static/img/applesmoothie.jpg"/>
                </div>
                <div>
                    <h3>Individual Consultations</h3>
                    <h3>Workplace Wellness and Workshops</h3>
                    <h3>Health Awareness Talks</h3>
                    <p>Areas of Special Interest Include Nutritional Medicine, Herbal Medicine, Stress Management, Irodology, Weight Management and Stop Smoking Programs.</p>
                    <p className="link"><Link to="/services">Read more &rang;</Link></p>
                </div>
            </div>

        </div>;
    }

}
