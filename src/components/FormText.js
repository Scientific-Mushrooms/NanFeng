import React, { Component } from 'react';
import { Input, Form } from 'antd';
const FormItem = Form.Item;


export class FormText extends Component {

    render() {

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };

        const { getFieldDecorator } = this.props.form;


        return (
            <FormItem {...formItemLayout} label={this.props.label}>
                {getFieldDecorator(this.props.name, {
                    rules: [
                        {
                        type: this.props.type, message: 'The input is not valid ' + this.props.type,
                        }, 
                        {
                        required: this.props.required, message: 'Please input your ' + this.props.label + ' !',
                        }
                    ]
                })(
                    <Input />
                )}
            </FormItem>
        );
    }
}

FormText.defaultProps = {
    required: false,
}

