import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'
import React from 'react'
import { shallow } from 'enzyme'

chai.use(chaiEnzyme())
const expect = chai.expect

import Navigation from './../../jsx/views/base/components/navigation'


const navigation = () => {
    describe('<Navigation />', () => {
        let wrapper
        before(() => wrapper = shallow(<Navigation />))
        it('render el nav', () => expect(wrapper).to.have.descendants('nav'))
        it('render css class brand', () => expect(wrapper.find('.brand')).to.have.length(1))
    })
}

export default navigation
