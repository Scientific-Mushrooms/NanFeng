import React, { Component } from 'react';
import BaseComponent from '../../../components/BaseComponent';
import ClassroomInfo from './components/classroomInfo';
import MemberList from './components/memberList';

import {Row, Col, Card, AutoComplete, Button} from 'antd'

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

    fetchClassroom = (classroomId) => {

        let form = new FormData();
        form.append("classroomId", classroomId);

        var successAction = (result) => {
            this.pushNotification("success", "fetch classroom");
            this.setState({classroom: result.detail});
        }

        this.newPost("/api/classroom/classroomIdToClassroom", form, successAction)
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
            <Option key={index} text={student.code} onClick={() => {console.log("2333")}}>

            <a
                target="_blank"
                rel="noopener noreferrer"
            >
                {student.realName}
            </a>
            <span className="global-search-item-count">约 个结果</span>
            </Option>
        )
    }




    render() {
        return (
            <Row type="flex" justify="center">
                <Col span={20} style={styles.container}>
                    <ClassroomInfo classroom={this.state.classroom}/>

                    <Row>
                        <Card>
                            <Row>
                                <AutoComplete   style={{ width: 200 }} dataSource={this.state.realNameDataSource.map(this.renderRealNameDataSource)} onChange={this.realNameOnChange}/>
                                <Button type='default'>Add</Button>
                            </Row>
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