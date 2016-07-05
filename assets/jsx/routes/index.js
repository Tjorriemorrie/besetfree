import App from './components/app'
import Home from './routes/home/components/home'
import aboutRoute from './routes/about'
import servicesRoute from './routes/services'
import coursesRoute from './routes/courses'
import resourcesRoute from './routes/resources'
import contactRoute from './routes/contact'


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
