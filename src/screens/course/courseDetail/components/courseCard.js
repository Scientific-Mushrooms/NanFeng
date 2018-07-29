import React from "react";
import { BaseComponent } from '../../../../components/BaseComponent';
import { 
    Divider, 
    Grid, 
    Button, ExpansionPanel, ExpansionPanelSummary, 
    ExpansionPanelDetails, Typography, Icon, Card, LinearProgress} from '@material-ui/core';
import _ from 'lodash';



export default class CourseCard extends BaseComponent {

    constructor(props) {
        super(props);
        this.state = {
            courseComments: [],
            totalCommentNum: 0,
            usefulNum: 0,
            easyNum: 0,
            enjoy: 0,
        };

    }

    componentWillMount = () => {
        var {courseComments} = this.props;
        var totalCommentNum = this.props.courseComments.length;
        var usefulNum = _.filter(courseComments, { useful: true }).length;
        var easyNum = _.filter(courseComments, { easy: true }).length;
        var enjoyNum = _.filter(courseComments, { enjoy: true }).length;
        this.setState({
            totalCommentNum: totalCommentNum, 
            usefulNum: usefulNum, 
            easyNum: easyNum, 
            enjoyNum: enjoyNum
        })
  
    }

    renderCourseItem = (title, value) => {
        return (
            <Grid xs={12} style={styles.courseInfoContainer} container>
                <Grid xs={3}>
                    <Typography style={styles.courseInfo}>{title}</Typography>
                </Grid>
                <Grid xs={5}>
                    <Typography style={styles.courseInfo}>{value}</Typography>
                </Grid>
            </Grid>
        )
    }

    renderRating = (title, total, positive) => {
        return (
            <Grid xs={12} style={styles.ratingContainer} container>
                <Grid xs={2}>
                    <Typography style={styles.ratingText}>{title}</Typography>
                </Grid>
                <Grid xs={8}>
                    <LinearProgress color="secondary" variant="buffer" value={positive} valueBuffer={total} style={styles.rating} />
                </Grid>
                <Grid xs={2}>
                    <Typography style={styles.ratingText}>{positive / total}%</Typography>
                </Grid>
            </Grid>
        )
    }


    render() {
        const {code, name, credit, avatarId} = this.props.course;
        const {totalCommentNum, usefulNum, easyNum, enjoyNum} = this.state;
        return (
            <Card style={styles.container}>
                <Grid container style={styles.courseInfoContainer}>

                    <Grid xs={12} style={styles.padding}/>

                    <Grid xs={8} container>

                        <Grid xs={12} style={styles.courseAvatarContainer} container>
                            <img src={this.getImagePath(avatarId)} style={styles.courseAvatar} />
                        </Grid>

                        <Grid xs={12}>
                            <Typography style={styles.courseName}>{name}</Typography>
                        </Grid>

                        {this.renderRating("Useful", totalCommentNum * 100, usefulNum * 100)}

                        {this.renderRating("Easy", totalCommentNum * 100, easyNum * 100)}

                        {this.renderRating("Enjoy", totalCommentNum * 100, enjoyNum * 100)}

                    </Grid>
                    <Grid xs={4} container>

                        {this.renderCourseItem("Code:", code)}

                        {this.renderCourseItem("Type:", "math")}

                        {this.renderCourseItem("Credit:", credit)}

                        {this.renderCourseItem("Faculty:", "faculty")}
                        
                    </Grid>

                    <Grid xs={12} style={styles.padding} />

                </Grid>

            </Card>
        );
    }
}

const styles = {

    container: {
        marginBottom: '10px',
    },

    padding: {
        height: '40px'
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
        alignItems: 'center',
    },

    courseName: {
        fontSize: '30px',
        textAlign: 'center',
        marginBottom: '30px',
    },

    courseAvatar: {
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

    courseInfoContainer: {
        justifyContent: 'center',
    },

    courseInfo:{
        fontSize: '15px',
        textAlign: 'center',
        marginTop: '30px',
    },

    userAvatar: {
        height: '40px',
        width: '40px',
    },

    courseItem: {
        textAlign: 'center'
    },

    text: {
        textAlign: 'center',
    },

    ratingText: {
        textAlign: 'center',
    }

}
