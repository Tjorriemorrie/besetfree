import React, { Component, PropTypes } from 'react';


class SignUpForm extends Component {

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
        const { form, isForm, isDone, isError, hide, setValue, submitForm } = this.props

        if (isForm) {
            body = <div className="signup">
                <h3>Newsletter</h3>
                <p>Sign up for my newsletter to receive interesting articles!</p>
                <form onSubmit={(e) => {e.preventDefault(); submitForm()}}>
                    <p>
                        <label>Email:</label>
                        <br/>
                        <input type="email" name="email" required="true" value={form.email} onChange={e => setValue('email', e.target.value)} />
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

}

SignUpForm.propTypes = {
    form: PropTypes.object.isRequired,
    isForm: PropTypes.bool.isRequired,
    isDone: PropTypes.bool.isRequired,
    isError: PropTypes.bool.isRequired,
    isFinished: PropTypes.bool.isRequired,
    hide: PropTypes.func.isRequired,
    open: PropTypes.func.isRequired,
    setValue: PropTypes.func.isRequired,
    submitForm: PropTypes.func.isRequired,
}

export default SignUpForm
