import React from 'react'
import {Route, IndexRoute} from 'react-router'


const getIndexComponent = (partialNextState, callback) => {
    require.ensure([], (require) => {
        callback(null, {
            component: require('./components/consulting').default
        })
    })
}

const getRouteComponent = (nextState, callback) => {
    require.ensure([], (require) => {
        callback(null, require('./components/services').default)
    })
}

//const route = {
//    path: 'services',
//
//    getComponent,
//    //getIndexRoute(partialNextState, callback) {
//    //    require.ensure([], (require) => {
//    //        callback(null, {component: require('./components/consulting').default})
//    //    })
//    //},
//    childRoutes: [
//        {
//            path: 'consulting',
//            getComponent(nextState, callback) {
//                require.ensure([], (require) => {
//                    callback(null, require('./components/consulting').default)
//                })
//            }
//        }
//    ],
//    indexRedirect: {
//        //from: 'services',
//        to: 'consulting'
//    }
//}

const route = <Route path="/services">
    <IndexRoute component={getIndexComponent} />
</Route>

export default route
