import App from './base/components/app'
import Home from './home/components/home'
import aboutRoute from './about'
import servicesRoute from './services'
import coursesRoute from './courses'
import resourcesRoute from './resources'
import contactRoute from './contact'
import quantum from './quantum/route'


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
        quantum,
    ]
}

export default route
