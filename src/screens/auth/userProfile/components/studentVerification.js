import React from "react";
import { BaseComponent } from '../../../../components/BaseComponent';
import { Grid, Button, Typography, Card } from '@material-ui/core';
import { FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';
import { set_student } from '../../../../redux/actions/action';


class StudentVerification extends BaseComponent {

    constructor(props) {
        super(props);
        this.state = {
            update: false,
            realName: null,
            code: null,
        };
    }

    create = () => {

        let form = new FormData();
        form.append("userId", this.props.user.userId);
        form.append("code", this.state.code);
        form.append("realName", this.state.realName);

        this.post('/api/student/create', form).then((result) => {

            if (!result) {
                this.pushNotification("danger", "Connection error", this.props.dispatch);
                return;
            } 
            
            if (result.status === 'fail') {
                this.pushNotification("danger", result.status, this.props.dispatch);
                return;
            } 
            
            if (result.status === 'success') {
                this.setState({ student: result.detail })
                this.pushNotification("success", "successfully create student", this.props.dispatch);
            } else {

                this.pushNotification("danger", result.status, this.props.dispatch);
            }

        })
    }

    submit = () => {
        
        let form = new FormData();
        form.append("studentId", this.props.student.studentId);
        form.append("code", this.state.code);
        form.append("realName", this.state.realName);

        this.post('/api/student/updateByStudentId', form).then((result) => {

            if (!result) {
                this.pushNotification("danger", "Connection error", this.props.dispatch);
                return;
            } 
            
            if (result.status === 'fail') {
                this.pushNotification("danger", result.status, this.props.dispatch);
                return;
            } 
            
            if (result.status === 'success') {

                this.props.dispatch(set_student(result.detail))
                this.setState({ update: false })
                this.pushNotification("success", "successfully update student", this.props.dispatch);

            } else {

                this.pushNotification("danger", result.status, this.props.dispatch);
            }

        })
    }

    update = () => {
        this.setState({ update: true })
    }


    renderContent = () => {

        if (this.props.student === null) {
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
                            <FormControl type="text" value={this.state.code} onChange={this.handleChange("code")} />
                        </Grid>
                    </Grid>

                    <Grid justify='center' container xs={8}>
                        <Button mini style={styles.button} variant="outlined" onClick={this.create} >
                            <Typography variant='button' style={styles.buttonText}>Create</Typography>
                        </Button>
                    </Grid>

                </Grid>
            )
        }

        if (this.state.update) {
            return (
                <Grid justify='center' container>

                    <Grid style={styles.container} container>
                        <Grid xs={4}>
                            <Typography style={styles.typography}>Real Name ::</Typography>
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
                            <FormControl type="text" value={this.state.code} onChange={this.handleChange("code")} />
                        </Grid>
                    </Grid>

                    <Grid justify='center' container xs={8}>
                        <Button mini style={styles.button} variant="outlined" onClick={this.submit} >
                            <Typography variant='button' style={styles.buttonText}>Submit</Typography>
                        </Button>
                    </Grid>

                </Grid>
            )
        }

        return (
            <Grid justify='center' container>

                <Grid justify='center' container>
                    <Typography style={styles.name}>{this.props.student.realName}</Typography>
                </Grid>

                <Grid justify='center' container>
                    <Typography style={styles.code}>{this.props.student.code}</Typography>
                </Grid>

                <Grid justify='center' container>
                    <Typography style={styles.instructor}>Verified Student</Typography>
                </Grid>

                <Grid justify='center' container xs={8}>
                    <Button mini style={styles.button} variant="outlined" onClick={this.update} >
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
        marginTop: '10px',
        marginBottom: '10px',
        borderRadius: "5px",
        borderWidth: "1.2px",
        borderColor: "#60CDEE",
        width: "50%",
    },

    buttonText: {
        fontSize: '12px',
        color: '#60CDEE'
    },

    container: {
        marginTop: '10px',
        marginBottom: '10px',
    },

    typography: {
        fontSize: '130%'
    },

    name: {
        fontSize: '130%',
        color: '#404040',
    },

    code: {
        fontSize: '130%',
    },

    instructor: {
        fontSize: '130%',
        color: '#5DB95D',
    }

};


const mapStateToProps = state => ({
    user: state.identityReducer.user,
    instructor: state.identityReducer.instructor,
    student: state.identityReducer.student,
})


export default connect(mapStateToProps)(StudentVerification);
