import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { loadQuantumData } from './../../models/quantum/actions'
import { Link } from 'react-router'


export class Quantum extends Component {

    componentDidMount() {
        const { load } = this.props
        load()
    }

    render() {
        let { children } = this.props

        return <div className="quantum">
            <h3><Link to="/quantum">Quantum Analyzer</Link></h3>
            {children || this.renderIndex()}
        </div>
    }

    renderIndex() {
        const { profiles } = this.props
        return (
            <div>
                <h4>Choose a profile:</h4>
                {profiles.map(val => {
                    return <p key={val.hash}><Link to={"/quantum/" + val.hash}>{val.name}</Link></p>
                })}
            </div>
        )
    }
}

Quantum.propTypes = {
    children: PropTypes.node,
    profiles: PropTypes.array,
    load: PropTypes.func.isRequired,
}

const mapStateToProps = (state, ownProps) => {
    return {
        profiles: state.quantum_profiles,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        load: () => dispatch(loadQuantumData()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quantum)
