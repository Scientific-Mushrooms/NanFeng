import React, { Component } from "react";
import { 
    Divider, 
    Grid, 
    Button, ExpansionPanel, ExpansionPanelSummary, 
    ExpansionPanelDetails, Typography, Icon ,
Avatar} from '@material-ui/core';



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

const course = {
    courseId: 'HISHF',
    courseName: 'CS',
    courseCode: '135',
    courseAvatar: './src/test.png',
}

export class CourseDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            courseId: this.props.location.courseId,
        };
    }

    renderCourseInfo = () => {
        return (
            <div style={styles.card}>
                <Grid container>
                    <Grid xs={8}>
                        asdfadsf
                        </Grid>
                    <Grid xs={4}>
                        asdfads
                            </Grid>
                </Grid>

            </div>
        )
    }

    courseCommentsToList = (comment, index) => {
        return (
            <Grid container>

                <Grid xs={2} container>
                    <Grid xs={12}>
                        <img src={require('./src/test.png')} style={styles.courseAvatar} />
                    </Grid>
                    <Grid xs={12}>
                        <Typography>{comment.userName}</Typography>
                    </Grid>
                    <Grid xs={12}>
                        <Typography>{JSON.stringify(comment.date)}</Typography>
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
            <Grid container>

                <Grid xs={7}>
                  
                    {this.renderCourseInfo()}

                    <div style={styles.card}>
                        <ExpansionPanel>
                            <ExpansionPanelSummary expandIcon={<Icon>expand_more_icon</Icon>}>
                                <Typography>course intro: afgdasdgda</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget.
                                </Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    </div>

                    <div style={styles.card}>
                        {courseComments.map(this.courseCommentsToList)}
                    </div>

                </Grid>

                <Grid xs={1}></Grid>

                <Grid xs={4}>
                    <div style={styles.card}>
                        professor info
                    </div>

                    <div style={styles.card}>
                        <div>Related Course Recommendation</div>
                        <div>list</div>
                    </div>
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

    courseAvatar: {
        height: '40px',
        width: '40px'
    },

    courseItem: {
        textAlign: 'center'
    },

    root: {
        width: '100%',
    },

}
