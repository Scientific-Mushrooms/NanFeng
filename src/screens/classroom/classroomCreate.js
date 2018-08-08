import React from 'react';
import { Row, Col, Input, Button, Icon, Form, Upload, Avatar } from 'antd';
import { BaseComponent } from '../../components/BaseComponent';
import TextInput from '../../components/TextInput'
import AvatarUploader from '../../components/AvatarUploader'
const FormItem = Form.Item;

export class ClassroomCreate extends BaseComponent {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            avatar: null,
            avatarUrl: null,
            name: null,
            code: null,
        };

    }

    componentDidMount() {
        this.props.form.validateFields();
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }

            // let form = new FormData();
            // form.append('instructorId', this.props.instructor.instructorId);
            // form.append('avatar', values.avatar[0].originFileObj);
            // form.append('name', values.userName);
            // form.append('code', values.password);

            // this.post('/api/classroom/create', form).then((result) => {
             
            //     if (!result) {
            //         this.pushNotification("danger", "Connection error", this.props.dispatch);
            //         return;
            //     } 

            //     if (result.status === 'fail') {
            //         this.pushNotification("danger", result.detail, this.props.dispatch);
            //         return;
            //     }

            //     if (result.status === 'success') {

            //         this.props.history.goBack();
            //         this.pushNotification("success", "successfully create the classroom", this.props.dispatch);

            //     } else {
            //         alert(JSON.stringify(result))
            //         this.pushNotification("danger", result.status, this.props.dispatch);
            //     }

            // })

            console.log(values)
        });
    }

    handleChange = (name) => (value) => {
        console.log(value);
        this.setState({ [name]: value });
    }

    normFile = (e) => {

        console.log(e.file.originFileObj);
        return e.file.originFileObj;
    }

    setAvatar = (avatar) => {
        this.setState({avatar: avatar})
    }

    handleUploadChange = (info) => {

        if (info.file.originFileObj === undefined) {
            return;
        }

        var objecturl = window.URL.createObjectURL(info.file.originFileObj)
        this.setState({ avatar: info.file.originFileObj });
        this.setState({ avatarUrl: objecturl, loading: false })

    }

    render() {
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 },
        };

        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

        // Only show error after a field is touched.
        const userNameError = isFieldTouched('userName') && getFieldError('userName');
        const passwordError = isFieldTouched('password') && getFieldError('password');

        const uploadButton = (
            <div>
                <Icon type={this.state.loading ? 'loading' : 'plus'} />
                <div className="ant-upload-text">Upload</div>
            </div>
        );

        return (
            <Row type='flex' justify='center'>
                <Col span={20}>
                    <Form onSubmit={this.handleSubmit}>

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
                            <Col span={8}>
                                <Button type='primary' size={64} onClick={this.create}>Create</Button>
                            </Col>
                        </Row>
                        <TextInput form={this.props.form} label='E-mail' name='email' type='email' required='true'/>


                    
                        <FormItem
                            validateStatus={userNameError ? 'error' : ''}
                            help={userNameError || ''}
                        >
                            {getFieldDecorator('userName', { rules: [{ required: true, message: 'Please input your username!' }]})(
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                            )}
                        </FormItem>
                        <FormItem
                            validateStatus={passwordError ? 'error' : ''}
                            help={passwordError || ''}
                        >
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Please input your Password!' }],
                            })(
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                            )}
                        </FormItem>

                        <AvatarUploader form={this.props.form}/>

                        <FormItem>
                            <Button type="primary" htmlType="submit" disabled={this.hasErrors(getFieldsError())}>
                                Log in
                            </Button>
                        </FormItem>

                    </Form>
                </Col>
            </Row>
        );
    }
}


