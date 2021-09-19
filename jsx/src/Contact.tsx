import * as React from 'react'
import Banner from "./Banner";
import './Contact.css'
import Footer from "./Footer";
import Navigation from "./Navigation";


interface ILatLng {
    lat: number,
    lng: number,
}


export interface IContactState {
    center: ILatLng,
    disabled: boolean,
    email: string,
    enquiry: string,
    name: string,
    number: string,
    status: string,
    zoom: number,
}


export default class Contact extends React.Component<{}, IContactState> {

    constructor(props: any) {
        super(props)
        this.state = {
            center: {lat: 59.938043, lng: 30.337157},
            disabled: false,
            email: '',
            enquiry: '',
            name: '',
            number: '',
            status: '',
            zoom: 9,
        }
    }

    public render() {
        return (
            <div>
                <Navigation/>
                {this.renderBody()}
                <Footer/>
            </div>
        )
    }

    public renderBody() {

        return <div className="c-contact">

            <Banner>Contact</Banner>

            <div className="o-wrapper">

                <div className="c-contact__left">
                    <div className="details">
                        <p>Yes I want to make the investment in long term health! Lets Scedule an Appointment or Book an
                            Event.</p>
                        <p>Or if you need more information, have questions, or would like to offer a suggestion, please
                            be in touch. You can contact me via phone, email or by filling out the form below.</p>
                        <p>I’ll get back to you as soon as possible.</p>
                        <p><a href="mailto:info@besetfree.co.za?subject=Enquiry">info@besetfree.co.za</a></p>
                        <p>Practice at The Hills</p>
                        <p>Please inquire about availability</p>
                    </div>

                    {/*<div className="contact_form">*/}
                        {/*<h4>Contact form</h4>*/}
                        {/*<form ref="contact_form" onSubmit={(e) => this.submitForm(e)}>*/}
                            {/*<dl>*/}
                                {/*<dt><label>Name:</label></dt>*/}
                                {/*<dd><input*/}
                                    {/*name="name"*/}
                                    {/*type="text"*/}
                                    {/*value={this.state.name}*/}
                                    {/*onChange={(e) => this.setState({name: e.target.value})}*/}
                                     {/*/>*/}
                                {/*</dd>*/}
                                {/*<dt><label>Contact number:</label></dt>*/}
                                {/*<dd><input*/}
                                    {/*name="number"*/}
                                    {/*type="text"*/}
                                    {/*value={this.state.number}*/}
                                    {/*onChange={(e) => this.setState({number: e.target.value})}*/}
                                     {/*/>*/}
                                {/*</dd>*/}
                                {/*<dt><label>Email:</label></dt>*/}
                                {/*<dd><input*/}
                                    {/*name="email"*/}
                                    {/*type="email"*/}
                                    {/*value={this.state.email}*/}
                                    {/*onChange={(e) => this.setState({email: e.target.value})}*/}
                                     {/*/>*/}
                                {/*</dd>*/}
                                {/*<dt><label>Enquiry:</label></dt>*/}
                                {/*<dd><textarea*/}
                                    {/*name="enquiry"*/}
                                    {/*value={this.state.enquiry}*/}
                                    {/*onChange={(e) => this.setState({enquiry: e.target.value})}*/}
                                {/*/>*/}
                                {/*</dd>*/}
                                {/*<dd>*/}
                                    {/*<button className="btn-submit"*/}
                                            {/*type="submit"*/}
                                            {/*>*/}
                                        {/*Submit*/}
                                    {/*</button>*/}
                                {/*</dd>*/}
                            {/*</dl>*/}
                        {/*</form>*/}
                        {/*{this.renderStatus()}*/}
                    {/*</div>*/}

                    <img src="/static/img/contact.jpg"/>
                </div>

                <div className="c-contact__right">
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

        </div>

        // let foo = <div className="page page-contact">
        //     <div>
        //
        //         <h2>Contact</h2>
        //
        //         <div className="flex-parent">
        //
        //             <div>
        //                 <p>Please note that all sessions are strictly by appointment only. For enquiries
        //                     or bookings please contact using your preferred method.</p>
        //                 <p>Nerine practice during business hours from the Conscious Healing Centre,
        //                     <br/><a href="mailto:info@besetfree.co.za?subject=Enquiry">info@besetfree.co.za</a></p>
        //                 <p>After hours sessions and weekends sessions can be arranged
        //                     on request at Centurion.</p>
        //                 <p><img src="/static/img/healing-centre.jpg"/></p>
        //             </div>
        //
        //
        //         </div>
        //
        //     </div>
        // </div>
    }

    // private renderStatus() {
    //     if (!this.state.status) {
    //         return false
    //     } else {
    //         return <p>{this.state.status}</p>
    //     }
    // }

    // private submitForm(e: any) {
    //     e.preventDefault()
    //     let fd = new FormData(this.refs.contact_form)
    //     this.setState({
    //         status: 'Sending enquiry...',
    //         disabled: true
    //     })
    //     fetch('/contact/email', {
    //         method: 'POST',
    //         body: fd
    //     })
    //         .then(() => this.setState({status: 'Successfully sent enquiry.'}))
    //         .catch(() => this.setState({status: 'There was an error sending your enquiry.'}))
    // }
}
