import App from './components/app'
import Home from './routes/home/components/home'


const route = {
    path: '/',
    component: App,
    indexRoute: {component: Home},
    childRoutes: [
        require('./routes/about').default
    ]
}

export default route
