import React, { Component } from 'react';
import BaseComponent from '../../../components/BaseComponent';
import ClassroomInfo from './components/classroomInfo';
import MemberList from './components/memberList';

import {Row, Col, Card, AutoComplete, Button} from 'antd'
export class ClassroomPanel extends BaseComponent {
    
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            classroom: null,
            classroomId: this.props.match.params.classroomId,
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

    fetchClassroom = (classroomId) => {

        let form = new FormData();
        form.append("classroomId", classroomId);

        var successAction = (result) => {
            this.pushNotification("success", "fetch classroom");
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
                            <MemberList/>
                        </Card>
                    </Row>
                </Col>
            </Row>
        );
    }
}

const styles = {

    container: {
        marginTop: '20px'
    }

}