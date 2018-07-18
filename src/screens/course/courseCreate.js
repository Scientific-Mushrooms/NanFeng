import React, { Component } from "react";
import { BaseComponent } from '../../components/BaseComponent';
import { FormControl } from '@material-ui/core';
import { Divider, Grid, Button, Typography, Input, TextField } from '@material-ui/core';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';


export class CourseCreate extends BaseComponent {

    constructor(props) {
        super(props);
        this.state = {
            courseName:'',
            courseId:'',
            professor:'',
            campus:'',
            building:'',
            room:'',
            kind:''
        };
    }

    onClickCourseList = () => {
        this.props.history.push({ pathname: '/courseList' })
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    renderInput = (name, variable) => {
        return (
            <Grid style={styles.inputContainer} container>
                <Typography variant='title'>{name}</Typography>
                <Input style={styles.input} onChange={this.handleChange(variable)} />
            </Grid>
        )
    }

    render() {
        return (
            <Grid justify='center' style={styles.wrapper} container>

                <Grid xs={12}>
                    <Typography variant='display2'>New Course</Typography>
                </Grid>

                <Grid xs={4} container>
                    {this.renderInput("Code", "courseCode")}
                    {this.renderInput("Name", "courseName")}
                </Grid>

                <Grid xs={8} contaienr>

                    <Grid style={{ margin: '10px' }} direction='row' alignItems="flex-end" container>
                        <Typography variant='title'>Course Time</Typography>
                        <Grid xs={6}>
                            <Input
                                style={styles.input}
                                onChange={this.handleChange('time')}
                                fullWidth />
                            {/*should be replace with selector*/}
                        </Grid>
                    </Grid>

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
                    <FormControl
                        type="text"
                        value={this.state.value}
                        placeholder="Enter text"
                        onChange={this.handleChange}
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

const styless = {

    wrapper: {
        paddingLeft: '200px',
        paddingRight:'200px'
    },

    input:{
        marginLeft: '10px',
        marginRight: '10px',
    },

}

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing.unit,
    },
    cssLabel: {
        '&$cssFocused': {
            color: purple[500],
        },
    },
    cssFocused: {},
    cssUnderline: {
        '&:after': {
            borderBottomColor: purple[500],
        },
    },
    bootstrapRoot: {
        padding: 0,
        'label + &': {
            marginTop: theme.spacing.unit * 3,
        },
    },
    bootstrapInput: {
        borderRadius: 4,
        backgroundColor: theme.palette.common.white,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 12px',
        width: 'calc(100% - 24px)',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
    bootstrapFormLabel: {
        fontSize: 18,
    },
});

const theme = createMuiTheme({
    palette: {
        primary: green,
    },
});