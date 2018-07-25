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
                <Grid container>

                    <Grid container>
                        <Grid xs={3}>
                            <Typography >Real Name :</Typography>
                        </Grid>
                        <Grid xs={5}>
                            <FormControl type="text" value={this.state.realName} onChange={this.handleChange("realName")} />
                        </Grid>
                    </Grid>

                    <Grid container>
                        <Grid xs={3}>
                            <Typography >Code :</Typography>
                        </Grid>
                        <Grid xs={5}>
                            <FormControl type="text" value={this.state.instructorCode} onChange={this.handleChange("code")} />
                        </Grid>
                    </Grid>

                    <Grid justify='center' container xs={8}>
                        <Button style={styles.button} onClick={this.verify} >
                            Verify
                        </Button>
                    </Grid>

                </Grid>
            )
        }

        return (
            <Grid container>

                <Grid container>
                    <Typography >{this.state.instructor.realName}</Typography>
                </Grid>

                <Grid container>
                    <Typography >{this.state.instructor.code}</Typography>
                </Grid>

                <Grid container>
                    <Typography >Verified Instructor</Typography>
                </Grid>

                <Grid justify='center' container xs={8}>
                    <Button style={styles.button} onClick={this.update} >
                        Update
                    </Button>
                </Grid>

            </Grid>
        )
    }

   
    render() {
        return (
            <Card>
                <Grid justify='center' container>
                    <Grid xs={6} container>
                    
                        {this.renderContent()}

                    </Grid>
                </Grid>
            </Card>
        );
    }
}


const styles = {

    button: {
        marginTop: '10px',
        borderRadius: "20px",
        width: "50%",
    },

};


const mapStateToProps = state => ({
    user: state.userReducer.user
})


export default connect(mapStateToProps)(InstructorVerification);