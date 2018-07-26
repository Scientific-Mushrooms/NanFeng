import React, { Component } from "react";
import { BaseComponent } from '../../../../components/BaseComponent';
import { Divider, Grid, Button, Typography, Icon, TextField, Popover } from '@material-ui/core';
import { FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';


class ChangePassword extends BaseComponent {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            instructor: null,
            userId: null,


            realName: null,
            instrucotorCode: null,
            studentCode: null,
        };
    }

    renderPassInput = (name, variable) => {
        return (
            <Grid style={styles.inputContainer} xs={8} container>
                <Typography style={styles.typography}>{name} :</Typography>
                <FormControl type="password" onChange={this.handleChange(variable)} />
            </Grid>
        )
    }

    renderPassWarning = () => {
        if (this.state.passChange == true && this.state.reNewPass != this.state.newPass)
            return (
                <Grid direction='row' alignItems='center' xs={4} container>
                    <Icon style={{ color: 'red' }}>warning</Icon>
                    <Typography style={styles.warning}>Repassword Wrong</Typography>
                </Grid>
            )
    }

    changePass = () => {
        if (this.state.oldPass == null || this.state.newPass == null || this.state.reNewPass == null) {
            this.pushNotification("danger", "Please enter the Password", this.props.dispatch);
        } else if (this.state.newPass != this.state.reNewPass) {
            this.pushNotification("danger", "Please enter the right Repassword", this.props.dispatch);
        } else {
            //post here
        }
    }

    renderVarifyIdentity = () => {
        return (
            <Grid style={styles.inputContainer} xs={8} container>
                <Typography style={styles.typography}>NickName :</Typography>
                <FormControl type="text" value={this.state.nickName} onChange={this.handleChange("nickName")} />
            </Grid>
        )
    }

    render() {
        return (
            <Grid style={styles.container} direction='column' container xs={8}>
                <Typography variant='display2'>Security Settings</Typography>
                <Divider />
                {this.renderPassInput("Old Password", "oldPass")}
                {this.renderPassInput("New Password", "newPass")}
                <Grid style={styles.inputContainer} direction='row' container xs={12}>
                    <Typography style={styles.typography}>Confirm New Password :</Typography>
                    <Grid direction='row' container>
                        <Grid xs={8}>
                            <FormControl type="password" onChange={this.handleChange("reNewPass")} />
                        </Grid>
                        {this.renderPassWarning()}
                    </Grid>
                </Grid>
                <Grid justify='center' container xs={8}>
                    <Button
                        mini
                        style={styles.button}
                        variant='fab'
                        disabled={!this.state.passChange}
                        onClick={this.changePass}
                    >
                        <Typography variant='button' style={{ fontSize: '50%' }}>Change Password</Typography>
                    </Button>
                </Grid>
            </Grid>
        );
    }
}


const styles = {


    button: {
        marginTop: '10px',
        borderRadius: "20px",
        width: "50%",
    },

    typography: {
        fontSize: '130%'
    },

    warning: {
        color: "red",
        fontSize: '130%'
    },

    container: {
        marginTop: '20px',
        marginBottom: '20px'
    },

    inputContainer: {
        marginBottom: '5px'
    },

    input: {
        borderRadius: '6px'
    },

    textContainer: {
        justifyContent: 'flex-end'
    },

    introContainer: {
        height: '80px'
    }


};


const mapStateToProps = state => ({
    user: state.userReducer.user
})


export default connect(mapStateToProps)(ChangePassword);