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
            useful: false,
            easy:false,
            enjoy:false,
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
                this.pushNotification("danger", "连接错误", this.props.dispatch);

            } else if (result.status === 'fail') {
                this.pushNotification("danger", result.status, this.props.dispatch);

            } else if (result.status === 'success') {

                this.setState({ courseComments: result.detail, commentAuthors: result.more })
                
                this.pushNotification("success", "成功获取课程", this.props.dispatch);

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
                this.pushNotification("danger", "连接错误", this.props.dispatch);

            } else if (result.status === 'fail') {
                this.pushNotification("danger", result.status, this.props.dispatch);

            } else if (result.status === 'success') {

                this.fetchCourseComments();
                this.pushNotification("success", "成功创建课程", this.props.dispatch);

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

        var onClickEasy = () => {
            this.setState({ easy: !this.state.easy })
        }

        var onClickEnjoy = () => {
            this.setState({ enjoy: !this.state.enjoy })
        }

        var onClickUseful = () => {
            this.setState({ useful: !this.state.useful })
        }

        var {enjoy, useful, easy} = this.state;

        return (
            <Grid xs={12} style={styles.createComment} container>

                <Grid xs={11} container style={styles.textInputContainer}>
                    <FormControl componentClass="textarea" onChange={this.handleChange('comment')} multilple style={styles.textInput} rows={3} />
                </Grid>

                <Grid xs={12} container>
                    <Grid xs={4} direction='row' style={{marginLeft:20}} container>
                        <Button variant="outlined" onClick={onClickUseful} style={useful ? styles.leftButton : styles.defaultButton}>课程内容实用</Button>
                        <Button variant="outlined" onClick={onClickEasy} style={easy ? styles.leftButton : styles.defaultButton}>课程难度较低</Button>
                        <Button variant="outlined" onClick={onClickEnjoy} style={enjoy ? styles.leftButton : styles.defaultButton}>推荐</Button>
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
        borderColor:'#0078d7',
        marginRight:'15px',
        color:'#0078d7',
        borderWidth:1,
    },

    defaultButton: {
        marginRight:'15px',
        fontSize: '15px',
        borderColor:'#CCCCCC',
        color:'#CCCCCC',
        borderWidth:1,
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
