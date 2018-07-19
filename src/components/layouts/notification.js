import React, { Component } from 'react';

import { connect } from 'react-redux';
import { hide_notification } from '../../redux/actions/action'
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';



const mapStateToProps = state => ({
    open: state.notificationReducer.open,
    kind: state.notificationReducer.kind,
    reason: state.notificationReducer.reason,
})

class Notification extends Component {

    handleClose = () => {
        this.props.dispatch(hide_notification());
    }

    handleContent = () => {
        if(this.props.kind=='danger'){
            return(
            <SnackbarContent
                style={{backgroundColor:'red'}}
                message={<span>{this.props.reason}</span>}
            />)
        }else
            return(
            <SnackbarContent
                style={{backgroundColor:'black'}}
                message={<span>{this.props.reason}</span>}
            />)
        //add your type of content here
    }

    render() {
        return (
            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                open={this.props.open}
                onClose={this.handleClose}>
                {this.handleContent()}
            </Snackbar>
        );
    }
}


export default connect(mapStateToProps)(Notification);