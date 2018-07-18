import React, { Component } from "react";
import { BaseComponent } from '../../components/BaseComponent';
import { Divider, Grid, Button, Typography, Input, TextField, Popover} from '@material-ui/core';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import InfiniteCalendar from 'react-infinite-calendar';
import { FormControl, FormGroup, ControlLabel, HelpBlock, DropdownButton, MenuItem, InputGroup, Textarea} from 'react-bootstrap';
import 'react-infinite-calendar/styles.css';
import {moment} from 'moment';


export class CourseCreate extends BaseComponent {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    onClickCreate = () => {
        this.createCourse()
    }

    createCourse = () => {
        let form = new FormData();
        form.append("name", this.state.name);
        form.append("code", this.state.code);

        this.post('/api/course/create', form).then((result) => {
            if (!result) {
                this.pushNotification("danger", "Connection error", this.props.dispatch);
            } else if (result.status === 'fail') {
                this.pushNotification("danger", result.description, this.props.dispatch);
            } else {
                this.pushNotification("success", "233333", this.props.dispatch);
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

    renderStartDate = () => {

        var handleStartDate = (date) => {
            this.setState({ startDate: date })
        }

        var handleClick = (event) => {
            this.setState({ parentStart: event.currentTarget });
        };

        var handleClose = () => {
            this.setState({ parentStart: null });
        };

        return (
            <Grid style={styles.inputContainer} container>
                <Grid xs={3} style={styles.textContainer} container>
                    <Typography style={styles.text}>Start Date :</Typography>
                </Grid>
                <Grid xs={9} style={styles.textContinaer} container>
                    <Button variant="contained" onClick={handleClick}>
                        {JSON.stringify(this.state.startDate)}
                    </Button>
                    <Popover
                        open={Boolean(this.state.parentStart)}
                        anchorEl={this.state.parentStart}
                        onClose={handleClose}
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
                        >
                        <InfiniteCalendar
                            displayOptions={{ showHeader: false, shouldHeaderAnimate: false, showTodayHelper: false }}
                            onSelect={handleStartDate}
                            />
                    </Popover>
                </Grid>
            </Grid>
        )
    }

    renderEndDate = () => {

        var handleEndDate = (date) => {
            this.setState({ endDate: date })
        }

        var handleClick = (event) => {
            this.setState({ parentEnd: event.currentTarget });
        };

        var handleClose = () => {
            this.setState({ parentEnd: null });
        };

        return (
            <Grid style={styles.inputContainer} container>
                <Grid xs={3} style={styles.textContainer} container>
                    <Typography style={styles.text}>End Date :</Typography>
                </Grid>
                <Grid xs={9} style={styles.textContinaer} container>
                    <Button variant="contained" onClick={handleClick}>
                        {JSON.stringify(this.state.endDate)}
                    </Button>
                    <Popover
                        open={Boolean(this.state.parentEnd)}
                        anchorEl={this.state.parentEnd}
                        onClose={handleClose}
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
                    >
                        <InfiniteCalendar
                            displayOptions={{ showHeader: false, shouldHeaderAnimate: false, showTodayHelper: false }}
                            onSelect={handleEndDate}
                        />
                    </Popover>
                </Grid>
            </Grid>
        )
    }

    renderIntroduction = (name, variable) => {
        return (
            <Grid style={styles.inputContainer} container>
                <Grid xs={3} style={styles.textContainer} container>
                    <Typography style={styles.text}>{name} :</Typography>
                </Grid>
                <Grid xs={9} container>
                    <FormControl componentClass="textarea" onChange={this.handleChange(variable)} multilple style={styles.introContainer} rows={4}/>
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

                <Grid xs={4} container>
                    {this.renderTextInput("Code", "code")}
                    {this.renderTextInput("Name", "name")}
                    {this.renderTextInput("Location", "location")}
                    {this.renderTextInput("Professor", "professorName")}
                    {this.renderTextInput("Credit", "credit")}
                    {this.renderTextInput("Avatar", "avatar")}
                </Grid>

                <Grid xs={8} contaienr>
                    
                    {this.renderStartDate()}
                    {this.renderEndDate()}
                    
                    {this.renderIntroduction("Introduction", "introduction")}
                   
               


                    <DropdownButton componentClass={InputGroup.Button} id="input-dropdown-addon" title="Action">
                        <MenuItem key="1">Item</MenuItem>
                    </DropdownButton>

                    
 
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

