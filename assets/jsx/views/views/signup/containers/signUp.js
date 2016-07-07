import { connect } from 'react-redux'
import SignUpForm from './../components/signUpForm'
import { SIGNUP_STATUSES, setSignupStatus } from './../../../../store/signup/actions'


const mapStateToProps = (state, ownProps) => {
    return {
        isForm: state.signup == SIGNUP_STATUSES.FORM,
        isDone: state.signup == SIGNUP_STATUSES.DONE,
        isError: state.signup == SIGNUP_STATUSES.ERROR,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        hide: () => dispatch(setSignupStatus(SIGNUP_STATUSES.HIDDEN)),
        open: () => dispatch(setSignupStatus(SIGNUP_STATUSES.FORM)),
        finish: () => dispatch(setSignupStatus(SIGNUP_STATUSES.DONE)),
        fault: () => dispatch(setSignupStatus(SIGNUP_STATUSES.ERROR)),
    }
}

const SignUp = connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUpForm)

export default SignUp
