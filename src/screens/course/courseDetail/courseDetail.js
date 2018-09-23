import React, { Component } from "react";
import { 
    Divider, 
    Grid, 
    ExpansionPanel, ExpansionPanelSummary, 
    ExpansionPanelDetails, Typography, CircularProgress} from '@material-ui/core';
import CourseInstructors from './components/courseInstructors';
import CourseComments from './components/courseComments';
import CourseIntroduction from './components/courseIntroduction';
import CourseCard from './components/courseCard';
import { BaseComponent } from '../../../components/BaseComponent';
import CourseSections from './components/courseSections';
import {Table,Anchor, AutoComplete, Row, Col, Card, Select, Button, Layout, Menu,Pagination, Icon} from 'antd';


export class CourseDetail extends BaseComponent {

    constructor(props) {
        super(props);
        this.state = {
            temp: this.props.match.params.courseId,

            courseId: this.props.match.params.courseId,
            userId: this.props.user === null ? null : this.props.user.userId,

            course: null,
            courseComments: null,

            loading: true,
        };
    }

    componentWillMount = () => {

        if (this.state.courseId === undefined) {
            this.props.history.push("/courseSearch");
            return
        }

        this.fetchCourse();
        

    }

    fetchCourse = () => {

        let form = new FormData();
        form.append("courseId", this.state.courseId)

        let successAction = (result) => {
            this.setState({ course: result.detail, loading: false, courseComments: result.more })
        }

        this.newPost('/api/course/courseIdToCourse', form, successAction)
        
    }

    goToSectionCreate = () => {
        this.props.history.push('/sectionCreate')
    }

    renderCourseCard = () => {

        if (this.state.courseComments === null || this.state.course === null) {
            return null;
        }

        return (
            <CourseCard course={this.state.course} courseComments={this.state.courseComments} />
        )

    }


    render() {

        const {courseId, userId} = this.state;

        if (this.state.loading) {
            return (
                <center>
                    <CircularProgress />
                </center>
            )
        }

        return (
            <Row justify='center' type='flex' style={styles.container}>
                <Col span={18}>
                    <Row gutter={32}>

                        <Col span={18}>

                            {this.renderCourseCard()}

                            <CourseIntroduction course={this.state.course}/>

                            <CourseSections courseId={courseId}/>

                            <CourseComments courseId={courseId} userId={userId}/>

                        </Col>

                        <Col span={6}>
                            <Card style={{marginBottom:'5px'}}>
                                <Typography style={styles.teacher}>授课人</Typography>
                            </Card>
                            <CourseInstructors courseId={courseId}/>
                        </Col>

                    </Row>
                </Col>
            </Row>
        );
    }
}

const styles = {

    container: {
        marginTop: '20px'
    },

    button: {
        width: '100%',
        color: '#404040',
        backgroundColor: '#bcb8a8',
    },
    teacher: {
        fontSize: '30px',
        textAlign: 'center',
        marginBottom: '3px',
    },
}

