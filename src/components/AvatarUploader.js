import React, { Component } from 'react';
import { Row, Col, Input, Button, Upload, Icon, message } from 'antd';

export default class AvatarUploader extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            avatar: null,
            avatarUrl: null,
        };
    }

    handleUploadChange = (info) => {

        if (info.file.originFileObj === undefined) {
            return;
        }

        var objecturl = window.URL.createObjectURL(info.file.originFileObj)
        this.props.setAvatar(info.file.originFileObj)
        this.setState({ avatar: info.file.originFileObj });
        this.setState({ avatarUrl: objecturl, loading: false })

    }

    beforeUpload(file) {

        const isJPG = file.type === 'image/jpeg';
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

        const uploadButton = (
            <div>
                <Icon type={this.state.loading ? 'loading' : 'plus'} />
                <div className="ant-upload-text">Upload</div>
            </div>
        );

        return (
            <Upload
                listType="picture-card"
                showUploadList={false}
                beforeUpload={this.beforeUpload}
                onChange={this.handleUploadChange}
                >
                {this.state.avatarUrl ? <img src={this.state.avatarUrl} alt="avatar" /> : uploadButton}
            </Upload>
        );
    }
}