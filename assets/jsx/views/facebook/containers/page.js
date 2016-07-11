import { connect } from 'react-redux'
import Page from './../components/page'
import { FB_STATUSES } from './../../../models/facebook/actions'


const mapStateToProps = (state, ownProps) => {
    return {
        canParse: state.facebook_status == FB_STATUSES.DONE,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        refresh: (canParse) => {
            if (canParse) {
                FB.XFBML.parse()
            }

        }
    }
}

const container = connect(
    mapStateToProps,
    mapDispatchToProps
)(Page)

export default container
