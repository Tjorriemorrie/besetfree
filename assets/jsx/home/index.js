const route = {
    getComponent(nextState, callback) {
        require.ensure([], (require) => {
            callback(null, require('./components/home').default)
        })
    }
}

export default route
