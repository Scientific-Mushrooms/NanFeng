import React, { Component } from 'react';
import {Button, Form } from 'antd';
const FormItem = Form.Item;


export class FormButton extends Component {
    state = {  }

    hasErrors(fieldsError) {
        return Object.keys(fieldsError).some(field => fieldsError[field]);
    }

    render() {

        const { getFieldsError } = this.props.form;

        return (
            <FormItem>
                <Button type="primary" htmlType="submit" 
                // disabled={this.hasErrors(getFieldsError())} 
                style={this.props.style}>
                    {this.props.label}
                </Button>
            </FormItem>
        );
    }
}
