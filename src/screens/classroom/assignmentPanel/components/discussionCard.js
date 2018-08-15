import React from 'react';
import { Row, Col, Input, Button, Icon, Form, Upload, Card } from 'antd';
import { BaseComponent } from '../../../../components/BaseComponent';
import {FormButton, FormText, FormAvatar, FormSelector, FormDate, Avatar} from '../../../../components';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class DiscussionCard extends BaseComponent {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            discussionPosts: [],
            students: [],
        };
    }

    componentWillMount = () => {
        this.fetchDiscussionPosts(this.props.discussion.discussionId)
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }

            if (this.props.student.studentId === null) {
                this.pushNotification("danger", "need to be student first")
                return
            }

            let form = new FormData()
            form.append('studentId', this.props.student.studentId)
            form.append('discussionId', this.props.discussion.discussionId)
            form.append('content', values.content)

            var successAction = (result) => {
                console.log(result)
                this.fetchDiscussionPosts(this.props.discussion.discussionId)
            }

            this.newPost('/api/discussionPost/create', form, successAction);

        });
    }

    fetchDiscussionPosts = (discussionId) => {

        let form = new FormData()
        form.append('discussionId', discussionId)

        let successAction = (result) => {
            this.setState({discussionPosts: result.detail, students: result.more})
        }

        this.newPost('/api/discussionPost/discussionIdToAllDiscussionPosts', form, successAction)

    }

    renderDiscussionPost = (discussionPost, index) => {
        const student = this.state.students[index]

        const styles = {
            rightContainer: {
                height: '100%'
            }
        }

        return (
            <Row>
                <Card>
                    <Row>
                        <Col span={1}>
                            <Avatar src={this.studentIdToImage(student.studentId)} size={60}/>
                        </Col>
                        <Col span={3} style={styles.rightContainer}>
                            <Row>{student.realName}</Row>
                            <Row>{this.fromNow(discussionPost.date)}</Row>
                        </Col>
                    </Row>
                    <Row>{discussionPost.content}</Row>
                </Card>
            </Row>
        )
    }
    

    render() {
        return (
            <Row>

                <Row>
                    <Form onSubmit={this.handleSubmit}>
                        <FormText form={this.props.form}  name='content' required={true} rows={4}/>
                        <FormButton form={this.props.form} label="submit" />
                    </Form>
                </Row>

                <Row>
                    {this.state.discussionPosts.map(this.renderDiscussionPost)}
                </Row>
                
            </Row>
        );
    }
}

const mapStateToProps = state => ({
    user: state.identityReducer.user,
    instructor: state.identityReducer.instructor,
    student: state.identityReducer.student,
})


export default Form.create()(connect(mapStateToProps)(DiscussionCard))