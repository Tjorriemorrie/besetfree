import React from 'react';


export default class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: null,
            disabled: false,
        }
    }

    render() {
        console.info('[Contact] render');
        return <div className="page page-contact">
            <div>

                <h2>Contact</h2>

                <div className="flex-parent">

                    <div>
                        <p>Please note that all sessions are strictly by appointment only. For enquiries
                            or bookings please contact using your preferred method.</p>
                        <p>Nerine practice during business hours from the Conscious Healing Centre,
                            <br/>12 Penguin Street, Norscot, Fourways (<a href="https://www.google.co.za/maps/place/12+Penguin+Dr,+Sandton,+2055/@-26.035907,28.006267,17z/data=!3m1!4b1!4m2!3m1!1s0x1e95741cd7c05db9:0xfad86a83f61ffa00?hl=en" target="_new">Google Maps</a>)
                            <br/><a href="mailto:info@besetfree.co.za?subject=Enquiry">info@besetfree.co.za</a></p>
                        <p>After hours sessions and weekends sessions can be arranged
                            on request at Centurion.</p>
                        <p><img src="/static/img/healing-centre.jpg" /></p>
                    </div>

                    <div className="contact-form">
                        <h4>Contact form</h4>
                        {this.renderStatus()}
                        <form ref="contact_form" onSubmit={(e) => this.submitForm(e)}>
                            <dl>
                                <dt><label>Name:</label></dt>
                                <dd><input
                                    name="name"
                                    type="text"
                                    value={this.state.name}
                                    required
                                    disabled={this.state.disabled}/>
                                </dd>
                                <dt><label>Contact number:</label></dt>
                                <dd><input
                                    name="number"
                                    type="text"
                                    value={this.state.number}
                                    required
                                    disabled={this.state.disabled}/>
                                </dd>
                                <dt><label>Email:</label></dt>
                                <dd><input
                                    name="email"
                                    type="email"
                                    value={this.state.email}
                                    required
                                    disabled={this.state.disabled}/>
                                </dd>
                                <dt><label>Enquiry:</label></dt>
                                <dd><textarea
                                    name="enquiry"
                                    value={this.state.enquiry}
                                    required
                                    disabled={this.state.disabled}/>
                                </dd>
                                <dd><button className="btn-submit"
                                    type="submit"
                                    disabled={this.state.disabled}>
                                        Submit
                                </button></dd>
                            </dl>
                        </form>
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