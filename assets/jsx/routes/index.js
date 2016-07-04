import React from 'react'
import {Route, IndexRoute} from 'react-router'
import App from './components/app'
import Home from './routes/home/components/home'
import AboutRoute from './routes/about'


const route = <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <AboutRoute />
</Route>

export default route
