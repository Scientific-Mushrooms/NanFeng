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

                    {this.renderRating("Like it",comment.enjoy)}

                </Grid>

            </Grid>
        )
    }

    renderCreateComment = () => {

        var onClickEasyYes = () => {
            this.setState({ easy: true })
        }

        var onClickEasyNo = () => {
            this.setState({ easy: false })
        }

        var onClickEnjoyYes = () => {
            this.setState({ enjoy: true })
        }

        var onClickEnjoyNo = () => {
            this.setState({ enjoy: false })
        }

        var onClickUsefulYes = () => {
            this.setState({ useful: true })
        }

        var onClickUsefulNo = () => {
            this.setState({ useful: false })
        }

        var {enjoy, useful, easy} = this.state;

        return (
            <Grid xs={12} style={styles.createComment} container>

                <Grid xs={12} container style={styles.textInputContainer}>
                    <FormControl componentClass="textarea" onChange={this.handleChange('comment')} multilple style={styles.textInput} rows={3} />
                </Grid>

                <Grid xs={12} container>

                    <Grid xs={1} container alignItems='center'>
                        <Typography style={styles.optionTitle}>Useful ?</Typography>
                    </Grid>
                    <Grid xs={3}>
                        <Button onClick={onClickUsefulYes} style={useful? styles.leftButton : styles.defaultButton}>Yes</Button>
                        <Button onClick={onClickUsefulNo} style={useful ? styles.defaultButton : styles.rightButton}>No</Button>
                    </Grid>

                    <Grid xs={1} container alignItems='center'>
                        <Typography style={styles.optionTitle}>Enjoy ?</Typography>
                    </Grid>
                    <Grid xs={3}>
                        <Button onClick={onClickEnjoyYes} style={enjoy ? styles.leftButton : styles.defaultButton}>Yes</Button>
                        <Button onClick={onClickEnjoyNo} style={enjoy ? styles.defaultButton : styles.rightButton}>No</Button>
                    </Grid>
           
                    <Grid xs={1} container alignItems='center'>
                        <Typography style={styles.optionTitle}>Easy ?</Typography>
                    </Grid>
                    <Grid xs={3}>
                        <Button onClick={onClickEasyYes} style={easy ? styles.leftButton : styles.defaultButton}>Yes</Button>
                        <Button onClick={onClickEasyNo} style={easy ? styles.defaultButton : styles.rightButton}>No</Button>
                    </Grid>
                    
                </Grid>

                <Grid xs={12} container style={styles.submitContainer} justify='flex-end'>
                    <Grid xs={3}>
                        <Button onClick={this.createComment} style={styles.submit} fullWidth>submit</Button>
                    </Grid>
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
                <Grid container style={styles.container} justify='center'>

                    <Grid xs={11} container>
                        <Grid style={styles.headerContainer}>
                            <Typography style={styles.title}>Course Comments</Typography>
                        </Grid>
                    </Grid>

                    <Grid xs={11} style={styles.border} container>
                        {this.renderCreateComment()}
                    </Grid>

                    <Divider/>

                    <Grid xs={11} style={styles.border} container>
                    {this.renderComments()}
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

    userAvatar: {
        height: '60px',
        width: '60px',
        borderRadius: '5px'
    },

    text: {
        textAlign: 'center',
        marginTop: '12px',
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

    textInput:{
      height:"100px",
      width: '100%'
    },

    leftButton:{
        fontSize: '15px',
        backgroundColor:'#86be0c',
        color:'#FFF',
        width: '50%'
    },

    rightButton:{
        fontSize: '15px',
        backgroundColor:'#fd9d9e',
        color:'#FFF',
        width: '50%'
    },

    submitButton:{
        backgroundColor:'#62d0f1',
        color:'#FFF',
        fontSize: '15px',
    },

    border:{
        marginBottom:'50px'
    },

    headerContainer: {
        marginTop: '30px',
        marginBottom: '30px',
        marginLeft: '20px',
        borderLeftWidth: '3px',
        borderLeftColor: '#66ccff',
        borderLeftStyle: 'solid'
    },

    title: {
        color: '#666666',
        fontSize: '35px',
        marginLeft: '10px'
    },

    textInputContainer: {
        marginBottom: '20px'
    },

    optionContainer: {
        width: '100%'
    },

    optionTitle: {
        color: '#666666',
        fontSize: '15px'
    },

    defaultButton: {
        color: '#666666',
        fontSize: '10px',
        width: '50%'
    },

    submitContainer: {
        marginTop: '20px',
        marginBottom: '20px'
    },

    submit: {
        backgroundColor: '#66ccff',
        fontSize: '20px',
        color: '#fff'
    }

}

const mapStateToProps = state => ({
    user: state.identityReducer.user,
})

export default connect(mapStateToProps)(CourseComments);
