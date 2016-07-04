import React from 'react'
import Navigation from './navigation'
import Footer from './footer'
import Signup from './signup'
require("normalize-css")
require("./../../less/main.less")


class App extends React.Component {

    render() {
        console.info('[App] render');

        return <div>
            <Signup/>
            <Navigation/>
            {this.props.children}
        </div>
    }
}

export default App
