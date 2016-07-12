import { connect } from 'react-redux'
import SignUpForm from './../components/signUpForm'
import { SIGNUP_STATUSES, setSignupStatus, setSignupForm, sendForm } from './../../../models/signup/actions'


const mapStateToProps = (state, ownProps) => {
    return {
        form: state.signup_form,
        isForm: state.signup_status == SIGNUP_STATUSES.FORM,
        isDone: state.signup_status == SIGNUP_STATUSES.DONE,
        isError: state.signup_status == SIGNUP_STATUSES.ERROR,
        isFinished: state.signup_status == SIGNUP_STATUSES.FINISHED,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        hide: () => dispatch(setSignupStatus(SIGNUP_STATUSES.HIDDEN)),
        open: () => dispatch(setSignupStatus(SIGNUP_STATUSES.FORM)),
        setValue: (field, value) => dispatch(setSignupForm(field, value)),
        submitForm: form_values => dispatch(sendForm()),
    }
}

const SignUp = connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUpForm)

export default SignUp
