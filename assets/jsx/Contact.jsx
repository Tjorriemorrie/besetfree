import React from 'react';
import GoogleMap from 'google-map-react';


export default class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            center: {lat: 59.938043, lng: 30.337157},
            zoom: 9,
            name: '',
            number: '',
            email: '',
            enquiry: '',
            status: '',
            disabled: false
        }
    }

    render() {
        console.info('[Contact] render');

        let inputprops = {required: true};
        if (this.state.disabled) {
            inputprops['disabled'] = true;
        }

        return <div className="contact">

            <div className="banner">
                <div className="wrapper">
                    <img src="/static/img/logo_small.png"/>
                    <h1>Contact</h1>
                </div>
            </div>

            <div className="wrapper">

                <div className="left">
                    <div className="details">
                        <p>Yes I want to make the investment in long term health! Lets Scedule an Appointment or Book an
                            Event.</p>
                        <p>Or if you need more information, have questions, or would like to offer a suggestion, please
                            be in touch. You can contact me via phone, email or by filling out the form below.</p>
                        <p>I’ll get back to you as soon as possible.</p>
                        <p>Tel: 0619142177</p>
                        <p><a href="mailto:info@besetfree.co.za?subject=Enquiry">info@besetfree.co.za</a></p>
                        <p>Practice at Centurion and Fourways</p>
                        <p>Please inquire about availability</p>
                    </div>

                    <div className="contact_form">
                        <h4>Contact form</h4>
                        <form ref="contact_form" onSubmit={(e) => this.submitForm(e)}>
                            <dl>
                                <dt><label>Name:</label></dt>
                                <dd><input
                                    name="name"
                                    type="text"
                                    value={this.state.name}
                                    onChange={(e) => this.setState({name: e.target.value})}
                                    {...inputprops} />
                                </dd>
                                <dt><label>Contact number:</label></dt>
                                <dd><input
                                    name="number"
                                    type="text"
                                    value={this.state.number}
                                    onChange={(e) => this.setState({number: e.target.value})}
                                    {...inputprops} />
                                </dd>
                                <dt><label>Email:</label></dt>
                                <dd><input
                                    name="email"
                                    type="email"
                                    value={this.state.email}
                                    onChange={(e) => this.setState({email: e.target.value})}
                                    {...inputprops} />
                                </dd>
                                <dt><label>Enquiry:</label></dt>
                                <dd><textarea
                                    name="enquiry"
                                    value={this.state.enquiry}
                                    {...inputprops}
                                    onChange={(e) => this.setState({enquiry: e.target.value})}
                                    />
                                </dd>
                                <dd>
                                    <button className="btn-submit"
                                            type="submit"
                                            {...inputprops} >
                                        Submit
                                    </button>
                                </dd>
                            </dl>
                        </form>
                        {this.renderStatus()}
                    </div>

                    <img src="/static/img/contact.jpg"/>
                </div>

                <div className="right">
                    <div className="expect">
                        <h3>First consult- What to expect</h3>
                        <p>A first consultation will include a detailed case evaluation and health history questionaire.
                            This may involve details of diet, lifestyle, habits and bodily functioning, including
                            specific organs, with a focus on what you are presenting to the practitioner. There will be
                            a short physical examination possibly involving measurement of blood pressure, palpation,
                            iris diagnosis, a saliva PH test, health screeneing and general analysis etc. Your
                            practitioner will use the given information to then prescribe the necessary advice, herbs,
                            supplements, dietary and lifestyle changes to restore optimum health to you the
                            individual/client. Therapy options applicable to your needs will then be considered. Natural
                            healthcare is a way of life that can bring about positive change and set you free.</p>
                    </div>
                </div>

            </div>

        </div>;

        let foo = <div className="page page-contact">
            <div>

                <h2>Contact</h2>

                <div className="flex-parent">

                    <div>
                        <p>Please note that all sessions are strictly by appointment only. For enquiries
                            or bookings please contact using your preferred method.</p>
                        <p>Nerine practice during business hours from the Conscious Healing Centre,
                            <br/>12 Penguin Street, Norscot, Fourways (<a
                                href="https://www.google.co.za/maps/place/12+Penguin+Dr,+Sandton,+2055/@-26.035907,28.006267,17z/data=!3m1!4b1!4m2!3m1!1s0x1e95741cd7c05db9:0xfad86a83f61ffa00?hl=en"
                                target="_new">Google Maps</a>)
                            <br/><a href="mailto:info@besetfree.co.za?subject=Enquiry">info@besetfree.co.za</a></p>
                        <p>After hours sessions and weekends sessions can be arranged
                            on request at Centurion.</p>
                        <p><img src="/static/img/healing-centre.jpg"/></p>
                    </div>


                </div>

            </div>
        </div>;
    }

    renderStatus() {
        console.info('[Contact] renderStatus', this.state.status);
        if (!this.state.status) {
            return false;
        } else {
            return <p>{this.state.status}</p>;
        }
    }

    submitForm(e) {
        console.info('[Contact] submitForm');
        e.preventDefault();
        let fd = new FormData(this.refs.contact_form);
        this.setState({
            status: 'Sending enquiry...',
            disabled: true
        });
        fetch('/contact/email', {
            method: 'POST',
            body: fd
        })
            .then(() => this.setState({status: 'Successfully sent enquiry.'}))
            .catch(() => this.setState({status: 'There was an error sending your enquiry.'}));
    }
}
