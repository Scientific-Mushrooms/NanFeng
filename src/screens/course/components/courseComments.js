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
    }
]

export default class CourseComments extends Component {
    state = {  }

    courseCommentsToList = (comment, index) => {
        return (
            <Grid container>

                <Grid xs={2} container>
                    <Grid xs={12}>
                        <img src={require('../src/test.png')} style={styles.userAvatar} />
                    </Grid>
                    <Grid xs={12}>
                        <Typography>{comment.userName}</Typography>
                    </Grid>
                    <Grid xs={12}>
                        <Typography>{moment(comment.date).fromNow()}</Typography>
                    </Grid>
                </Grid>

                <Grid xs={6}>
                    {comment.content}
                </Grid>

                <Grid xs={4}>

                    <Grid xs={12} container>
                        <Grid xs={6}>
                            <Typography>Useful?</Typography>
                        </Grid>
                        <Grid xs={6}>
                            <Typography>No</Typography>
                        </Grid>
                    </Grid>

                    <Grid xs={12} container>
                        <Grid xs={6}>
                            <Typography>Useful?</Typography>
                        </Grid>
                        <Grid xs={6}>
                            <Typography>yes</Typography>
                        </Grid>
                    </Grid>

                    <Grid xs={12} container>
                        <Grid xs={6}>
                            <Typography>Easy?</Typography>
                        </Grid>
                        <Grid xs={6}>
                            <Typography>Yes</Typography>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>
        )
    }

    render() {
        return (
            <Card>
                {courseComments.map(this.courseCommentsToList)}
            </Card>
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
