import React, { Component } from "react";
import { BaseComponent } from '../../../../components/BaseComponent';
import ImageUploader from 'react-images-upload';
import { Divider, Grid, Button, Typography, Icon, TextField, Popover } from '@material-ui/core';
import { FormControl } from 'react-bootstrap';
import { update } from '../../../../redux/actions/action';

export default class PersonalInformation extends BaseComponent {
    state = {  }


    renderChooseAvatar = () => {

        var onChange = (avatar) => {
            this.setState({
                infoChange: true,
                avatar: this.state.avatar.concat(avatar)
            });
        }

        return (
            <Grid style={styles.inputContainer} xs={8} container>
                <Typography style={styles.typography}>Avatar: </Typography>
                <ImageUploader
                    withIcon={false}
                    withLabel={false}
                    withPreview={true}
                    buttonText='Choose images'
                    onChange={onChange}
                    imgExtension={['.jpg', '.gif', '.png']}
                    maxFileSize={5242880}
                    singleImage={true}
                />
            </Grid>
        )
    }

    
    render() {
        return (
            <Grid style={styles.container} direction='column' container xs={8}>

                <Typography variant='display2'>Personal Information</Typography>

                <Grid style={styles.inputContainer} xs={8} container>
                    <Typography style={styles.typography}>NickName :</Typography>
                    <FormControl type="text" value={this.state.nickName} onChange={this.handleChange("nickName")} />
                </Grid>

                <Grid style={styles.inputContainer} xs={8} container>
                    <Typography style={styles.typography}>Email :</Typography>
                    <FormControl type="text" value={this.state.email} onChange={this.handleChange("email")} />
                </Grid>

                {this.renderChooseAvatar()}

                <Grid justify='center' container xs={8}>
                    <Button style={styles.button} onClick={this.save} >
                        save
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