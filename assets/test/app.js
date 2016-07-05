import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'
import React from 'react'
import {shallow} from 'enzyme'
import Navigation from './../jsx/routes/components/navigation'
import Signup from './../jsx/routes/components/signup'
import Footer from './../jsx/routes/components/footer'

chai.use(chaiEnzyme())
const expect = chai.expect


describe('<App />', () => {
    describe('<Navigation />', () => {
        let wrapper
        before(() => wrapper = shallow(<Navigation />))
        it('render el nav', () => expect(wrapper).to.have.descendants('nav'))
        it('render css class brand', () => expect(wrapper.find('.brand')).to.have.length(1))
    })
    describe('<Signup />', () => {
        let wrapper
        before(() => wrapper = shallow(<Signup />))
        it('start with hidden state', () => expect(wrapper).to.have.state('status', 'hidden'))
        it('start with hidden html', () => expect(wrapper).to.be.blank())
    })
    describe('<Footer />', () => {
        let wrapper
        before(() => wrapper = shallow(<Footer />))
        it('has copyright', () => expect(wrapper.find('.copy')).to.have.length(1))
        it('has tel', () => expect(wrapper).to.contain.text('061 914 2177'))
    })
})
