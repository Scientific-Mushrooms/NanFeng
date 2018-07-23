import React, { Component } from "react";
import {
    Divider,
    Grid,
    Button, ExpansionPanel, ExpansionPanelSummary,
    ExpansionPanelDetails, Typography, Icon, Card, LinearProgress
} from '@material-ui/core';
var moment = require('moment');

const courseComments = [

    {
        userId: '233sdsgsdg',
        userName: "clavier",
        userProgram: "Computer Science",
        userAvatar: './src/test.png',
        content: "really easy",
        userful: true,
        liked: true,
        easy: true,
        date: new Date(),
    },

    {
        userId: '233sdsgsdg',
        userName: "clavier",
        userProgram: "Computer Science",
        userAvatar: './src/test.png',
        content: "really easy",
        userful: true,
        liked: true,
        easy: true,
        date: new Date(),
    }
]

export default class CourseComments extends Component {
    state = {  }

    courseCommentsToList = (comment, index) => {
        return (
            <Grid container style={styles.commentContainer}>

                <Grid xs={2} container>

                    <Grid xs={12} style={styles.avatarContaienr} container>
                        <img src={require('../src/test.png')} style={styles.userAvatar} />
                    </Grid>

                    <Grid xs={12} style={styles.textContainer} container>
                        <Typography>A {comment.commentFaculty} student</Typography>
                    </Grid>

                    <Grid xs={12} style={styles.textContainer} container>
                        <Typography>{moment(comment.date).format("MMM Do YY")}</Typography>
                    </Grid>

                </Grid>

                <Grid xs={6} style={styles.contentContainer} container>
                    <Typography>{comment.content}</Typography>
                </Grid>

                <Grid xs={4}>

                    <Grid xs={12} container>
                        <Grid xs={3}>
                            <Grid style={styles.text}>Useful?</Grid>
                        </Grid>
                        <Button>Yes</Button>
                        <Button>No</Button>
                    </Grid>

                    <Grid xs={12} container>
                        <Grid xs={3}>
                            <Grid style={styles.text}>Easy?</Grid>
                        </Grid>
                        <Button>Yes</Button>
                        <Button>No</Button>
                    </Grid>

                    <Grid xs={12} container>
                        <Grid xs={3}>
                            <Grid style={styles.text}>Like it?</Grid>
                        </Grid>
                        <Button>Yes</Button>
                        <Button>No</Button>
                    </Grid>

                </Grid>
            </Grid>
        )
    }

    render() {
        return (
            <Card  >

                <Grid container style={styles.container}>
                    <Grid xs={12}>
                        <Grid xs={7}>
                            <Button style={styles.headerContainer}>
                                <Typography style={styles.header}>Course Comments</Typography>
                            </Button>
                        </Grid>

                        {courseComments.map(this.courseCommentsToList)}
                    </Grid>
                </Grid>

            </Card>
        );
    }
}

const styles = {

    container: {
        justifyContent: 'center',
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
        height: '60px',
        width: '60px',
        borderRadius: '5px'
    },

    courseItem: {
        textAlign: 'center'
    },

    text: {
        textAlign: 'center',
        marginTop: '8px',
    },

    headerContainer: {
        fontSize: '30px',
        marginTop: '30px',
        marginBottom: '30px',
        marginLeft: '20px',
        backgroundColor: '#62d0f1'
    },

    header: {
        fontSize: '30px',
        color: '#fff'
    },

    commentContainer: {
        marginBottom: '20px',
        width:'100%',
    },

    avatarContaienr: {
        justifyContent: 'center'
    },

    textContainer: {
        marginTop: '5px',
        justifyContent: 'center',
    },

    contentContainer: {
        backgroundColor: '#caf6ff',
        borderRadius: '5px',
    },


}
