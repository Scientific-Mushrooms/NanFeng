import React from 'react';
import { Row, Col, Input, Button, Icon, Form, Upload, Avatar } from 'antd';
import { BaseComponent } from '../../components/BaseComponent';
import {FormButton, FormText, FormAvatar, FormSelector} from '../../components';


export class ClassroomCreate extends BaseComponent {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            avatarUrl: null,
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
            form.append('name', values.userName);
            form.append('code', values.password);

            var successAction = (result) => {
                this.props.history.goBack();
                this.pushNotification("success", "successfully create the classroom");
            }

            this.newPost('/api/classroom/create', form, successAction);

        });
    }

    render() {

        return (
            <Row type='flex' justify='center'>
                <Col span={20}>
                    <Form onSubmit={this.handleSubmit}>

                        <FormText form={this.props.form} label='E-mail' name='email' type='email' required={true}/>

                        <FormText form={this.props.form} label='Username' name='username' required={true} />

                        <FormAvatar form={this.props.form}/>

                        <FormButton form={this.props.form} label="submit" />

                        <FormSelector form={this.props.form} options={[1, 2, 3]} label='time' name='time'/>

                    </Form>
                </Col>
            </Row>
        );
    }
}


