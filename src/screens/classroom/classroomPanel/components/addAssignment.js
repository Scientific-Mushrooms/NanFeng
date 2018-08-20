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
            <Row>
                <Col span={4}>
                <Button type='primary' onClick={this.onClickCreate}><Icon type="plus" />New Assignment</Button>
                </Col>
                <Col span={18} offset={2}>
                    <Col span={6}>Name</Col>
                    <Col span={6}>Type</Col>
                    <Col span={6}>Status</Col>
                    <Col span={6}>Deadline</Col>
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
