import React, { Component } from "react";
import { BaseComponent } from '../../../../components/BaseComponent';
import { Divider, Grid, Button, Typography, Icon, TextField, Popover } from '@material-ui/core';
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
            studentCode: null,
        };
    }

    componentWillMount = () => {

        if (this.props.user !== null) {
            this.setState({userId: this.props.user.userId});
        }

        this.fetchInstructor();
    }

    fetchInstructor = () => {
        let form = new FormData();
        form.append("userId", this.state.userId);

        this.post('/api/instructor/userIdToInstructor', form).then((result) => {

            if (!result) {
                this.pushNotification("danger", "Connection error", this.props.dispatch);

            } else if (result.status === 'fail') {
                this.pushNotification("danger", result.description, this.props.dispatch);

            } else if (result.status === 'success') {

                this.setState({instructor: result.detail})
                this.pushNotification("success", "successfully fetch instructor info", this.props.dispatch);

            } else {

                this.pushNotification("danger", "unknown error", this.props.dispatch);
            }

        })
    }

    renderIdentity = () => {

        if (this.state.instructor === null) {
            return null
        }

        return (
            <Grid  container>
                <Typography variant='display2'>Instructor</Typography>
            </Grid>
        )
    }

    renderRealName = () => {

        if (this.state.instructor === null) {
            return (
                <Grid container>
                    <Grid xs={3}>
                        <Typography style={styles.typography}>Real Name :</Typography>
                    </Grid>
                    <Grid xs={5}>
                        <FormControl type="text" value={this.state.realName} onChange={this.handleChange("realName")} />
                    </Grid>
                </Grid>
            )
        }

        return (
            <Grid container>
                <Grid xs={3}>
                    <Typography style={styles.typography}>Real Name :</Typography>
                </Grid>
                <Grid xs={5}>
                    <FormControl type="text" disabled={true} value={this.state.realName} onChange={this.handleChange("realName")} />
                </Grid>
            </Grid>
        )
    }

   
    render() {
        return (
            <Grid direction='column' container>

                <Typography variant='display2'>Identity Verification</Typography>

                {this.renderRealName()}

                {this.renderIdentity()}


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


const mapStateToProps = state => ({
    user: state.userReducer.user
})


export default connect(mapStateToProps)(InstructorVerification);