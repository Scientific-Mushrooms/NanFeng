import React, { Component } from 'react';
import { Button, Form, Select, Input, } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

export class FormSelector extends Component {

    state = {}

    renderOption = (option) => {
        return (
            <Option value={option} onClick={() => {this.props.setTask(option)}}>{option}</Option>
        )
    }

    render() {

        const { getFieldDecorator } = this.props.form;
        const { options, label, name, required } = this.props;

        return (
            <FormItem label={label} labelCol={{ span: 5 }} wrapperCol={{ span: 15 }}>
                {getFieldDecorator(name, {
                    rules: [{ required: required, message: 'Please select your ' + name + '!' }],
                })(
                    <Select placeholder="Select a option and change input text above">
                        {options.map(this.renderOption)}
                    </Select>
                )}
            </FormItem>
        );
    }
}