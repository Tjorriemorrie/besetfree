import signup from './signup'
import facebook from './facebook'


const models = () => {
    describe('models', () => {
        signup()
        facebook()
    })
}

export default models
