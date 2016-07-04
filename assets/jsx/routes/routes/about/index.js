import React from 'react'
import {Route, IndexRoute} from 'react-router'


const loadAbout = (nextState, callback) => {
    require.ensure([], (require) => {
        callback(null, require('./components/about').default)
    })
}

const route = <Route path="/about" getComponent={loadAbout} />

export default route
