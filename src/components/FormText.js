import React, { Component } from 'react';
import { Input, Form,Icon } from 'antd';
const FormItem = Form.Item;
const { TextArea } = Input;

export class FormText extends Component {

    render() {

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 4 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 14 },
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
                    <Input style={{width:'349px'}} type={this.props.inputType} rows={this.props.rows} prefix={<Icon type={this.props.icon} />} />
                )}
            </FormItem>
        );
    }
}

FormText.defaultProps = {
    required: false,
    rows: 1,
}

