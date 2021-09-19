import * as React from 'react';
import { Link } from 'react-router-dom'
import Footer from "./Footer";
import './Home.css'
import Navigation from "./Navigation";


export default class Home extends React.Component {

    public render() {
        return (
            <div>
                <Navigation/>
                {this.renderBody()}
                <Footer/>
            </div>
        );
    }

    public renderBody() {
        return <div>
            <div className="c-jumbo">
                <div className="o-wrapper">
                    <div className="c-jumbo__hero">
                        <h1>&quot;Let food be thy medicine and medicine be thy food&quot;</h1>
                        <Link to="/contact" className="c-jumbo__link">Book a Session</Link>
                    </div>
                </div>
            </div>

            <div className="o-wrapper">
                <div>
                    <img className="c-nerine__img" src="/static/img/home/nerine_opt.jpg"/>
                </div>
                <div className="c-nerine">
                    <h2>Meet Nerine</h2>
                    <p>My Name is Nerine Jansen and I am a Natural Healing Practitioner and Nutritional medicine specialist with a special focus on nutrition, lifestyle, natural medicine and holistic therapies. As a mom myself I understand the importance of Family health and wellness through healthy balanced meals and nutrition. Be assured that I am as passionate about your health as that of my own family! Join me on your personal journey to find the life you were meant to live. a Life free from stress, or health concerns.</p>
                    <p><Link to="/about">Read more &rang;</Link></p>
                </div>
            </div>

            <div className="o-wrapper c-summary">
                <div className="c-summary__left">
                    <img className="c-summary__img" src="/static/img/logo_small.png"/>
                </div>
                <div className="c-summary__text">
                    <h2>Be Set Free Health Solutions</h2>
                    <p>Holistic Healthcare</p>
                    <p>Wellness Consulting/consultation</p>
                    <p>Health Education and Training</p>
                </div>
            </div>

            <div className="o-wrapper">
                <img src="/static/img/plant_crush.jpg"/>
            </div>

            <div className="o-wrapper c-services">
                <div>
                    <h2 className="c-services__heading">Services</h2>
                    <img src="/static/img/applesmoothie.jpg"/>
                </div>
                <div className="c-services__content">
                    <h3>Individual, Online, Family, Couple and Group Counseling</h3>
                    <h3>Weight and/or Stress Management</h3>
                    <h3>Health Education</h3>
                    <p><Link to="/services">Read more &rang;</Link></p>
                </div>
            </div>

        </div>;
    }
}
