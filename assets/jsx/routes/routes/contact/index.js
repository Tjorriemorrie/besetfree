const route = {
    path: 'contact',
    getComponent(nextState, callback) {
        require.ensure([], (require) => {
            callback(null, require('./components/contact').default)
        })
    }
}

export default route
