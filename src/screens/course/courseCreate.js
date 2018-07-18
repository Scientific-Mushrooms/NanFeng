import React, { Component } from "react";
import { BaseComponent } from '../../components/BaseComponent';
import { Divider, Grid, Button, Typography, Input, TextField} from '@material-ui/core';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import { FormControl, FormGroup, ControlLabel, HelpBlock} from 'react-bootstrap';

export class CourseCreate extends BaseComponent {

    constructor(props) {
        super(props);
        this.state = {
        };
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

                <Grid xs={4} container>
                    {this.renderTextInput("Code", "code")}
                    {this.renderTextInput("Name", "name")}
                    {this.renderTextInput("Location", "location")}
                    {this.renderTextInput("Professor", "professorName")}
                    {this.renderTextInput("Introduction", "introduction")}
                    {this.renderTextInput("Credit", "credit")}
                    {this.renderTextInput("Avatar", "avatar")}
                    {this.renderTextInput("Start Date", "avatar")}
                    {this.renderTextInput("End Date", "avatar")}
                </Grid>

                <Grid xs={8} contaienr>

                    <TextField
                        id="time"
                        label="Alarm clock"
                        type="datetime-local"
                        defaultValue="07:30"
                
                        InputLabelProps={{
                            shrink: true,
                        }}
                        inputProps={{
                            step: 300, // 5 min
                        }}
                    />

                    <TextField
                        defaultValue="react-bootstrap"
                        id="bootstrap-input"
                        InputProps={{
                            disableUnderline: true,
                            style: {
                                root: styles.bootstrapRoot,
                                input: styles.bootstrapInput,
                            },
                        }}
                    />

                            

                </Grid>



                <Grid style={{margin:'10px'}}>
                    <Typography variant='title'>Course Location</Typography>
                </Grid>
                <Grid style={{margin:'10px'}} direction='row' alignItems="flex-end" container>  
                    <Grid xs={2}>
                        <TextField
                        label="Campus District"
                        style={styles.input}
                        onChange={this.handleChange('campus')}
                        fullWidth/>
                        {/*should be replace with selector*/}
                    </Grid>
                    <Grid style={{marginLeft:'10px'}} xs={3}>
                        <TextField
                        label="Building"
                        style={styles.input}
                        onChange={this.handleChange('building')}
                        fullWidth/>
                    </Grid>
                    <Grid style={{marginLeft:'10px'}} xs={3}>
                        <TextField
                        label="Room Number"
                        style={styles.input}
                        onChange={this.handleChange('room')}
                        fullWidth/>
                    </Grid>
                </Grid>
                <Grid style={{margin:'10px'}} direction='row' container>
                    <Typography variant='title'>What kind of course will it be?</Typography>
                    <Input 
                    style={styles.input}
                    onChange={this.handleChange('kind')}/>
                </Grid>
                <Divider light/><br/>
                <Grid>
                    <Button>Create Class</Button>
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
    }


};

