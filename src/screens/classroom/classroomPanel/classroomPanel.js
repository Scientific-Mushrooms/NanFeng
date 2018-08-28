import React, { Component } from 'react';
import BaseComponent from '../../../components/BaseComponent';
import ClassroomInfo from './components/classroomInfo';
import MemberList from './components/memberList';
import AddStudent from './components/addStudennt';
import AssignmentList from './components/assignmentList';

import {Row, Col, Card, AutoComplete, Button,Icon} from 'antd'
import AddAssignment from './components/addAssignment';

const Option = AutoComplete.Option;



export class ClassroomPanel extends BaseComponent {
    
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            classroom: null,
            classroomId: this.props.match.params.classroomId,
            realNameDataSource: [],
        };
    }

    componentWillMount = () => {

        var instructorId = sessionStorage.getItem('instructorId');
        
        if (instructorId === null) {
            this.props.history.push("/home")
            return;
        }

        this.fetchClassroom(this.state.classroomId);

    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }

            let form = new FormData();
            form.append("classroomId", this.state.classroomId);

            var successAction = (result) => {
                this.props.history.goBack();
                this.pushNotification("success", "成功删除教室");
            }

            this.newPost('/api/classroom/deleteByClassroomId', form, successAction);

        });
    }

    fetchClassroom = (classroomId) => {

        let form = new FormData();
        form.append("classroomId", classroomId);

        var successAction = (result) => {
            this.pushNotification("success", "获取教室");
            this.setState({classroom: result.detail});
        }

        this.newPost("/api/classroom/classroomIdToClassroom", form, successAction)
    }


    render() {
        return (
            <Row type="flex" justify="center">
                <Col span={20} style={styles.container}>
                    <ClassroomInfo classroom={this.state.classroom}/>

                    <Row>
                        <Card>
                            <AddStudent classroomId={this.state.classroomId}/>
                            <MemberList classroomId={this.state.classroomId}/>
                        </Card>
                    </Row>

                    <Row>
                        <Card>
                            <AddAssignment classroomId={this.state.classroomId}/>
                            <AssignmentList classroomId={this.state.classroomId}/>
                        </Card>
                    </Row>

                    <br></br>
                    <Row type='flex' justify='end'>
                        <Button onClick={this.handleSubmit} style={styles.button}>
                            <Icon type="minus" />删除此课堂
                        </Button>
                    </Row>
                    <br></br>
                </Col>
            </Row>
        );
    }
}

const styles = {

    container: {
        marginTop: '20px'
    },

    button:{
        backgroundColor:'#ff0000',
        color:'#fff'
    },

}
