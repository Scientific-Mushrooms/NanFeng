import React, { Component } from "react";
import { BaseComponent } from '../../../components/BaseComponent';
import { Divider, Grid, Button, Typography, Input, TextField, Popover } from '@material-ui/core';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { FormControl, FormGroup, ControlLabel, HelpBlock, DropdownButton, MenuItem, InputGroup, Textarea } from 'react-bootstrap';
import 'react-infinite-calendar/styles.css';
import { moment } from 'moment';
import ImageUploader from 'react-images-upload';

export class SectionCreate extends BaseComponent {

    constructor(props) {
        super(props);
        this.state = {
            code: null,
            maxStudentNum: null,
            location: null,
            term: null,
            time: null,
        };
    }

    onClickCreate = () => {
        this.createCourse()
    }

    createCourse = () => {

        let form = new FormData();
        form.append("name", this.state.name);
        form.append("code", this.state.code);
        form.append("introduction", this.state.introduction);
        form.append("credit", this.state.credit);
        form.append('avatar', this.state.avatar[0]);

        this.post('/api/course/create', form).then((result) => {

            if (!result) {
                this.pushNotification("danger", "Connection error", this.props.dispatch);

            } else if (result.status === 'fail') {
                this.pushNotification("danger", result.description, this.props.dispatch);

            } else if (result.status === 'success') {

                this.pushNotification("success", "successfully create the course", this.props.dispatch);

            } else {
                alert(JSON.stringify(result))
                this.pushNotification("danger", "unknown error", this.props.dispatch);
            }

        })
    }

    renderTextInput = (name, variable) => {
        return (
            <Grid style={styles.inputContainer} container>
                <Grid xs={3} style={styles.textContainer} container>
                    <Typography style={styles.text}>{name} :</Typography>
                </Grid>
                <Grid xs={9} style={styles.textContinaer} container>
                    <FormControl type="text" onChange={this.handleChange(variable)} />
                </Grid>
            </Grid>
        )
    }


   

    render() {
        return (
            <Grid justify='center' container>

                <Grid xs={12} style={styles.headerContainer}>
                    <Typography variant='display2'>New Course</Typography>
                </Grid>

                <Grid xs={8} container>
                    {this.renderTextInput("Code", "code")}
                    {this.renderTextInput("Name", "name")}
                    {this.renderTextInput("Credit", "credit")}

                </Grid>

                <Grid xs={12}>
                    <Button onClick={this.onClickCreate}>Create Class</Button>
                </Grid>
            </Grid>
        );
    }
}


const styles = {

    headerContainer: {
        marginBottom: '20px'
    },

    inputContainer: {
        marginBottom: '20px'
    },

    input: {
        borderRadius: '6px'
    },

    textContainer: {
        justifyContent: 'flex-end'
    },

    text: {
        fontSize: '20px',
        marginRight: '10px',
    },

    test: {
        width: '300px',
        height: '400px'
    },

    introContainer: {
        height: '80px'
    }


};

