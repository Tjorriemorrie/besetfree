const route = {
    path: '/about',
    getComponent(nextState, callback) {
        require.ensure([], (require) => {
            callback(null, require('./components/about').default)
        })
    }
}

export default route
