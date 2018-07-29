import React, { Component } from "react";
import { BaseComponent } from '../../../components/BaseComponent';
import { Divider, Grid, Button, Typography, Input, TextField, Popover } from '@material-ui/core';
import { FormControl, FormGroup, ControlLabel, HelpBlock, DropdownButton, MenuItem, InputGroup, Textarea } from 'react-bootstrap';
import 'react-infinite-calendar/styles.css';


export class SectionCreate extends BaseComponent {

    constructor(props) {
        super(props);
        this.state = {
            time: null,
            code: null,
            term: null,
            location: null,
            maxStudentNum:null,
        };
    }

    onClickCreate = () => {
        this.createSection()
    }

    createSection = () => {

        let form = new FormData();
        form.append("time", this.state.time);
        form.append("code", this.state.code);
        form.append("term", this.state.term);
        form.append("location", this.state.location);
        form.append("maxStudentNum", this.state.maxStudentNum);

        this.post('/api/section/create', form).then((result) => {

            if (!result) {

                this.pushNotification("danger", "Connection error", this.props.dispatch);

            } else if (result.status === 'fail') {

                this.pushNotification("danger", result.description, this.props.dispatch);

            } else if (result.status === 'success') {

                this.pushNotification("success", "successfully create the section", this.props.dispatch);

            } else {

                this.pushNotification("danger", "unknown error", this.props.dispatch);
            }

        })

        alert(this.state.code+"\n"+this.state.time+"\n"+this.state.term+"\n"+this.state.location+"\n"+this.state.maxStudentNum);
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
                    <Typography variant='display2'>New Section</Typography>
                </Grid>

                <Grid xs={8} container>
                    {this.renderTextInput("Code", "code")}
                    {this.renderTextInput("Time", "time")}
                    {this.renderTextInput("Term", "term")}
                    {this.renderTextInput("Location", "location")}
                    {this.renderTextInput("Max Student Number", "maxStudentNum")}

                </Grid>

                <Grid xs={12}>
                    <Button onClick={this.onClickCreate}>Create Section</Button>
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

