import React, { Component } from 'react';
import { Row, Col, Input, Button, Icon, Form, Upload, Avatar } from 'antd';
const FormItem = Form.Item;


export default class FormButton extends Component {
    state = {  }

    hasErrors(fieldsError) {
        return Object.keys(fieldsError).some(field => fieldsError[field]);
    }

    render() {

        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

        return (
            <FormItem>
                <Button type="primary" htmlType="submit" disabled={this.hasErrors(getFieldsError())}>
                    {this.props.label}
                </Button>
            </FormItem>
        );
    }
}