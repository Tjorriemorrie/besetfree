import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'
import React from 'react'
import { shallow } from 'enzyme'

chai.use(chaiEnzyme())
const expect = chai.expect

import Footer from './../../jsx/views/base/components/footer'


const footer = () => {
    describe('<Footer />', () => {
        let wrapper
        before(() => wrapper = shallow(<Footer />))
        it('has copyright', () => expect(wrapper.find('.copy')).to.have.length(1))
        it('has tel', () => expect(wrapper).to.contain.text('061 914 2177'))
        it('shows practice number', () => expect(wrapper).to.contain.text('PRO 08329 T'))
    })
}

export default footer
