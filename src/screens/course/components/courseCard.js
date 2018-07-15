import React, { Component } from "react";
import { 
    Divider, 
    Grid, 
    Button, ExpansionPanel, ExpansionPanelSummary, 
    ExpansionPanelDetails, Typography, Icon, Card, LinearProgress} from '@material-ui/core';
var moment = require('moment');



const course = {
    courseId: 'HISHF',
    courseType: 'CS',
    courseCode: '135',
    courseCredit: '3',
    courseFaculty: 'Math',
    courseProfId: 'HIHF',
    coursePorf: 'Dave',
    courseTime: 'Wednesday',
    courseName: 'Introduction',
    courseLocation: 'Nowhere',
    courseRatingNum: 135,
    courseLikeNum: 100,
    courseUsefulNum: 33,
    courseEasyNum: 56,
    courseAvatar: './src/test.png',
}

export default class CourseCard extends Component {
    state = {  }

    renderCourseItem = (title, value) => {
        return (
            <Grid xs={12} style={styles.courseInfoContainer} container>
                <Grid xs={3}>
                    <Typography>{title}</Typography>
                </Grid>
                <Grid xs={7}>
                    <Typography>{value}</Typography>
                </Grid>
            </Grid>
        )
    }


    render() {
        return (
            <Card style={styles.card}>
                <Grid container style={styles.courseInfoContainer}>

                    <Grid xs={8} container>

                        <Grid xs={12} style={styles.courseAvatarContainer} container>
                            <img src={require('../src/test.png')} style={styles.courseAvatar} />
                        </Grid>

                        <Grid xs={12}>
                            <Typography style={styles.courseName}>{course.courseName}</Typography>
                        </Grid>

                        <Grid xs={12} style={styles.ratingContainer} container>
                            <Grid xs={2}>
                                <Typography>Useful</Typography>
                            </Grid>
                            <Grid xs={6}>
                                <LinearProgress color="secondary" variant="buffer" value={10} valueBuffer={100} style={styles.rating} />
                            </Grid>
                        </Grid>

                        <Grid xs={12} style={styles.ratingContainer} container>
                            <Grid xs={2}>
                                <Typography>Easy</Typography>
                            </Grid>
                            <Grid xs={6}>
                                <LinearProgress color="secondary" variant="buffer" value={10} valueBuffer={100} style={styles.rating} />
                            </Grid>
                        </Grid>

                        <Grid xs={12} style={styles.ratingContainer} container>
                            <Grid xs={2}>
                                <Typography>Likes</Typography>
                            </Grid>
                            <Grid xs={6}>
                                <LinearProgress color="secondary" variant="buffer" value={10} valueBuffer={100} style={styles.rating} />
                            </Grid>
                        </Grid>

                    </Grid>

                    <Grid xs={4} container>

                        {this.renderCourseItem("Code:", course.courseCode)}

                        {this.renderCourseItem("Type:", course.courseType)}

                        {this.renderCourseItem("Credit:", course.courseCredit)}

                        {this.renderCourseItem("Faculty:", course.courseFaculty)}

                        {this.renderCourseItem("Professor:", course.courseProfessor)}

                        {this.renderCourseItem("Time:", course.courseTime)}

                        {this.renderCourseItem("Location:", course.courseLocation)}

                    </Grid>

                </Grid>

            </Card>
        );
    }
}

const styles = {

    card: {
        marginBottom: '10px',
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
        alignItems: 'center'
    },

    courseName: {
        fontSize: '30px',
        textAlign: 'center',
        marginBottom: '30px',
    },

    courseAvatar: {
        width: '100px',
        height: '100px',
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
        justifyContent: 'center'
    },

    userAvatar: {
        height: '40px',
        width: '40px'
    },

    courseItem: {
        textAlign: 'center'
    },

    text: {
        textAlign: 'center',
    }

}
