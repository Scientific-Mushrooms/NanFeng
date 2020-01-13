import React, { Component } from 'react';
import { Button, Form, Select, Input, DatePicker } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

export class FormDate extends Component {

    state = {}

    renderOption = (option) => {
        return (
            <Option value={option}>{option}</Option>
        )
    }

    render() {

        const { options, label, name, required } = this.props;

        const { getFieldDecorator } = this.props.form;
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
        const config = {
        rules: [{ type: 'object', required: required, message: 'Please select time!' }],
        };


        return (
            <FormItem {...formItemLayout} label={label} >
                {getFieldDecorator(name, config)(
                    <DatePicker />
                )}
            </FormItem>
        );
    }
}