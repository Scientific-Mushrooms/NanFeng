import React, { Component } from "react";
import { 
    Divider, 
    Grid, 
    Button, ExpansionPanel, ExpansionPanelSummary, 
    ExpansionPanelDetails, Typography, Icon, Card, CircularProgress} from '@material-ui/core';
import ProfessorCard from './components/professorCard';
import CourseComments from './components/courseComments';
import CourseIntroduction from './components/courseIntroduction';
import CourseCard from './components/courseCard';
import { BaseComponent } from '../../../components/BaseComponent';




export class CourseDetail extends BaseComponent {

    constructor(props) {
        super(props);
        this.state = {
            courseId: this.props.location.courseId,
            course: null,
            loading: true,
        };
    }

    componentWillMount = () => {

        if (this.state.courseId === undefined) {
            this.props.history.push("/courseList");
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
                this.pushNotification("danger", result.description, this.props.dispatch);

            } else if (result.status === 'success') {

                this.setState({ course: result.detail, loading: false })
                this.pushNotification("success", "successfully fetch the course", this.props.dispatch);

            } else {

                this.pushNotification("danger", "unknown error", this.props.dispatch);
            }

        })
    }


    render() {

        const {courseId} = this.state;

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

                    <CourseCard course={this.state.course}/>

                    <CourseIntroduction course={this.state.course}/>

                    <CourseComments courseId={courseId}/>

                </Grid>

                <Grid xs={3} item>

                    <Card>
                        <Button
                            style={styles.button}
                            color="primary"
                        >Create Section</Button>
                    </Card>
                    
                    <ProfessorCard courseId={courseId}/>

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
