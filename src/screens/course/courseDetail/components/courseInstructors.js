import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import {Divider} from 'antd'
import {
    Grid,Button, Typography, Icon, Card, LinearProgress
} from '@material-ui/core';
import BaseComponent from '../../../../components/BaseComponent'

const teacher = [

    {
        realName:'暂无信息',
        faculty:'暂无信息',
        courses:[
            {courseName:"暂无教师课程信息",courseId:"1"},
            {courseName:"暂无教师课程信息",courseId:"2"}
        ]
    },
]


class CourseInstructors extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            courseId: this.props.courseId,
            teachers: [],
        };
    }

    state = {}

    componentWillMount = () => {
        this.fetchSections();
    }

    fetchSections = () => {
        
        var form = new FormData();
        form.append('courseId', this.state.courseId);

        this.post('/api/section/courseIdToSections', form).then((result) => {

            if (!result) {
                this.pushNotification("danger", "连接错误", this.props.dispatch);

            } else if (result.status === 'fail') {
                this.pushNotification("danger", result.status, this.props.dispatch);

            } else if (result.status === 'success') {

                result.detail.map(this.fetchInstructor)

            }
        })
    }

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

    fetchInstructor=(section)=>{
        const instructorId=section.instructorId
        var form = new FormData();
        form.append('instructorId', instructorId);

        this.post('/api/instructor/instructorIdToInstructor', form).then((result) => {

            if (!result) {
                this.pushNotification("danger", "连接错误", this.props.dispatch);

            } else if (result.status === 'fail') {
                this.pushNotification("danger", result.status, this.props.dispatch);

            } else if (result.status === 'success') {

                var teacher=this.state.teachers.concat(result.detail)
                this.setState({teachers:teacher})

            }
        })
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
                            <Typography style={styles.facultyName}>暂无院系信息</Typography>
                        </Grid>
                    </Grid>
                    <Divider style={{fontSize:'15px'}}>同时教授</Divider>
                        <Button fullWidth onClick={this.goToCourseDetail.bind(this)}>暂无课程信息</Button>  
                        <Button fullWidth onClick={this.goToCourseDetail.bind(this)}>暂无课程信息</Button>                    
                    <Grid xs={12} style={styles.padding} />
                </Grid>
            </Card>
        )
    }


    render() {
        return (
            <Grid style={styles.container}>
                {this.preRender()}
                {this.state.teachers.map(this.renderInstructor)}
            </Grid>
        );
    }

    preRender(){
        if(this.state.teachers.length==0)
        return (
            <Card style={styles.container}>
                <Grid container style={styles.professorCard}>
                    <Grid xs={12} style={styles.padding} />
                    <Grid xs={12} direction='row' container>
                        <Grid xs={6} style={styles.courseAvatarContainer} container>
                            <img src={require('../src/test.png')} style={styles.teacherAvatar} />
                        </Grid>
                
                        <Grid xs={6} direction='column' style={{marginTop:'10px'}} container>
                            <Typography style={styles.teacherName}>暂无教师信息</Typography>
                            <Typography style={styles.facultyName}>暂无院系信息</Typography>
                        </Grid>
                    </Grid>
                    <Divider style={{fontSize:'15px'}}>同时教授</Divider>
                        <Button fullWidth onClick={this.goToCourseDetail.bind(this)}>暂无课程信息</Button>  
                        <Button fullWidth onClick={this.goToCourseDetail.bind(this)}>暂无课程信息</Button>                    
                    <Grid xs={12} style={styles.padding} />
                </Grid>
            </Card>
        )
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
