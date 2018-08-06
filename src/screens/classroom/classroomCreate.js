import React from 'react';
import { Row, Col, Input, Button, Icon } from 'antd';
import { BaseComponent } from '../../components/BaseComponent';
import AvatarUploader from '../../components/AvatarUploader';

export class ClassroomCreate extends BaseComponent {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            avatar: null,
            avatarUrl: null,
        };

    }

    
    handleChange = (name) => (value) => {
        this.setState({ [name]: value });
    }

    create = () => {

        let form = new FormData();
        form.append('image', this.state.avatar);

        this.post('/api/image/saveImage', form).then((result) => {

            if (!result) {
                this.pushNotification("danger", "Connection error", this.props.dispatch);
                return;
            } 
            
            if (result.status === 'fail') {
                this.pushNotification("danger", result.status, this.props.dispatch);
                return;
            }
            
            if (result.status === 'success') {
                alert(JSON.stringify(result.detail))
                this.pushNotification("success", "successfully create the course", this.props.dispatch);

            } else {
                alert(JSON.stringify(result))
                this.pushNotification("danger", result.status, this.props.dispatch);
            }

        })
    }

    setAvatar = (avatar) => {
        this.setState({avatar: avatar})
    }

    render() {

        const uploadButton = (
            <div>
                <Icon type={this.state.loading ? 'loading' : 'plus'} />
                <div className="ant-upload-text">Upload</div>
            </div>
        );

        return (
            <Row type='flex' justify='center'>
                <Col span={20}>
                    <Row>
                        <Col span={4}>Classroom Name</Col>
                        <Col span={8}>
                            <Input size={40} onChange={this.handleChange('name')}/>
                        </Col>
                    </Row>

                    <Row>
                        <Col span={4}>Classroom code</Col>
                        <Col span={8}>
                            <Input size={40} onChange={this.handleChange('code')} />
                        </Col>
                    </Row>

                    <Row>
                        <Col span={4}>Classroom code</Col>
                        <Col span={8}>
                            <Button type='primary' size={64} onClick={this.create}>Create</Button>
                        </Col>
                    </Row>

                    <Row>
                        <AvatarUploader setAvatar={this.setAvatar}/>
                    </Row>

                </Col>
            </Row>
        );
    }
}