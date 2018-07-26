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
    introduction: 'This course provides a systematic approach to empirical problem solving which will enable students to critically assess the sampling protocol and conclusions of an empirical study including the possible sources of error in the study and whether evidence of a causal relationship can be reasonably concluded. The connection between the attributes of a population and the parameters in the named distributions covered in STAT 230 will be emphasized. Numerical and graphical techniques for summarizing data and checking the fit of a statistical model will be discussed. '
}

export default class CourseCard extends Component {
    state = {  }

    renderCourseItem = (title, value) => {
        return (
            <Grid xs={12} style={styles.courseInfoContainer} container>
                <Grid xs={3}>
                    <Typography style={styles.courseInfo}>{title}</Typography>
                </Grid>
                <Grid xs={5}>
                    <Typography style={styles.courseInfo}>{value}</Typography>
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
                <Grid xs={8}>
                    <LinearProgress color="secondary" variant="buffer" value={positive} valueBuffer={total} style={styles.rating} />
                </Grid>
                <Grid xs={2}>
                    <Typography style={styles.ratingText}>{positive / total}%</Typography>
                </Grid>
            </Grid>
        )
    }


    render() {
        const {code, name, credit} = this.props.course;
        return (
            <Card style={styles.container}>
                <Grid container style={styles.courseInfoContainer}>

                    <Grid xs={12} style={styles.padding}/>

                    <Grid xs={8} container>

                        <Grid xs={12} style={styles.courseAvatarContainer} container>
                            <img src={require('../src/test.png')} style={styles.courseAvatar} />
                        </Grid>

                        <Grid xs={12}>
                            <Typography style={styles.courseName}>{name}</Typography>
                        </Grid>

                        {this.renderRating("Useful", 100, 30)}

                        {this.renderRating("Easy", 100, 30)}

                        {this.renderRating("Likes", 100, 30)}

                    </Grid>
                    <Grid xs={4} container>

                        {this.renderCourseItem("Code:", code)}

                        {this.renderCourseItem("Type:", course.courseType)}

                        {this.renderCourseItem("Credit:", credit)}

                        {this.renderCourseItem("Faculty:", course.courseFaculty)}
                        
                    </Grid>

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

    courseInfo:{
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
        textAlign: 'center',
    },

    ratingText: {
        textAlign: 'center',
    }

}
