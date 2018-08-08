import React from 'react';
import { Row, Col, Input, Button, Icon, Form, Upload, Avatar } from 'antd';
import { BaseComponent } from '../../components/BaseComponent';
import {FormButton, FormText, FormAvatar, FormSelector} from '../../components';


export class CourseCreate extends BaseComponent {

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
            form.append('name', values.name);
            form.append('code', values.code);
            form.append('type', values.type);
            form.append('credit', values.credit);
            form.append('avatar', values.avatar);
            form.append('campus', values.campus);
            form.append('faculty', values.faculty);
            form.append('period', values.period);
            form.append('resource', values.resource);
            form.append('reference', values.reference);
            form.append('target', values.target);
            form.append('content', values.content);
            form.append('other', values.other);

            var successAction = (result) => {
                this.props.history.goBack();
                this.pushNotification("success", "successfully create the course");
            }

            this.newPost('/api/course/create', form, successAction);

        });
    }

    render() {

        return (
            <Row type='flex' justify='center'>
                <Col span={20}>
                    <Form onSubmit={this.handleSubmit}>

                        <FormText form={this.props.form} label='Name' name='name' required={true}/>

                        <FormText form={this.props.form} label='Code' name='code' required={true} />

                        <FormText form={this.props.form} label='Type' name='type' required={true} />

                        <FormText form={this.props.form} label='Credit' name='credit' required={true} />

                        <FormText form={this.props.form} label='Campus' name='campus' required={true} />

                        <FormText form={this.props.form} label='Faculty' name='faculty' required={true} />

                        <FormText form={this.props.form} label='Period' name='period' required={true} />

                        <FormText form={this.props.form} label='Resource' name='resource' required={true} />

                        <FormText form={this.props.form} label='Reference' name='reference' required={true} />

                        <FormText form={this.props.form} label='Target' name='target' required={true} />

                        <FormText form={this.props.form} label='Content' name='content' required={true} />

                        <FormText form={this.props.form} label='Other' name='other' required={true} />

                        <FormAvatar form={this.props.form}/>

                        <FormButton form={this.props.form} label="submit" />

                    </Form>
                </Col>
            </Row>
        );
    }
}


