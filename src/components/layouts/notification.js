import React, { Component } from 'react';

import { connect } from 'react-redux';
import { hide_notification } from '../../redux/actions/action'
import Snackbar from '@material-ui/core/Snackbar';


const mapStateToProps = state => ({
    open: state.notificationReducer.open,
    kind: state.notificationReducer.kind,
    reason: state.notificationReducer.reason,
})

class Notification extends Component {

    handleClose = () => {
        this.props.dispatch(hide_notification());
    }

    render() {
        return (
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={this.props.open}
                onClose={this.handleClose}
                message={<span>{this.props.reason}</span>}
            />
        );
    }
}


export default connect(mapStateToProps)(Notification);