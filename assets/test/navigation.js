//import 'babel-polyfill'
import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'
import {shallow} from 'enzyme'
import React from 'react'
import Navigation from './../jsx/Navigation.jsx'

chai.use(chaiEnzyme())
const expect = chai.expect


describe('<Navigation />', () => {
    const wrapper = shallow(<Navigation />)
    it('render el nav', () => {
        expect(wrapper).to.have.descendants('nav')
    })
    it('render cls brand', () => {
        expect(wrapper.find('.brand')).to.have.length(1)
    })
})
