import React, { Component } from 'react';
import {Row, Col} from 'antd';
import ClassroomList from './components/classroomList';
import AssignmentList from './components/assignmentList';

export class InsturctorPanel extends Component {
    state = {  }
    render() {
        return (
            <Row type='flex' justify='center' style={styles.container}>
                <Col span={20} type='flex' justify='center'>
                    <ClassroomList/>
                    <AssignmentList/>
                </Col>
            </Row>
        );
    }
}


const styles = {

    container: {
        marginTop: '20px',
    },


}