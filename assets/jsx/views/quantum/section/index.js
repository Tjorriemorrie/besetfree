import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { find, isEmpty } from 'lodash'
var LineChart = require("react-chartjs").Line


export class Section extends Component {

    render() {
        const { structure_section, graphs } = this.props

        if (isEmpty(structure_section)) {
            return (
                <p>section not found</p>
            )
        }

        return (
            <div>
                <h4>{structure_section.name}</h4>
                <p>{graphs.length} section items</p>
                {graphs.map((graph, i) => {
                    return (
                        <div key={i}>
                            <h4>{graph.name}</h4>
                            <LineChart data={graph.data} with="400" height="140" />
                        </div>
                    )
                })}
            </div>
        )
    }

}

Section.propTypes = {
    children: PropTypes.node,
    profile: PropTypes.object.isRequired,
    structure_section: PropTypes.object.isRequired,
    graphs: PropTypes.array,
}

const buildGraphs = (profile, structure_section) => {
    console.info(profile)
    console.info('structure_section=', structure_section)
    let graphs = []
    for (const structure_section_item of structure_section.items) {
        console.info('structure_section_item', structure_section_item)
        let graph = {
            name: structure_section_item.name,
            data: {
                labels: [],
                datasets: [],
            }
        }
        let dataset = {
            label: 'testdataset',
            data: [],
        }
        for (const test of profile.tests) {
            console.info('test=', test)
            graph.data.labels.push(test.tested_at.substr(2, 8))
            const test_section = find(test.sections, ts => ts.hash == structure_section.hash)
            console.info('test_section=', test_section)
            const test_section_item = find(test_section.items, tsi => tsi.name == structure_section_item.name)
            console.info('test_section_item=', test_section_item)
            dataset.data.push(test_section_item.value)
        }
        graph.data.datasets.push(dataset)
        console.info('graph=', graph)
        graphs.push(graph)
    }
    console.info('structure_items=', graphs)
    return graphs
}

const mapStateToProps = (state, ownProps) => {
    console.info('ownprops=', ownProps)
    let tmp_state = {
        profile: find(state.quantum_profiles, p => p.hash == ownProps.params.profile_hash) || {},
        structure_section: find(state.quantum_structure, s => s.hash == ownProps.params.section_hash) || {},
    }
    console.info('tmp_state=', tmp_state)
    tmp_state.graphs = buildGraphs(tmp_state.profile, tmp_state.structure_section)
    return tmp_state
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Section)
