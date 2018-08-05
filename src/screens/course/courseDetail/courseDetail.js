import React, { Component } from "react";
import { 
    Divider, 
    Grid, 
    Button, ExpansionPanel, ExpansionPanelSummary, 
    ExpansionPanelDetails, Typography, Icon, Card, CircularProgress} from '@material-ui/core';
import CourseInstructors from './components/courseInstructors';
import CourseComments from './components/courseComments';
import CourseIntroduction from './components/courseIntroduction';
import CourseCard from './components/courseCard';
import { BaseComponent } from '../../../components/BaseComponent';
import CourseSections from './components/courseSections';



export class CourseDetail extends BaseComponent {

    constructor(props) {
        super(props);
        this.state = {

            courseId: this.props.location.courseId,
            userId: this.props.user === null ? null : this.props.user.userId,

            course: null,
            courseComments: null,

            loading: true,
        };
    }

    componentWillMount = () => {

        if (this.state.courseId === undefined) {
            this.props.history.push("/courseList");
            return
        }

        this.fetchCourse();
        

    }

    fetchCourse = () => {

        let form = new FormData();
        form.append("courseId", this.state.courseId)

        this.post('/api/course/courseIdToCourse', form).then((result) => {

            if (!result) {
                this.pushNotification("danger", "Connection error", this.props.dispatch);

            } else if (result.status === 'fail') {
                this.pushNotification("danger", result.status, this.props.dispatch);

            } else if (result.status === 'success') {

                this.setState({ course: result.detail, loading: false, courseComments: result.more })
                this.pushNotification("success", "successfully fetch the course", this.props.dispatch);

            } else {

                this.pushNotification("danger", result.status, this.props.dispatch);
            }

        })
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
            <Grid container spacing={16}>

                <Grid xs={9} item>

                    {this.renderCourseCard()}

                    <CourseIntroduction course={this.state.course}/>

                    <CourseSections courseId={courseId}/>

                    <CourseComments courseId={courseId} userId={userId}/>

                </Grid>

                <Grid xs={3} item>

                    <Card>
                        <Button style={styles.button} color="primary" onClick={this.goToSectionCreate}>
                            Create Section
                        </Button>
                    </Card>
                    
                    <CourseInstructors courseId={courseId}/>

                </Grid>

            </Grid>
        );
    }
}

const styles = {

    button: {
        width: '100%',
        color: '#404040',
        backgroundColor: '#bcb8a8',
    },


}
