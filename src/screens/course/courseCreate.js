import React, { Component } from "react";
import { Divider, Grid, Button, Typography, Input, TextField } from '@material-ui/core';


export class CourseCreate extends Component {

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

    render() {
        return (
            <Grid
            direction='column' 
            justify='center'
            style={styles.wrapper}
            container>
                <Grid>
                    <Typography variant='display2'>Create a new course</Typography>
                    <Typography variant='title'>It enables students to know you and your course better.</Typography>
                </Grid>
                <Divider light/><br/>
                <Grid style={{margin:'10px'}} direction='row' container>
                    <Typography variant='title'>Course ID</Typography>
                    <Input 
                    style={styles.input}
                    onChange={this.handleChange('courseId')}/>
                </Grid>
                <Grid style={{margin:'10px'}} direction='row' container>
                    <Typography variant='title'>Professor Name</Typography>
                    <Input 
                    style={styles.input}
                    onChange={this.handleChange('professor')}/>
                </Grid>
                <Grid style={{margin:'10px'}} direction='row' container>
                    <Typography variant='title'>Course Name</Typography>
                    <Grid xs={6}>
                        <Input 
                        style={styles.input}
                        onChange={this.handleChange('courseName')}
                        fullWidth/>
                    </Grid>
                </Grid>
                <Divider light/><br/>
                <Grid style={{margin:'10px'}} direction='row' alignItems="flex-end" container>
                    <Typography variant='title'>Course Time</Typography>
                    <Grid xs={6}>
                        <Input 
                        style={styles.input}
                        onChange={this.handleChange('time')}
                        fullWidth/>
                        {/*should be replace with selector*/}
                    </Grid>
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
    wrapper: {
        paddingLeft: '200px',
        paddingRight:'200px'
    },
    input:{
        marginLeft: '10px',
        marginRight: '10px',
    }
}
