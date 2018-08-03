import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import {
    Divider,
    Grid,
    Button, ExpansionPanel, ExpansionPanelSummary,
    ExpansionPanelDetails, Typography, Icon, Card, LinearProgress
} from '@material-ui/core';

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
    introduction: 'This course provides a systematic approach to empirical problem solving which will enable students to critically assess the sampling protocol and conclusions of an empirical study including the possible sources of error in the study and whether evidence of a causal relationship can be reasonably concluded. The connection between the attributes of a population and the parameters in the named distributions covered in STAT 230 will be emphasized. Numerical and graphical techniques for summarizing data and checking the fit of a statistical model will be discussed. '
}

const courses = [

    {
        courseId: 'FHIHIS_NSIFNI',
        courseName: 'MATH239',
    },

    {
        courseId: 'FHdsfsdf',
        courseName: 'MATH239',
    }
]


class CourseInstructors extends Component {
    state = {}

    goToCourseDetail = (courseId) => {
        this.props.history.replace({ pathname: '/courseDetail', courseId: courseId })
    }

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

    renderRating = (title, total, positive) => {
        return (
            <Grid xs={12} style={styles.ratingContainer} container>
                <Grid xs={2}>
                    <Typography style={styles.ratingText}>{title}</Typography>
                </Grid>
                <Grid xs={6}>
                    <LinearProgress color="secondary" variant="buffer" value={positive} valueBuffer={total} style={styles.rating} />
                </Grid>
                <Grid xs={3}>
                    <Typography style={styles.ratingText}>{positive / total}%</Typography>
                </Grid>
            </Grid>
        )
    }

    renderOtherCourses = (courses) => {

        var coursesToList = (course, index) => {
            return (
                <Button fullWidth onClick={this.goToCourseDetail.bind(this, course.courseId)}>{course.courseName}</Button>
            )
        }

        return (
            <Grid xs={10}>
                {courses.map(coursesToList)}
            </Grid>
        )
    }

    renderInstructor = () => {
        return (
            <Grid container style={styles.professorCard}>

                <Grid xs={12} style={styles.padding} />

                <Grid xs={12} style={styles.courseAvatarContainer} container>
                    <img src={require('../src/test.png')} style={styles.courseAvatar} />
                </Grid>

                <Grid xs={12}>
                    <Typography style={styles.courseName}>{course.courseName}</Typography>
                </Grid>

                {this.renderRating("Mark", 100, 30)}

                {this.renderRating("Easy", 100, 30)}

                {this.renderRating("Likes", 100, 30)}

                <Grid xs={12}>
                    <Typography style={styles.courseName}>other courses</Typography>
                </Grid>

                {this.renderOtherCourses(courses)}

                <Grid xs={12} style={styles.padding} />

            </Grid>
        )
    }


    render() {
        return (
            <Card style={styles.container}>
                {this.renderInstructor()}
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


    userAvatar: {
        height: '40px',
        width: '40px'
    },

    courseItem: {
        textAlign: 'center'
    },

    text: {
        textAlign: 'center',
    },

    ratingText: {
        textAlign: 'center'
    },

    professorCard: {
        justifyContent: 'center'
    }

}

export default withRouter(CourseInstructors);
