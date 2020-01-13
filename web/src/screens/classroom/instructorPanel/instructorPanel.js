import React, { Component } from 'react';
import {Row, Col, Button,Divider} from 'antd';
import ClassroomList from './components/classroomList';
import AssignmentList from './components/assignmentList';

export class InsturctorPanel extends Component {
    state = {  }
    render() {
        return (
            <Row type='flex' justify='center' style={styles.container}>
                <Col span={24} type='flex' justify='center'>
                    <Row align='bottom' type='flex'>
                        <Divider orientation="left">
                        <Col span={8} align='bottom' style={styles.title}>我的课堂</Col>
                        </Divider>
                            <Button type='primary' icon='plus-square' size={20} onClick={() => { this.props.history.push('/classroom/classroomCreate') }}>Create</Button>
                    </Row>
                </Col>
            </Row>
        );
    }
}

const styles = {

    container: {
        marginTop: '20px',
    },

    title: {
        fontSize: '23px'
    }


}
