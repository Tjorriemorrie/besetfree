import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { find, isEmpty } from 'lodash'


export class Profile extends Component {

    render() {
        return (
            <div className="profile">
                {this.renderProfile()}
            </div>
        )
    }

    renderProfile() {
        const { children, profile } = this.props

        if (isEmpty(profile)) {
            return (
                <p>Profile not found</p>
            )
        }

        return (
            <div>
                <h4><Link to={'/quantum/' + profile.hash}>Profile of {profile.name}</Link></h4>
                {children || this.renderIndex()}
            </div>
        )
    }

    renderIndex() {
        const { structure, profile } = this.props
        return (
            <div className="structure">
                <ol>
                    {structure.map(val => {
                        return <li key={val.hash}><Link to={'/quantum/' + profile.hash + '/' + val.hash}>{val.name}</Link></li>
                    })}
                </ol>
            </div>
        )
    }
}

Profile.propTypes = {
    children: PropTypes.node,
    profile: PropTypes.object.isRequired,
    structure: PropTypes.array,
}

const mapStateToProps = (state, ownProps) => {
    return {
        profile: find(state.quantum_profiles, p => p.hash == ownProps.routeParams.profile_hash) || {},
        structure: state.quantum_structure,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
