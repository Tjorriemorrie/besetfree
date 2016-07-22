import route_profile from './profile'

const route = {
    path: 'quantum',
    getComponent(nextState, callback) {
        require.ensure([], (require) => {
            callback(null, require('.').default)
        })
    },
    childRoutes: [
        {
            path: ':profile_hash',
            getComponent(nextState, callback) {
                require.ensure([], (require) => {
                    callback(null, require('./profile').default)
                })
            },
            childRoutes: [
                {
                    path: ':section_hash',
                    getComponent(nextState, callback) {
                        require.ensure([], (require) => {
                            callback(null, require('./section').default)
                        })
                    }
                }
            ]
        }
    ]
}

export default route
