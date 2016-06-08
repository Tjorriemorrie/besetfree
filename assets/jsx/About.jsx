import React from 'react';
import { Link } from 'react-router';


export default class About extends React.Component {

    render() {
        console.info('[About] render');
        return <div className="about">
            <div className="banner">

                <div className="wrapper">
                    <img src="/static/img/logo_small.png"/>
                    <h1>About Nerine</h1>
                </div>
            </div>

            <div className="details">
                <div className="wrapper">
                    <div className="viz">
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
                    <div className="text">
                        <div className="text_box">
                            <h3>My Story</h3>
                            <p>Nerine is a Natural Medical Practitioner at heart, inspired by a passion
                                for helping people. Her journey to Complimentary  Medicine started off
                                whilst studying 5 years full time to become a Doctor of Homeopathy and
                                then continued  to obtain her qualifications in Education and IT
                                (respectively) and also became a  Microsoft Office Specialist.  After
                                working for a few years she continued her studies and she also obtained
                                numerous qualifications in Iridology, Diet and applied Nutrition, substance
                                abuse, Natural remedies including Herbs and Tissue salts , massage, detox,
                                Hydrotherapy, NLP (Neurolinguistic programming), cognitive/ behavioral therapy.</p>
                            <p>She owns a Holistic healing Practice focusing on Lifestyle Screening and
                                Support, Lifestyle Coaching and Alternative Healing and is a registered
                                Professional with the Natural Healers Association (NHA), Trainer and
                                Ethno-Medicine Practitioner in the field of Traditional Health Care,
                                and as a Health Educator registered with SACE (South African Council
                                of Educators).</p>
                            <p>She also has a corporate Training background and has lectured at
                                University level. She presents Health talks, Health and Wellness
                                Workshops, Stop smoking programs and Training Seminars as Health
                                Educator (Wellness Consultant , Facilitator & Coach).</p>
                            <p>Her aim is to make a positive difference in people’s lives in assisting
                                and guiding them to achieve and maintain optimal health, naturally.</p>
                            <br/>
                            <p className="link"><Link to="/services">Services &rang;</Link></p>
                        </div>
                        <img src="/static/img/stethoscope.jpg"/>
                    </div>
                </div>
            </div>

        </div>;
    }
}
