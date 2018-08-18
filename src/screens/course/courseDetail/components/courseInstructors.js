import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import {Divider} from 'antd'
import {
    Grid,Button, Typography, Icon, Card, LinearProgress
} from '@material-ui/core';

const teachers = [

    {
        realName:'暂无信息',
        faculty:'暂无信息',
        courses:[
            {courseName:"暂无教师课程信息",courseId:"1"},
            {courseName:"暂无教师课程信息",courseId:"2"}
        ]
    },

    {
        realName: '暂无信息',
        faculty: '暂无信息',
        courses:[
            {courseName:"暂无教师课程信息",courseId:"3"},
            {courseName:"暂无教师课程信息",courseId:"4"}
        ]
    }
]


class CourseInstructors extends Component {
    state = {}

    goToCourseDetail = (courseId) => {
        this.props.history.replace({ pathname: '/courseDetail', courseId: courseId })
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

    renderInstructor = (teacher) => {
        return (
            <Card style={styles.container}>
                <Grid container style={styles.professorCard}>
                    <Grid xs={12} style={styles.padding} />
                    <Grid xs={12} direction='row' container>
                        <Grid xs={6} style={styles.courseAvatarContainer} container>
                            <img src={require('../src/test.png')} style={styles.teacherAvatar} />
                        </Grid>
                
                        <Grid xs={6} direction='column' style={{marginTop:'10px'}} container>
                            <Typography style={styles.teacherName}>{teacher.realName}</Typography>
                            <Typography style={styles.facultyName}>{teacher.faculty}</Typography>
                        </Grid>
                    </Grid>
                    <Divider style={{fontSize:'15px'}}>同时教授</Divider>
                    {this.renderOtherCourses(teacher.courses)}              
                    <Grid xs={12} style={styles.padding} />
                </Grid>
            </Card>
        )
    }


    render() {
        return (
            <Grid style={styles.container}>
                {teachers.map(this.renderInstructor)}
            </Grid>
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
        justifyContent: 'center',
        alignItems: 'center'
    },

    teacherName: {
        fontSize: '30px',
        textAlign: 'flex-start',
        marginBottom: '3px',
    },

    facultyName: {
        fontSize: '15px',
        textAlign: 'flex-start',
        marginBottom: '5px',
    },

    courseName:{
        fontSize: '15px',
        textAlign: 'flex-start',
    },

    teacherAvatar: {
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
        justifyContent: 'center',
        marginBottom:'5px'
    }

}

export default withRouter(CourseInstructors);
