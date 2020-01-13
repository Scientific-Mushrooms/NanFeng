import React, { Component } from 'react';

import { connect } from 'react-redux';
import { hide_notification } from '../../redux/actions/action'
import {Grid, Snackbar, SnackbarContent, Icon, Typography } from '@material-ui/core';
import red from '@material-ui/core/colors/red';



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
                style={{backgroundColor:'#f50057',borderRadius:'10px'}}
                message={<span>
                    <Grid direction='row' alignItems='center' container>
                        <Icon style={styles.icon}>error</Icon>
                        <Typography variant='display2' style={styles.typograghy}>{this.props.reason}</Typography>
                    </Grid>
                    </span>}
            />)
        }else
            return(
            <SnackbarContent
                style={{backgroundColor:'grey',borderRadius:'10px'}}
                message={<span>
                    <Grid direction='row' alignItems='center' container>
                        <Icon style={styles.icon}>error</Icon>
                        <Typography variant='display2' style={styles.typograghy}>{this.props.reason}</Typography>
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

const styles ={
    icon:{
        marginRight:"5px"
    },
    typograghy:{
        fontSize:"200%",
        color:"white"
    }
}

export default connect(mapStateToProps)(Notification);