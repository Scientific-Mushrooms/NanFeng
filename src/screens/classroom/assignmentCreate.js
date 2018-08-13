import React from 'react';
import { Row, Col, Input, Button, Icon, Form, Upload, Avatar } from 'antd';
import { BaseComponent } from '../../components/BaseComponent';
import {FormButton, FormText, FormAvatar, FormSelector, FormDate} from '../../components';


export class AssignmentCreate extends BaseComponent {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            task: null,
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }

            let form = new FormData();
            form.append('instructorId', this.props.instructor.instructorId);
            form.append('avatar', values.avatar);
            form.append('name', values.name);
            form.append('code', values.password);

            var successAction = (result) => {
                this.props.history.goBack();
                this.pushNotification("success", "successfully create the classroom");
            }

            this.newPost('/api/classroom/create', form, successAction);

        });
    }

    renderTask = () => {

        if (this.state.task === null) {
            return null;
        }

        if (this.state.task === 'discussion') {
            return (
                <Row>
                    <FormText form={this.props.form} label='Topic' name='name' required={true} />
                </Row>
            )
        }

        if (this.state.task === 'quiz') {
            return (
                <Row>
                    11111
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


