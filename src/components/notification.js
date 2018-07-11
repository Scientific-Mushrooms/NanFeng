import React, { Component } from 'react';


import CustomTabs from "./CustomTabs/CustomTabs.jsx";
import Tasks from "./Tasks/Tasks.jsx";
import { connect } from 'react-redux';
import { loginBoxHide, hide_notification } from '../redux/actions/action'
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
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={this.props.open}
                onClose={this.handleClose}
                ContentProps={{
                    'aria-describedby': 'message-id',
                }}
                message={<span id="message-id">{this.props.reason}</span>}
            />
        );
    }
}


export default connect(mapStateToProps)(Notification);