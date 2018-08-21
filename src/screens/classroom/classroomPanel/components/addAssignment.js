import React from 'react';
import {Row, Col, Card, AutoComplete, Button,Icon,Divider} from 'antd'
import { BaseComponent } from '../../../../components/BaseComponent';
import { withRouter } from 'react-router-dom';


class AddAssignment extends BaseComponent {

    constructor(props) {
        super(props);
        this.state = {
            selectedStudentId: null,
            realNameDataSource: [],
        };
    }

    onClickCreate = () => {
        this.props.history.push("/classroom/assignmentCreate/" + this.props.classroomId);
    }

    render() {

        return (
            <div>
                <Divider orientation="left">
                    <Row style={{fontSize:'18px'}}>
                        课堂作业
                    </Row>
                </Divider>
            <Row>
                <Col span={4}>
                <Button type='primary' onClick={this.onClickCreate}><Icon type="plus" />新作业</Button>
                </Col>
                <Col span={18} offset={2}>
                    <Col span={6}>作业标题</Col>
                    <Col span={6}>作业类型</Col>
                    <Col span={6}>状态</Col>
                    <Col span={6}>截止日期</Col>
                </Col>
            </Row>
            <Divider/>
            </div>
        );
    }
}

const styles = {

    cardContainer: {
        borderRadius: '5px',
    },

    text: {
        textAlign: 'center'
    },

    classroomTitle: {
        textAlign: 'center',
        fontSize: '20px'
    },

    test: {
        width: '100%',
        height: '100%',
        backgroundColor: 'transparent'
    },

}

export default withRouter(AddAssignment);
