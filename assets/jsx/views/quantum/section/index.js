import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { find, isEmpty } from 'lodash'


export class Section extends Component {

    render() {
        const { structure_section, section_items } = this.props

        if (isEmpty(structure_section)) {
            return (
                <p>section not found</p>
            )
        }

        return (
            <div>
                <h4>{structure_section.name}</h4>
                <p>{section_items.length} section items</p>
            </div>
        )
    }

}

Section.propTypes = {
    children: PropTypes.node,
    profile: PropTypes.object.isRequired,
    structure_section: PropTypes.object.isRequired,
    section_items: PropTypes.array,
}

const buildSectionItems = (profile, structure_section) => {
    return []
}

const mapStateToProps = (state, ownProps) => {
    let tmp_state = {
        profile: find(state.quantum_profiles, p => p.hash == ownProps.routeParams.profile_hash) || {},
        structure_section: find(state.quantum_structure, s => s.hash == ownProps.routeParams.section_hash) || {},
    }
    tmp_state.section_items = buildSectionItems(state.profile, state.structure_section)
    return tmp_state
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Section)
