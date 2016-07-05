import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'
import React from 'react'
import {shallow} from 'enzyme'
import Navigation from './../jsx/components/navigation'

chai.use(chaiEnzyme())
const expect = chai.expect


describe('<App />', () => {
    describe('<Navigation />', () => {
        let wrapper
        before(() => wrapper = shallow(<Navigation />))
        it('render el nav', () => expect(wrapper).to.have.descendants('nav'))
        it('render css class brand', () => expect(wrapper.find('.brand')).to.have.length(1))
    })
})
