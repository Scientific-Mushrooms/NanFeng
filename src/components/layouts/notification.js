import React, { Component } from 'react';

import { connect } from 'react-redux';
import { hide_notification } from '../../redux/actions/action'
import {Grid, Snackbar, SnackbarContent, Icon, Typography } from '@material-ui/core';



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
                style={{backgroundColor:'red',borderRadius:'10px'}}
                message={<span>
                    <Grid direction='row' alignItems='center' container>
                        <Icon style={{marginRight:5}}>error</Icon>
                        <Typography variant='display2' style={{fontSize:"200%",color:"white"}}>{this.props.reason}</Typography>
                    </Grid>
                    </span>}
            />)
        }else
            return(
            <SnackbarContent
                style={{backgroundColor:'grey',borderRadius:'10px'}}
                message={<span>
                    <Grid direction='row' alignItems='center' container>
                        <Icon style={{marginRight:5}}>error</Icon>
                        <Typography variant='display2' style={{fontSize:"200%"}}>{this.props.reason}</Typography>
                    </Grid>
                    </span>}
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