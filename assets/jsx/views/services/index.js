const route = {
    path: 'services',
    getComponent(nextState, callback) {
        require.ensure([], (require) => {
            callback(null, require('./components/services').default)
        })
    },
    childRoutes: [
        {
            path: 'consulting',
            getComponent(nextState, callback) {
                require.ensure([], (require) => {
                    callback(null, require('./components/consulting').default)
                })
            }
        },
        {
            path: 'workshops/and/training',
            getComponent(nextState, callback) {
                require.ensure([], (require) => {
                    callback(null, require('./components/training').default)
                })
            }
        }
    ],
    indexRoute: {
        onEnter: (nextState, replace) => replace('services/consulting')
    }
}

export default route
