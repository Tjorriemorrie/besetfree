import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import {anchorate} from 'anchorate'
import rootRoute from './views'
import { Provider } from 'react-redux'
import store from './models'
import ga from 'react-ga'
import { setFacebookStatus, FB_STATUSES } from './models/facebook/actions'


ga.initialize('UA-78369933-1', {
    debug: false
})


function onUpdate() {
    ga.pageview(window.location.pathname)
    anchorate()
}


ReactDOM.render(
    <Provider store={store}>
        <Router routes={rootRoute} history={browserHistory} onUpdate={onUpdate}/>
    </Provider>,
    document.getElementById('app')
)


document.addEventListener('fb_init', evt => store.dispatch(setFacebookStatus(FB_STATUSES.DONE)));
