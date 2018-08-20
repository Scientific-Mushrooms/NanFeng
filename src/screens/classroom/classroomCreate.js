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
            form.append('name', values.name);
            form.append('code', values.password);

            var successAction = (result) => {
                this.props.history.push("/classroom/classroomPanel/" + result.detail.classroomId);
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

                        <FormText form={this.props.form} label='Classroom Name' name='name' required={true} />

                        <FormText form={this.props.form} label='Classroom Code' name='code' required={true} />

                        {/* <FormText form={this.props.form} label='E-mail' name='email' type='email' required={true}/> */}

                        <FormAvatar form={this.props.form}/>

                        <FormSelector form={this.props.form} options={[1, 2, 3]} label='time' name='time'/>

                        <FormButton form={this.props.form} label="submit" />

                    </Form>
                </Col>
            </Row>
        );
    }
}


