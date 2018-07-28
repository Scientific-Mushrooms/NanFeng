import React, { Component } from "react";
import { BaseComponent } from '../../../../components/BaseComponent';
import { Divider, Grid, Button, Typography, Card } from '@material-ui/core';
import { FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';


class InstructorVerification extends BaseComponent {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            instructor: null,
            userId: null,

            realName: null,
            instrucotorCode: null,
        };
    }

    componentWillMount = () => {

        if (this.props.user !== null) {
            this.setState({userId: this.props.user.userId})
            this.fetchInstructor(this.props.user.userId)
        }

        

    }

    fetchInstructor = () => {
        let form = new FormData();
        form.append("userId", this.props.user.userId);

        this.post('/api/instructor/userIdToInstructor', form).then((result) => {

            if (!result) {
                this.pushNotification("danger", "Connection error", this.props.dispatch);

            } else if (result.status === 'fail') {
                this.pushNotification("danger", result.description, this.props.dispatch);

            } else if (result.status === 'success') {

                this.setState({instructor: result.detail, loading: false})
                this.pushNotification("success", "successfully fetch instructor info", this.props.dispatch);

            } else {

                this.pushNotification("danger", "unknown error", this.props.dispatch);
            }

        })
    }

    verify = () => {
        let form = new FormData();
        form.append("userId", this.state.userId);
        form.append("code", this.state.code);
        form.append("realName", this.state.realName);

        this.post('/api/instructor/create', form).then((result) => {

            if (!result) {
                this.pushNotification("danger", "Connection error", this.props.dispatch);

            } else if (result.status === 'fail') {
                this.pushNotification("danger", result.description, this.props.dispatch);

            } else if (result.status === 'success') {

                this.setState({ instructor: result.detail })
                this.pushNotification("success", "successfully fetch instructor info", this.props.dispatch);

            } else {

                this.pushNotification("danger", "unknown error", this.props.dispatch);
            }

        })
    }

    update = () => {
        this.setState({instructor: null})
    }


    renderContent = () => {

        if (this.state.loading) {
            return null;
        }

        if (this.state.instructor === null) {
            return (
                <Grid justify='center' container>

                    <Grid style={styles.container} container>
                        <Grid xs={4}>
                            <Typography style={styles.typography}>Real Name :</Typography>
                        </Grid>
                        <Grid xs={8}>
                            <FormControl type="text" value={this.state.realName} onChange={this.handleChange("realName")} />
                        </Grid>
                    </Grid>

                    <Grid style={styles.container} container>
                        <Grid xs={4}>
                            <Typography style={styles.typography}>Code :</Typography>
                        </Grid>
                        <Grid xs={8}>
                            <FormControl type="text" value={this.state.instructorCode} onChange={this.handleChange("code")} />
                        </Grid>
                    </Grid>

                    <Grid justify='center' container xs={8}>
                        <Button
                            mini
                            style={styles.button}
                            variant="outlined"
                            onClick={this.verify} >
                            <Typography variant='button' style={styles.buttonText}>Verify</Typography>
                        </Button>
                    </Grid>

                </Grid>
            )
        }

        return (
            <Grid  justify='center' container>

                <Grid justify='center' container>
                    <Typography style={styles.name}>{this.state.instructor.realName}</Typography>
                </Grid>

                <Grid justify='center' container>
                    <Typography style={styles.code}>{this.state.instructor.code}</Typography>
                </Grid>

                <Grid justify='center' container>
                    <Typography style={styles.instructor}>Verified Instructor</Typography>
                </Grid>

                <Grid justify='center' container xs={8}>
                    <Button
                        mini
                        style={styles.button}
                        variant="outlined"
                        onClick={this.update} >
                        <Typography variant='button' style={styles.buttonText}>Update</Typography>
                    </Button>
                </Grid>

            </Grid>
        )
    }

   
    render() {
        return (
            <Card>
                <Grid style={styles.container} justify='center' container xs={12}>
                    <Grid justify='center' container xs={8}>
                    
                        {this.renderContent()}

                    </Grid>
                </Grid>
            </Card>
        );
    }
}


const styles = {

    button: {
        marginTop:'10px',
        marginBottom:'10px',
        borderRadius: "5px",
        borderWidth:"1.2px",
        borderColor:"#60CDEE",
        width: "50%",
    },

    buttonText:{
        fontSize:'12px',
        color:'#60CDEE'
    },

    container: {
        marginTop:'10px',
        marginBottom: '10px',
    },

    typography: {
        fontSize: '130%'
    },

    name:{
        fontSize:'130%',
        color:'#404040',
    },

    code:{
        fontSize:'130%',
    },

    instructor:{
        fontSize:'130%',
        color:'#5DB95D',
    }

};


const mapStateToProps = state => ({
    user: state.identityReducer.user
})


export default connect(mapStateToProps)(InstructorVerification);
