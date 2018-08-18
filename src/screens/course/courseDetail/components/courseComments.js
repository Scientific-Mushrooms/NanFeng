import React, { Component } from "react";
import {Icon} from 'antd'
import "antd/dist/antd.css";
import {
    Divider,
    Grid,
    Button, Typography,  Card, LinearProgress
} from '@material-ui/core';
import { FormControl } from 'react-bootstrap';
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
            useful: true,
            comment: null,
            
            commentAuthors: null,
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
                this.pushNotification("danger", result.status, this.props.dispatch);

            } else if (result.status === 'success') {

                this.setState({ courseComments: result.detail, commentAuthors: result.more })
                
                this.pushNotification("success", "successfully fetch courses", this.props.dispatch);

            } else {

                this.pushNotification("danger", result.status, this.props.dispatch);
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
        form.append('useful', useful);
        form.append('comment', comment);

        this.post('/api/courseComment/create', form).then((result) => {

            if (!result) {
                this.pushNotification("danger", "Connection error", this.props.dispatch);

            } else if (result.status === 'fail') {
                this.pushNotification("danger", result.status, this.props.dispatch);

            } else if (result.status === 'success') {

                this.fetchCourseComments();
                this.pushNotification("success", "successfully create the course", this.props.dispatch);

            } else {

                this.pushNotification("danger", result.status, this.props.dispatch);
            }

        })
    }

    courseCommentsToList = (comment, index) => {

        var {avatarId, nickName} = this.state.commentAuthors[index];

        return (
            <Grid container style={styles.commentContainer}>
                <Grid xs={2} container>

                    <Grid xs={12} style={styles.avatarContaienr} container>
                        <img src={this.getImagePath(avatarId)} style={styles.userAvatar} />
                    </Grid>

                    <Grid xs={12} style={styles.textContainer} container>
                        <Typography>{nickName}</Typography>
                    </Grid>

                    <Grid xs={12} style={styles.textContainer} container>
                        <Typography>{moment(comment.date).fromNow()}</Typography>
                    </Grid>

                </Grid>

                <Grid xs={6} style={styles.commentContainer} container>
                    <Typography style={styles.comment}>{comment.comment}</Typography>
                </Grid>

                <Grid xs={4}>

                    <Grid xs={12} container style={styles.commentOptionContainer}>
                        <Grid xs={3} alignItems='center' justify='center' container>
                            <Typography style={styles.optionTitle}>Useful ?</Typography>
                        </Grid>
                        <Grid xs={9}>
                            <Button style={comment.useful ? styles.leftButton : styles.defaultButton}>推荐</Button>
                            <Button style={comment.useful ? styles.defaultButton : styles.rightButton}>不推荐</Button>
                        </Grid>
                    </Grid>
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

                <Grid xs={11} container style={styles.textInputContainer}>
                    <FormControl componentClass="textarea" onChange={this.handleChange('comment')} multilple style={styles.textInput} rows={3} />
                </Grid>

                <Grid xs={12} container>
                    <Grid xs={3} style={{marginLeft:20}} container>
                        <Button onClick={onClickUsefulYes} style={useful ? styles.leftButton : styles.defaultButton}><Icon type="like-o" style={{marginRight:5}}/>推荐</Button>
                        <Button onClick={onClickUsefulNo} style={useful ? styles.defaultButton : styles.rightButton}><Icon type="dislike-o" style={{marginRight:5}}/>不推荐</Button>
                    </Grid>
                </Grid>

                <Grid xs={11} container style={styles.submitContainer} justify='flex-end'>
                    <Grid xs={3}>
                        <Button onClick={this.createComment} style={styles.submit} fullWidth>提交</Button>
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
                            <Typography style={styles.title}>课程评价</Typography>
                        </Grid>
                    </Grid>

                    <Grid xs={12} style={styles.border} container>
                        {this.renderCreateComment()}
                    </Grid>

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

    textInput:{
      height:"100px",
      width: '100%'
    },

    leftButton:{
        fontSize: '15px',
        backgroundColor:'#0078d7',
        color:'#FFF',
        width:'10px',
    },

    rightButton:{
        fontSize: '15px',
        backgroundColor:'#fd9d9e',
        color:'#FFF',
        width:'100px',
    },

    submitButton:{
        backgroundColor:'#0078d7',
        color:'#FFF',
        fontSize: '15px',
    },

    border:{
        marginBottom:'50px',
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
        marginBottom: '20px',
        marginLeft:'20px',
    },

    optionContainer: {
        width: '100%',
    },

    optionTitle: {
        color: '#666666',
        fontSize: '15px',
        textAlign: 'center',
    },

    defaultButton: {
        color: '#666666',
        fontSize: '10px',
        width: '10px'
    },

    submitContainer: {
        marginTop: '20px',
        marginBottom: '20px',
    },

    submit: {
        backgroundColor: '#0078d7',
        fontSize: '20px',
        color: '#fff',
    },

    commentOptionContainer: {
        marginBottom: '5px'
    },

    comment: {
        color: '#666666',
        fontSize: '15px'
    },

}

const mapStateToProps = state => ({
    user: state.identityReducer.user,
})

export default connect(mapStateToProps)(CourseComments);
