import { expect } from 'chai'
import { SET_SIGNUP_STATUS, SIGNUP_STATUSES, setSignupStatus } from './../../jsx/models/signup/actions'


const signup = () => {
    describe('signup', () => {
        describe('actions', () => {
            it('setSignupStatus to form', () => {
                expect(setSignupStatus(SIGNUP_STATUSES.FORM)).to.eql({
                    type: SET_SIGNUP_STATUS,
                    status: SIGNUP_STATUSES.FORM,
                })
            })
        })
    })
}

export default signup
