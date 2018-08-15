import React from 'react';
import { Row, Col, Input, Button, Icon, Form, Upload, Avatar } from 'antd';
import { BaseComponent } from '../../components/BaseComponent';
import {FormButton, FormText, FormAvatar, FormSelector, FormDate, FormDynamic} from '../../components';


export class AssignmentCreate extends BaseComponent {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            classroomId: this.props.match.params.classroomId,
            task: null,
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
            console.log(values.keys)

            let form = new FormData()
            form.append('classroomId', this.state.classroomId)
            form.append('instructorId', this.props.instructor.instructorId)
            form.append('name', values.name)
            form.append('deadline', values.deadline)
            form.append('type', values.type)

            if (this.state.task === 'discussion') {
                form.append('topic', values.topic)
            }

            if (this.state.task === 'quiz') {
                form.append('topic', values.topic)
            }

            if (this.state.task === null) {
                return;
            }

            var successAction = (result) => {
                this.props.history.goBack();
                console.log(result)
                this.pushNotification("success", "successfully create the assignment");
            }

            this.newPost('/api/assignment/create', form, successAction);

        });
    }

    renderTask = () => {

        if (this.state.task === null) {
            return null;
        }

        if (this.state.task === 'discussion') {
            return (
                <Row>
                    <FormText form={this.props.form} label='Topic' name='topic' required={true} />
                </Row>
            )
        }

        if (this.state.task === 'quiz') {
            return (
                <Row>
                    <FormDynamic form={this.props.form} />
                </Row>
            )
        }

        
    }

    setTask = (task) => {
        this.setState({task: task})
    }

    render() {

        return (
            <Row type='flex' justify='center'>
                <Col span={20}>
                    <Form onSubmit={this.handleSubmit}>

                        <FormText form={this.props.form} label='Assignment Name' name='name' required={true} />

                        <FormDate form={this.props.form} label='deadline' name='deadline' required={true}/>

                        <FormSelector form={this.props.form} options={['discussion', 'quiz']} label='type' name='type' setTask={this.setTask}/>

                        {this.renderTask()}

                        <FormButton form={this.props.form} label="submit" />

                    </Form>
                </Col>
            </Row>
        );
    }
}


