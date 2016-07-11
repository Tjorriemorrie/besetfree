import React, { PropTypes } from 'react';


class SignUpForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
        }
    }

    componentDidMount() {
        const { isFinished, hide, open } = this.props

        if (!isFinished) {
            setTimeout(open, 35000)

            document.addEventListener('onkeydown', evt => {
                evt = evt || window.event;
                var isEscape = false
                if ("key" in evt) {
                    isEscape = evt.key == "Escape"
                } else {
                    isEscape = evt.keyCode == 27
                }
                if (isEscape) {
                    hide()
                }
            })
        }
    }

    render() {
        let body = null
        const { hide, isForm, isDone, isError } = this.props

        if (isForm) {
            body = <div className="signup">
                <h3>Newsletter</h3>
                <p>Sign up for my newsletter to receive interesting articles!</p>
                <form ref="signup_form" onSubmit={(e) => this.onSubmit(e)}>
                    <p>
                        <label>Email:</label>
                        <br/>
                        <input type="email" name="email"
                               required="true"
                               value={this.state.email}
                               onChange={(e) => this.setState({email: e.target.value})} />
                        <br/>
                        <button type="submit">Submit</button>
                        <button onClick={e => {e.preventDefault(); hide()}}>Close</button>
                    </p>
                </form>
            </div>;
        }

        if (isDone) {
            body = <div className="signup">
                <h3>Newsletter</h3>
                <p>Thank you for signing up!</p>
                <button onClick={() => hide()}>Close</button>
            </div>;
        }

        if (isError) {
            body = <div className="signup">
                <h3>Newsletter</h3>
                <p>An error occurred! It will be fixed shortly!</p>
                <button onClick={() => hide()}>Close</button>
            </div>;
        }

        return body;
    }

    onSubmit(e) {
        e.preventDefault()
        const { submitForm, finish, fault } = this.props
        submitForm(this.refs.signup_form, finish, fault)
    }
}

SignUpForm.propTypes = {
    isForm: PropTypes.bool.isRequired,
    isDone: PropTypes.bool.isRequired,
    isError: PropTypes.bool.isRequired,
    hide: PropTypes.func.isRequired,
    open: PropTypes.func.isRequired,
    finish: PropTypes.func.isRequired,
    fault: PropTypes.func.isRequired
}

export default SignUpForm
