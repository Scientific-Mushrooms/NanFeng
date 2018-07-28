import React, { Component } from "react";
import {
    Divider,
    Grid,
    Button, ExpansionPanel, ExpansionPanelSummary,
    ExpansionPanelDetails, Typography, Icon, Card, LinearProgress
} from '@material-ui/core';
import { FormControl, FormGroup, ControlLabel, HelpBlock, DropdownButton, MenuItem, InputGroup, Textarea } from 'react-bootstrap';
import { BaseComponent } from '../../../../components/BaseComponent';
import { connect } from 'react-redux';


var moment = require('moment');

class CourseComments extends BaseComponent {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,

            courseId: this.props.courseId,
            userId: this.props.user === null ? null : this.props.user.userId,
            enjoy: true,
            easy: true,
            useful: true,
            comment: null,



            courseComments: null,
        };
    }

    componentWillMount = () => {
        this.fetchCourseComments();
    }

    fetchCourseComments = () => {

        let form = new FormData();
        form.append('courseId', this.state.courseId);

        this.post('/api/courseComment/courseIdToCourseComments', form).then((result) => {

            if (!result) {
                this.pushNotification("danger", "Connection error", this.props.dispatch);

            } else if (result.status === 'fail') {
                this.pushNotification("danger", result.description, this.props.dispatch);

            } else if (result.status === 'success') {

                this.setState({ courseComments: result.detail, commentAuthors: result.more })
                
                this.pushNotification("success", "successfully fetch courses", this.props.dispatch);

            } else {

                this.pushNotification("danger", "unknown error", this.props.dispatch);
            }

        })
    }

    createComment = () => {

        let form = new FormData();
        var {courseId, userId, enjoy, easy, useful, comment} = this.state;
        if (userId === null) {
            alert("sign in first")
            return;
        }

        form.append("courseId", courseId);
        form.append("userId", userId);
        form.append("enjoy", enjoy);
        form.append("easy", easy);
        form.append('useful', useful);
        form.append('comment', comment);

        this.post('/api/courseComment/create', form).then((result) => {

            if (!result) {
                this.pushNotification("danger", "Connection error", this.props.dispatch);

            } else if (result.status === 'fail') {
                this.pushNotification("danger", result.description, this.props.dispatch);

            } else if (result.status === 'success') {

                this.fetchCourseComments();
                this.pushNotification("success", "successfully create the course", this.props.dispatch);

            } else {

                this.pushNotification("danger", "unknown error", this.props.dispatch);
            }

        })
    }



    renderRating=(name,variable)=>{
        return(
            <Grid xs={12} container>
                <Grid xs={3}>
                    <Grid style={styles.text}>{name}?</Grid>
                </Grid>
                <Button
                    style={variable? styles.leftButton:styles.defaultButton}>Yes</Button>
                <Button
                    style={variable? styles.defaultButton:styles.rightButton}>No</Button>
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
                        <Typography>A  student</Typography>
                    </Grid>

                    <Grid xs={12} style={styles.textContainer} container>
                        <Typography>233</Typography>
                    </Grid>

                </Grid>

                <Grid xs={6} style={styles.contentContainer} container>
                    <Typography>{comment.comment}</Typography>
                </Grid>

                <Grid xs={4}>

                    {this.renderRating("Useful",comment.useful)}

                    {this.renderRating("Easy",comment.easy)}

                    {this.renderRating("Like it",comment.liked)}

                </Grid>

            </Grid>
        )
    }

    renderUseful = () => {

        var onClickYes = () => {
            this.setState({ useful: true })
        }

        var onClickNo = () => {
            this.setState({ useful: false })
        }

        return (
            <Grid xs={4} container>
                <Grid xs={3}>
                    <Grid style={styles.text}>Useful?</Grid>
                </Grid>
                <Button style={this.state.useful ? styles.leftButton : styles.defaultButton} onClick={onClickYes}>Yes</Button>
                <Button style={this.state.useful ? styles.defaultButton : styles.rightButton} onClick={onClickNo}>No</Button>
            </Grid>
        )
    }

    renderEnjoy = () => {

        var onClickYes = () => {
            this.setState({ enjoy: true })
        }

        var onClickNo = () => {
            this.setState({ enjoy: false })
        }

        return (
            <Grid xs={4} container>
                <Grid xs={3}>
                    <Grid style={styles.text}>Enjoy?</Grid>
                </Grid>
                <Button style={this.state.enjoy ? styles.leftButton : styles.defaultButton} onClick={onClickYes}>Yes</Button>
                <Button style={this.state.enjoy ? styles.defaultButton : styles.rightButton} onClick={onClickNo}>No</Button>
            </Grid>
        )
    }

    renderEasy = () => {

        var onClickYes = () => {
            this.setState({ easy: true })
        }

        var onClickNo = () => {
            this.setState({ easy: false })
        }

        return (
            <Grid xs={4} container>
                <Grid xs={3}>
                    <Grid style={styles.text}>Easy?</Grid>
                </Grid>
                <Button style={this.state.easy ? styles.leftButton : styles.defaultButton} onClick={onClickYes}>Yes</Button>
                <Button style={this.state.easy ? styles.defaultButton : styles.rightButton} onClick={onClickNo}>No</Button>
            </Grid>
        )
    }


    renderCreateComment = () => {
        return (
            <Grid xs={12} style={styles.createComment} container>

                <Grid xs={12} container>
                    <FormControl componentClass="textarea" onChange={this.handleChange('comment')} multilple style={styles.introContainer} rows={3} />
                </Grid>

                <Grid xs={12} direction="flex" container>
                    {this.renderUseful()}
                    {this.renderEnjoy()}
                    {this.renderEasy()}
                </Grid>

            </Grid>
        )
    }

    renderComments = () => {
        if (this.state.courseComments !== null ) {
            return (
                <Grid xs={12}>
                    {this.state.courseComments.map(this.courseCommentsToList)}
                </Grid>
            )
        }
    }

    render() {
        return (
            <Card  >
                <Grid container style={styles.container}>

                    <Grid xs={12} container>
                        <Button style={styles.headerContainer}>
                            <Typography style={styles.header}>Course Comments</Typography>
                        </Button>
                    </Grid>
                    <Grid xs={12} style={styles.border} container>
                        <Grid xs={10} container>
                            {this.renderCreateComment()}
                        </Grid>

                        <Grid xs={2} container>
                            <Button onClick={this.createComment} style={styles.submitButton}>submit</Button>
                        </Grid>
                    </Grid>

                    <Divider/>

                    {this.renderComments()}

                </Grid>

            </Card>
        );
    }
}

const styles = {

    container: {
        justifyContent: 'center',
    },

    userAvatar: {
        height: '60px',
        width: '60px',
        borderRadius: '5px'
    },

    text: {
        textAlign: 'center',
        marginTop: '12px',
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

    createComment:{
      marginLeft:'20px',
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

    introContainer:{
      height:"200px",
    },

    defaultButton:{
    },

    leftButton:{
        backgroundColor:'#86be0c',//#00c31d
        color:'#FFF',
        marginTop:'5px',
    },

    rightButton:{
        backgroundColor:'#fd9d9e',//#d31d27
        color:'#FFF',
        marginTop:'5px',
    },

    submitButton:{
        height:'25%',
        width:'80%',
        backgroundColor:'#62d0f1',
        color:'#FFF',
        fontSize: '15px',
        marginLeft:'10px',
        marginTop:'180px',
    },

    border:{
        marginBottom:'50px'
    }

}

const mapStateToProps = state => ({
    user: state.identityReducer.user,
})

export default connect(mapStateToProps)(CourseComments);