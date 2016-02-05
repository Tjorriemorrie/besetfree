import React from 'react';


export default class Therapies extends React.Component {

    render() {
        console.info('[Therapies] render');
        return <div>

            <div className="banner">
                <div className="wrapper">
                    <img src="/static/img/logo.png"/>
                    <h1>Therapies</h1>
                </div>
            </div>

            <div className="therapies">
                <div className="wrapper">
                    <p>
                        <img src="/static/img/the_eyes.jpg"/>
                    </p>
                    <dl>
                        <dt>Therapies</dt>
                        <dd>Iridology / Iris diagnosis</dd>
                        <dd>Herbal medicine / Supplementation</dd>
                        <dd>Nutritional therapy</dd>
                        <dd>Hydrotherapy / Detoxification</dd>
                        <dd>Behavioural / Cognitive Therapy</dd>
                        <dd>Excersice Advice</dd>
                        <dd>Lifestyle councelling</dd>
                        <dd>Swedish Massage</dd>
                    </dl>
                    <p>
                        <img src="/static/img/the_pills.jpg"/>
                    </p>
                    <div className="testimonies">
                        <h3>Testimonies</h3>
                        <blockquote>
                            <p>"I used to struggle with migraines. Since changing my diet and lifestyle I am pain free."</p>
                            <small>~ Susan Allan</small>
                        </blockquote>
                    </div>
                    <p>
                        <img src="/static/img/the_mass.jpg"/>
                    </p>
                </div>
            </div>

        </div>;
    }
}
