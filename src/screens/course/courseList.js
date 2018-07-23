import React from "react";
import { BaseComponent } from '../../components/BaseComponent';
import { Divider, Grid, Button, CircularProgress } from '@material-ui/core';



export class CourseList extends BaseComponent {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            courses: [],
        };
    }

    componentWillMount = () => {
        this.fetchCourses()
    }

    fetchCourses = () => {

        let form = new FormData();

        this.post('/api/course/all', form).then((result) => {

            if (!result) {
                this.pushNotification("danger", "Connection error", this.props.dispatch);

            } else if (result.status === 'fail') {
                this.pushNotification("danger", result.description, this.props.dispatch);

            } else if (result.status === 'success') {

                this.setState({courses: result.detail})
                this.setState({loading: false})
                this.pushNotification("success", "successfully fetch courses", this.props.dispatch);

            } else {

                this.pushNotification("danger", "unknown error", this.props.dispatch);
            }

        })
    }

    onClickCourse = () => {
        this.props.history.push({ pathname: '/courseDetail', courseId: "KIHISDAF-ASDFIN" })
    }

    renderCourse = (course, index) => {
        return (
            <Button style={styles.card} onClick={this.onClickCourse}>

                <Grid container style={styles.courseContainer}>
                    <Grid xs={1} style={styles.courseItem}>
                        {course.code}
                    </Grid>
                    <Grid xs={3} style={styles.courseItem}>
                        {course.name}
                    </Grid>
                    <Grid xs={6} style={styles.courseItem}>
                        {course.introduction}
                    </Grid>
                </Grid>

            </Button>

        )
    }

    render() {

        if (this.state.loading) {
            return (
                <CircularProgress />
            )
        }

        return (
            <Grid container>

                <Grid xs={7}>
                    {this.state.courses.map(this.renderCourse)}
                </Grid>

                <Grid xs={1}></Grid>

                <Grid xs={4}>
                    <div style={styles.card}></div>
                    <div style={styles.card}></div>
                </Grid>

            </Grid>
        );
    }
}

const styles = {

    card: {
        width: '100%',
        borderWidth: '1.5px',
        borderColor: '#e8e8e8',
        borderStyle: 'solid',
        borderRadius: '4px',
        backgroundColor: '#fff',
        marginBottom: '20px'
    },

    courseContainer: {
        width: '100%',
        height: '80px',
        justifyContent: 'center',
        alignItems: 'center',
    },

    courseItem: {
        textAlign: 'center'
    }
}
