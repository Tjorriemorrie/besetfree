import App from './components/app'
import Home from './routes/home/components/home'

const route = {
    path: '/',
    component: App,
    indexRoute: {component: Home},
    //getIndexRoute(partialNextState, callback) {
    //    require.ensure([], function (require) {
    //        callback(null, require('./../home').default)
    //    })
    //},
    //childRoutes: [
    //
    //]
}

export default route
