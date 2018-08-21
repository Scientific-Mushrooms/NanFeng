import React from 'react';
import { Row, Col, Input, Button, Icon, Form, Upload, Avatar,AutoComplete,Divider} from 'antd';
import { BaseComponent } from '../../components/BaseComponent';
import {FormButton, FormText, FormAvatar, FormSelector} from '../../components';
const Option = AutoComplete.Option;

export class ClassroomCreate extends BaseComponent {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            avatarUrl: null,
            selectedStudentId: null,
            realNameDataSource: [],
        };
    }

    fetchRealNameDataSource = (realName) => {

        let form = new FormData();
        form.append('realName', realName);

        var successAction = (result) => {
            console.log(result)
            this.setState({realNameDataSource: result.detail});
        }

        this.newPost('/api/student/searchByRealName', form, successAction);

    }

    realNameOnChange = (value) => {
        this.fetchRealNameDataSource(value);
    }

    renderRealNameDataSource = (student, index) => {
        return (
            <Option key={student.studentId} realName={student.realName} onClick={() => {this.setState({selectedStudentId: student.studentId})}}>
                <a target="_blank" rel="noopener noreferrer">
                    {student.realName}
                </a>
                <span className="global-search-item-count">约 个结果</span>
            </Option>
        )
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }

            let form = new FormData();
            form.append('instructorId', this.props.instructor.instructorId);
            form.append('avatar', values.avatar);
            form.append('name', values.name);
            form.append('code', values.password);

            var successAction = (result) => {
                this.props.history.push("/classroom/classroomPanel/" + result.detail.classroomId);
                this.pushNotification("success", "successfully create the classroom");
            }

            this.newPost('/api/classroom/create', form, successAction);

        });
    }

    render() {

        return (

            <Row type='flex' justify='center'>
                <Col>

                    <Divider orientation="left"><Row style={styles.title}>新建课堂</Row></Divider>

                    <Form onSubmit={this.handleSubmit}>

                        <FormText form={this.props.form} label='课堂名称' name='name' required={true} />

                        <FormText form={this.props.form} label='课堂代码' name='code' required={true} />

                        {/* <FormText form={this.props.form} label='E-mail' name='email' type='email' required={true}/> */}

                        <Row>

                            <Col span={12}>
                                <br></br>
                            <Row>
                                <Col offset={5}>
                                <AutoComplete
                            optionLabelProp="realName"
                            dataSource={this.state.realNameDataSource.map(this.renderRealNameDataSource)}
                            onChange={this.realNameOnChange}
                            style={{width:310}}
                            placeholder="添加学生"/>
                                <Button type='default'><Icon type='plus'/></Button>
                                </Col>
                            </Row>
                                <br></br>
                                <Row>
                                    <Col offset={2}>
                                <FormSelector form={this.props.form} options={[1, 2, 3]} label='时间' name='time'/>
                                    </Col>
                                </Row>
                            </Col>

                            <Col span={6}>
                                <FormAvatar form={this.props.form}/>
                            </Col>

                        </Row>

                        <br></br>
                        <Row>
                            <Col offset={9}>
                        <FormButton form={this.props.form} label="确认" />
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
        );
    }
}

const styles = {

    title:{
        fontSize:'20px'
    }

}


