import { connect } from 'react-redux'
import SignUpForm from './../components/signUpForm'
import { SIGNUP_STATUSES, setSignupStatus } from './../../../models/signup/actions'


const mapStateToProps = (state, ownProps) => {
    return {
        isForm: state.signup_status == SIGNUP_STATUSES.FORM,
        isDone: state.signup_status == SIGNUP_STATUSES.DONE,
        isError: state.signup_status == SIGNUP_STATUSES.ERROR,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        hide: () => dispatch(setSignupStatus(SIGNUP_STATUSES.HIDDEN)),
        open: () => dispatch(setSignupStatus(SIGNUP_STATUSES.FORM)),
        finish: () => dispatch(setSignupStatus(SIGNUP_STATUSES.DONE)),
        fault: () => dispatch(setSignupStatus(SIGNUP_STATUSES.ERROR)),
        submitForm2: (form_values, finish, fault) => {
            console.info('submitform2')
            fetch('/newsletter/email', {
                method: 'POST',
                body: new FormData(form_values)
            })
                .then(res => {
                    if (res.status == 200) {
                        finish()
                        localStorage.setItem('newsletter', 'done');
                    } else {
                        fault()
                    }
                })
                .catch(() => fault())
        }
    }
}

const SignUp = connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUpForm)

export default SignUp
