const route = {
    path: 'resources',
    getComponent(nextState, callback) {
        require.ensure([], (require) => {
            callback(null, require('./components/resources').default)
        })
    },
    childRoutes: [
        {
            path: ':resource',
            getComponent(nextState, callback) {
                require.ensure([], (require) => {
                    callback(null, require('./components/resources').default)
                })
            }
        }
    ]
}

export default route
