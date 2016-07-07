import App from './components/app'
import Home from './views/home/components/home'
import aboutRoute from './views/about'
import servicesRoute from './views/services'
import coursesRoute from './views/courses'
import resourcesRoute from './views/resources'
import contactRoute from './views/contact'


const route = {
    path: '/',
    component: App,
    indexRoute: {
        component: Home
    },
    childRoutes: [
        aboutRoute,
        servicesRoute,
        coursesRoute,
        resourcesRoute,
        contactRoute,
    ]
}

export default route
