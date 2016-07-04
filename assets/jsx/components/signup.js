import React from 'react';
import ReactDOM from 'react-dom';


class Signup extends React.Component {

    constructor() {
        super();
        this.state = {
            status: 'hidden',
            email: ''
        };
    }

    componentDidMount() {
        let is_done = !!localStorage.getItem('newsletter');
        console.info('[Signup] componentDidMount: is_done=', is_done);
        if (!is_done) {
            setTimeout(() => {
                console.info('[Signup] componentDidMount: showing modal');
                this.setState({'status': 'form'});
            }, 15000);
        }
        document.onkeydown = evt => {
            evt = evt || window.event;
            var isEscape = false;
            if ("key" in evt) {
                isEscape = evt.key == "Escape";
            } else {
                isEscape = evt.keyCode == 27;
            }
            if (isEscape && this.state.status != 'hidden') {
                this.setState({status: 'hidden'});
            }
        };
    }

    render() {
        console.info('[Signup] render');
        let body = null;

        if (this.state.status == 'form') {
            body = <div className="signup">
                <h3>Newsletter</h3>
                <p>Sign up for my newsletter to receive interesting articles!</p>
                <form ref="signup_form" onSubmit={(e) => this.submitForm(e)}>
                    <p>
                        <label>Email:</label>
                        <br/>
                        <input type="email" name="email"
                               required="true"
                               value={this.state.email}
                               onChange={(e) => this.setState({email: e.target.value})} />
                        <br/>
                        <button type="submit">Submit</button>
                        <button onClick={e => {e.preventDefault(); this.setState({status: 'hidden'})}}>Close</button>
                    </p>
                </form>
            </div>;
        }

        if (this.state.status == 'done') {
            body = <div className="signup">
                <h3>Newsletter</h3>
                <p>Thank you for signing up!</p>
                <button onClick={() => this.setState({status: 'hidden'})}>Close</button>
            </div>;
        }

        if (this.state.status == 'error') {
            body = <div className="signup">
                <h3>Newsletter</h3>
                <p>An error occurred! It will be fixed shortly!</p>
                <button onClick={() => this.setState({status: 'hidden'})}>Close</button>
            </div>;
        }

        return body;
    }

    submitForm(e) {
        console.info('[Signup] submitForm');
        e.preventDefault();
        let fd = new FormData(this.refs.signup_form);
        fetch('/newsletter/email', {
            method: 'POST',
            body: fd
        })
            .then(res => {
                console.info(res);
                if (res.status == 200) {
                    this.setState({status: 'done'});
                    localStorage.setItem('newsletter', 'done');
                } else {
                    this.setState({status: 'error'});
                }
            })
            .catch(() => this.setState({status: 'error'}));
    }
}

export default Signup
