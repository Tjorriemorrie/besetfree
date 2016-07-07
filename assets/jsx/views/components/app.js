import React, { PropTypes } from 'react'
import Navigation from './navigation'
import Footer from './footer'
import SignUp from './../views/signup/containers/signUp'
require("normalize-css")
require("./../../../less/main.less")


const App = ({ children }) => {
    return (
        <div>
            <SignUp />
            <Navigation />
            {children}
            <Footer />
        </div>
    )
}

App.propTypes = {
    children: PropTypes.node.isRequired,
}

export default App
