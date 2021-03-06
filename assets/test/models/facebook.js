import { expect } from 'chai'
import { SET_FB_STATUS, FB_STATUSES, setFacebookStatus } from './../../jsx/models/facebook/actions'
import { facebook_status } from './../../jsx/models/facebook/reducers'


const facebook = () => {
    describe('facebook', () => {

        describe('actions', () => {
            it('setFacebookStatus to done', () => {
                expect(setFacebookStatus(FB_STATUSES.DONE)).to.eql({
                    type: SET_FB_STATUS,
                    status: FB_STATUSES.DONE,
                })
            })
        })

        describe('reducers', () => {
            it('has initial state as loading', () => {
                expect(facebook_status(undefined, {})).to.equal(FB_STATUSES.LOADING)
            })
            it('set status', () => {
                expect(facebook_status(undefined, {
                    type: SET_FB_STATUS,
                    status: FB_STATUSES.DONE,
                })).to.equal(FB_STATUSES.DONE)
            })
        })
    })
}

export default facebook
