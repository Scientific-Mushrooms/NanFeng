import React, { Component } from "react";
import { Divider, Grid, Button } from '@material-ui/core';


const courses = [

    {
        courseId: 'NDHSGAIKL',
        courseType: 'CS',
        courseCode: '136',
        courseName: 'Data Structure',
        courseProf: 'Dave',
        courseIntro: 'you will fail',
        startDate: new Date(),
        endDate: new Date(),
    },

    {
        courseId: 'NDHSGAIKL',
        courseCode: 'CS136',
        courseName: 'Data Structure',
        courseProf: 'Dave',
        courseIntro: 'you will fail',
        startDate: new Date(),
        endDate: new Date(),
    }
]
export class CoursePanel extends Component {

    onClickCourse = () => {
        this.props.history.push({ pathname: '/courseDetail', courseId: "KIHISDAF-ASDFIN"})  
    }

    coursesToList = (prop, key) => {
        return (
            <Button style={styles.card} onClick={this.onClickCourse}>
                    
                    <Grid container style={styles.courseContainer}>
                    <Grid xs={1} style={styles.courseItem}>
                        {prop.courseCode}
                    </Grid>
                    <Grid xs={3} style={styles.courseItem}>
                        {prop.courseName}
                    </Grid>
                    <Grid xs={2} style={styles.courseItem}>
                        {prop.courseProf}
                    </Grid>
                    <Grid xs={6} style={styles.courseItem}>
                        {prop.courseIntro}
                    </Grid>
                    </Grid>
       
                </Button>
           
        )
    }

    render() {
        return (
            <Grid container>

                <Grid xs={7}>
                    {courses.map(this.coursesToList)}
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
