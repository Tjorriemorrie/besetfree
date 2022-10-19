import React, { PropTypes, Component } from 'react'


class Page extends Component {

    componentDidMount() {
        const { canParse, refresh } = this.props
        refresh(canParse)
    }

    componentDidUpdate() {
        const { canParse, refresh } = this.props
        refresh(canParse)
    }

    render() {
        const { canParse } = this.props

        if (!canParse) {
            return null
        }

        return <div className="fb-page"
                    data-href="https://www.facebook.com/besetfreelifestyle/"
                    data-tabs="timeline"
                    data-width="500"
                    data-height="400"
                    data-small-header="true"
                    data-adapt-container-width="false"
                    data-hide-cover="false"
                    data-show-facepile="false">
            <blockquote cite="https://www.facebook.com/besetfreelifestyle/"
                        className="fb-xfbml-parse-ignore">
                <a href="https://www.facebook.com/besetfreelifestyle/">Be Set Free</a>
            </blockquote>
        </div>
    }

}

Page.propTypes = {
    canParse: PropTypes.bool.isRequired,
    refresh: PropTypes.func.isRequired,
}

export default Page
