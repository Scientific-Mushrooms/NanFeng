import React, { Component } from "react";
import { 
    Divider, 
    Grid, 
    Button, ExpansionPanel, ExpansionPanelSummary, 
    ExpansionPanelDetails, Typography, Icon, Card, LinearProgress} from '@material-ui/core';
import ProfessorCard from './components/professorCard';
import CourseComments from './components/courseComments';
import CourseRecommendation from './components/courseRecommendation';
import CourseIntroduction from './components/courseIntroduction';
import CourseCard from './components/courseCard';

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

export class CourseDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            courseId: this.props.location.courseId,
        };
    }

    render() {
        return (
            <Grid container>

                <Grid xs={7}>
                  
                    <CourseCard/>

                    <CourseIntroduction/>

                    <CourseComments courseId="GIGFI-HFSIHI"/>

                </Grid>

                <Grid xs={1}></Grid>

                <Grid xs={4}>
                    
                    <ProfessorCard professorId="FGIHISHIG"/>

                    <CourseRecommendation/>

                </Grid>

            </Grid>
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
