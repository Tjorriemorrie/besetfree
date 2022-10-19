import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'
import React from 'react'
import { shallow } from 'enzyme'
import sinon from 'sinon'

chai.use(chaiEnzyme())
const expect = chai.expect

import Signup from './../../jsx/views/signup/components/signUpForm'


const signup = () => {
    describe('<Signup />', () => {
        let wrapper
        let props
        beforeEach(() => {
            props = {
                form: {email: ''},
                isForm: false,
                isDone: false,
                isError: false,
                isFinished: false,
                hide: sinon.spy(),
                open: sinon.spy(),
                setValue: sinon.spy(),
                submitForm: sinon.spy(),
            }
        })

        it('start with hidden html', () => {
            wrapper = shallow(<Signup {...props} />)
            expect(wrapper).to.be.blank()
        })

        it('showing form', () => {
            props.isForm = true
            wrapper = shallow(<Signup {...props} />)
            expect(wrapper).to.not.be.blank()
            expect(wrapper).to.have.descendants('form')
        })

        it('showing done', () => {
            props.isDone = true
            wrapper = shallow(<Signup {...props} />)
            expect(wrapper).to.not.be.blank()
            expect(wrapper).to.contain.text('Thank you')
        })

        it('showing error', () => {
            props.isError = true
            wrapper = shallow(<Signup {...props} />)
            expect(wrapper).to.not.be.blank()
            expect(wrapper).to.contain.text('error occurred')
        })
    })
}

export default signup
