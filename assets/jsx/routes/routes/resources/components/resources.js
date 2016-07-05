import React from 'react'
import Juicing from './juicing'


class Resources extends React.Component {

    render() {
        console.info('[Resources] render', this.props.location.pathname)

        return <div className="resources">
            <div className="banner">
                <div className="wrapper">
                    <img src="/static/img/logo_small.png" />
                    <h1>Resources</h1>
                </div>
            </div>

            <div className="wrapper">
                <Juicing pathname={this.props.location.pathname} />
            </div>

        </div>
    }
}

export default Resources
