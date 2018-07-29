import React, { Component } from "react";
import { BaseComponent } from '../../../../components/BaseComponent';
import { connect } from 'react-redux';
import {
    Divider,
    Grid,
    Button, ExpansionPanel, ExpansionPanelSummary,
    ExpansionPanelDetails, Typography, Icon, Card, LinearProgress
} from '@material-ui/core';

var moment = require('moment');

const sections = [
    {
        sectionId: '2333',
        courseId: '2333',
        instructorId: '2333',
        code: '101',
        enrolledStudentNum: 20,
        maxStudentNum: 30,
        location: 'MC4018',
        term: '2018 Spring',
        time: '11am'
    },

    {
        sectionId: '2333',
        courseId: '2333',
        instructorId: '2333',
        code: '101',
        enrolledStudentNum: 20,
        maxStudentNum: 30,
        location: 'MC4018',
        term: '2018 Spring',
        time: '11am'
    }
]
class CourseSections extends BaseComponent {

    constructor(props) {
        super(props);
        this.state = {
            courseId: this.props.courseId,

            sections: [],
        };
    }

    componentWillMount = () => {
        this.fetchSections();
    }

    fetchSections = () => {
        
        var form = new FormData();
        form.append('courseId', this.state.courseId);

        this.post('/api/section/courseIdToSections', form).then((result) => {

            if (!result) {
                this.pushNotification("danger", "Connection error", this.props.dispatch);

            } else if (result.status === 'fail') {
                this.pushNotification("danger", result.description, this.props.dispatch);

            } else if (result.status === 'success') {

                this.setState({sections: result.detail})
                this.pushNotification("success", "successfully fetch sections", this.props.dispatch);

            } else {

                this.pushNotification("danger", "unknown error", this.props.dispatch);
            }

        })
    }

    renderSection = (section, index) => {
        return (
            <Grid xs={12} style={styles.sectionContainer}>
                <Button fullWidth>
                    <Grid xs={2}container>
                        <Typography>{section.code}}</Typography>
                    </Grid>
                    <Grid xs={3}container>
                        <Typography>{section.enrolledStudentNum}</Typography>
                    </Grid>
                    <Grid xs={3}container>
                        <Typography>{section.location}</Typography>
                    </Grid>
                    <Grid xs={2}container>
                        <Typography>{section.time}</Typography>
                    </Grid>
                    <Grid xs={2}container>
                        <Typography>{section.instructorId}</Typography>
                    </Grid>

                </Button>
                <Divider/>
            </Grid>
        )
    }
    render() {
     
        return (
            <Card style={styles.container}>
                <Grid container style={styles.courseInfoContainer}>

                    <Grid xs={12} style={styles.padding} />

                        <Grid xs={12} style={styles.sectionContainer}>
                            <Button fullWidth divider>
                                <Grid xs={2} container>
                                    <Typography style={styles.text}>code</Typography>
                                </Grid>
                                <Grid xs={3} container>
                                    <Typography style={styles.text}>Enrolled Student Number</Typography>
                                </Grid>
                                <Grid xs={3} container>
                                    <Typography style={styles.text}>location</Typography>
                                </Grid>
                                <Grid xs={2} container>
                                    <Typography style={styles.text}>time</Typography>
                                </Grid>
                                <Grid xs={2} container>
                                    <Typography style={styles.text}>instructor Id</Typography>
                                </Grid>

                            </Button>
                            <Divider/>
                        </Grid>

                    {this.state.sections.map(this.renderSection)}

                    <Grid xs={12} style={styles.padding} />

                </Grid>

            </Card>
        );
    }
}

const styles = {

    container: {
        marginBottom: '10px',
    },

    padding: {
        height: '40px'
    },

    sectionContainer:{
      backgroundColor:'#FFF',
    },

    courseContainer: {
        width: '100%',
        height: '80px',
        justifyContent: 'center',
        alignItems: 'center',
    },

    courseAvatarContainer: {
        height: '150px',
        justifyContent: 'center',
        alignItems: 'center',
    },

    courseName: {
        fontSize: '30px',
        textAlign: 'center',
        marginBottom: '30px',
    },

    courseAvatar: {
        width: '100px',
        height: '100px',
        borderRadius: '5px',
    },

    ratingContainer: {
        justifyContent: 'center',
        height: '20px',
        marginBottom: '10px'
    },

    rating: {
        height: '100%',
        borderRadius: '3px',
        marginLeft: '10px'
    },

    courseInfoContainer: {
        justifyContent: 'center',
    },

    courseInfo: {
        fontSize: '15px',
        textAlign: 'center',
        marginTop: '30px',
    },

    userAvatar: {
        height: '40px',
        width: '40px',
    },

    courseItem: {
        textAlign: 'center'
    },

    text: {
        fontSize:'13px',
        fontWeight:'600',
    },

    ratingText: {
        textAlign: 'center',
    }

}

export default connect()(CourseSections)
