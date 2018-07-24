import React, { Component } from "react";
import { BaseComponent } from '../../../../components/BaseComponent';
import ImageUploader from 'react-images-upload';
import { Divider, Grid, Button, Typography, Icon, TextField, Popover } from '@material-ui/core';
import { FormControl } from 'react-bootstrap';
import { update } from '../../../../redux/actions/action';

export default class IdentityVerification extends BaseComponent {

    state = {}

    renderTextInput = (name, variable) => {
        return (
            <Grid container>
                <Grid xs={3}>
                    <Typography style={styles.typography}>{name} :</Typography>
                </Grid>
                <Grid xs={5}>
                    <FormControl type="text" value={this.state.nickName} onChange={this.handleChange(variable)} />
                </Grid>
            </Grid>
        )
    }

    render() {
        return (
            <Grid direction='column' container>

                <Typography variant='display2'>Identity Verification</Typography>

                {this.renderTextInput("Real Name", "realName")}

                {this.renderTextInput("Role", "realName")}

                <Grid justify='center' container xs={8}>
                    <Button style={styles.button} onClick={this.save} >
                        Verify
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