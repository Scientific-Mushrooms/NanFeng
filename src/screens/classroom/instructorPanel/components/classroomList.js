import React, {Component} from 'react';
import { Row, Col, Button, Card, Avatar} from 'antd';
import { withRouter } from 'react-router-dom';

const classroom = {
    name: 'Starcraft',
    code: 'GTX1080',
    maxStudentNum: 50,
    currentStudentNum: 30,
}

class ClassroomList extends Component {
    state = {  }

    renderCard = (classroom) => {
        return (
            <Col span={4}>
                <Card style={styles.cardContainer}>
                    <Avatar shape="square" size={200} icon="user" />
                    <Row >{classroom.name}</Row>
                    <Row >{classroom.code}</Row>
                    <Row >{classroom.currentStudentNum}/{classroom.currentStudentNum}</Row>
                </Card>
            </Col>
        )
    }
    render() {
        return (
            <Row>
                <Row align='bottom' type='flex'>
                    <Col span={8} align='bottom'>Name</Col>
                    <Col span={8}></Col>
                    <Col span={8} align='bottom'>
                        <Button type='primary' icon='plus-square' size={20} onClick={() => {this.props.history.push('/classroomCreate')}}>Create</Button>
                    </Col>
                </Row>
                <Row>
                    {this.renderCard(classroom)}
                </Row>
            </Row>
        );
    }
}

const styles = {

    cardContainer: {
        borderRadius: '5px',
    }
}

export default withRouter(ClassroomList);