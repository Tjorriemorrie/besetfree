import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import {anchorate} from 'anchorate'
import rootRoute from './routes'
import ga from 'react-ga'


ga.initialize('UA-78369933-1', {
    debug: false
})


function onUpdate() {
    ga.pageview(window.location.pathname)
    anchorate()
}


ReactDOM.render(
    <Router routes={rootRoute} history={browserHistory} onUpdate={onUpdate}/>,
    document.getElementById('app')
)
