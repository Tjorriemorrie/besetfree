const route = {
    path: 'events/and/workshops',
    getComponent(nextState, callback) {
        require.ensure([], (require) => {
            callback(null, require('./components/courses').default)
        })
    }
}

export default route
