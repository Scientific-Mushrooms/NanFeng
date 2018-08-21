import React, { Component } from 'react';
import { Row, Col, Input, Button, Upload, Icon, message, Form } from 'antd';
const FormItem = Form.Item;


export class FormAvatar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            avatarUrl: null,
        };
    }

    normFile = (e) => {
        return e.file.originFileObj;
    }

    handleUploadChange = (info) => {

        if (info.file.originFileObj === undefined) {
            return;
        }

        var objecturl = window.URL.createObjectURL(info.file.originFileObj)
        this.setState({ avatarUrl: objecturl, loading: false })

    }

    beforeUpload(file) {

        const isJPG = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJPG) {
            message.error('You can only upload JPG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('Image must smaller than 2MB!');
        }


        return isJPG && isLt2M;
    }


    render() {

        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 },
        };


        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

        const uploadButton = (
            <div>
                <Icon type={this.state.loading ? 'loading' : 'plus'} />
                <div className="ant-upload-text">上传</div>
            </div>
        );

        return (
            <FormItem {...formItemLayout} label="上传头像">
                {getFieldDecorator('avatar', {
                    valuePropName: 'file',
                    getValueFromEvent: this.normFile,
                })(
                <Upload
                    listType="picture-card"
                    showUploadList={false}
                    beforeUpload={this.beforeUpload}
                    onChange={this.handleUploadChange}
                    style={styles.container}
                    >
                    {this.state.avatarUrl ? <img src={this.state.avatarUrl} alt="avatar" /> : uploadButton}
                </Upload>
                )}
            </FormItem>
        );
    }
}

const styles = {

    container: {
        width: '128px',
        height: '128px',
    }

}