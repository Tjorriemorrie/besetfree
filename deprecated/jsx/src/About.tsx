import * as React from 'react';
import { Link } from 'react-router-dom'
import './About.css';
import Banner from "./Banner";
import Footer from "./Footer";
import Navigation from "./Navigation";


export default class About extends React.Component {

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
            <Banner>About Nerine</Banner>

            <div className="c-details">
                <div className="o-wrapper">

                    <div className="c-details__viz">
                        <img src="/static/img/nerine_about_optimized.jpg"/>
                        <dl>
                            <dt>Specialties</dt>
                            <dd>Digestive wellness</dd>
                            <dd>Iridology / Iris diagnosis</dd>
                            <dd>Herbal medicine / Supplementation</dd>
                            <dd>Healthy cooking / meal planning</dd>
                            <dd>Hydrotherapy / Detoxification</dd>
                            <dd>Behavioural / Cognitive Therapy</dd>
                            <dd>Sustainable weight management</dd>
                            <dd>Stop Smoking programs</dd>
                            <dd>Elimination diets</dd>
                            <dd>Massage</dd>
                        </dl>
                    </div>

                    <div className="c-details__text">
                        <div className="c-details__text-box">
                            <h3>My Story</h3>
                            <p>Nerine is a Holistic Practitioner at heart, inspired by a passion for helping people. Her
                                journey to Complimentary Medicine started off whilst studying Homeopathy and then
                                continued to obtain her qualifications in Education and IT (respectively) and also became
                                a Microsoft Office Specialist. After working for a few years she continued her studies and
                                she also obtained numerous qualifications in Iridology, Diet and applied Nutrition,
                                substance abuse, Natural remedies including Herbs and Tissue salts , massage, detox,
                                Hydrotherapy, NLP (Neurolinguistic programming), cognitive/ behavioral therapy.</p>
                            <p>She owns a Holistic healing Practice focusing on Lifestyle Asessment and Support, Lifestyle
                                Coaching and Alternative Healing and is a registered Professional with the NHA and ASCHP,
                                Trainer and Ethno-Medicine Practitioner in the field of Traditional Health Care, and as
                                a Health Educator registered with SACE.</p>
                            <p>She also has a corporate Training background and has lectured at University level. She
                                presents Health talks, Health and Wellness Workshops, Stop smoking programs and Training
                                Seminars as Health Educator (Wellness Consultant , Facilitator &amp; Coach).</p>
                            <p>Her aim is to make a positive difference in people’s lives in assisting and guiding them
                                to achieve and maintain optimal health, naturally.</p>
                            <p className="link"><Link to="/services">Services &rang;</Link></p>
                        </div>
                        <img src="/static/img/stethoscope.jpg"/>
                    </div>
                </div>
            </div>

        </div>
    }
}
