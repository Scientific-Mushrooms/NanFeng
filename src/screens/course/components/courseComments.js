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
        useful: true,
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
        useful: true,
        liked: true,
        easy: true,
        date: new Date(),
    }
]

export default class CourseComments extends Component {
    state = {  }

    renderRating=(name,variable)=>{
        return(
            <Grid xs={12} container>
                <Grid xs={3}>
                    <Grid style={styles.text}>{name}?</Grid>
                </Grid>
                <Button
                    style={variable? styles.leftButton:styles.defaultButton}>Yes</Button>
                <Button
                    style={variable? styles.defaultButton:styles.leftButton}>No</Button>
            </Grid>
        )
    }

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

                    {this.renderRating("Useful",comment.useful)}

                    {this.renderRating("Easy",comment.easy)}

                    {this.renderRating("Like it",comment.liked)}

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

    defaultButton:{},

    leftButton:{
        backgroundColor:'#00c31d',
        color:'#FFF',
        marginBottom:'5px',
        marginRight:'5px',
    },

    rightButton:{
        backgroundColor:'#d31d27',
        color:'#FFF',
    },


}
