import React, {Component} from 'react';
import { Row, Col, Card,Menu,Divider} from 'antd';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { BaseComponent } from '../../../../components/BaseComponent';
import {Avatar} from '../../../../components'
import { Button } from '@material-ui/core';
import {Layout} from "antd/lib/index";
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

class ClassroomList extends BaseComponent {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            avatarUrl: null,
            classrooms: [],
        };
    }

    componentWillMount = () => {

        var instructorId = sessionStorage.getItem('instructorId');

        if (instructorId === null) {
            this.props.history.push("/home")
            return;
        }

        this.fetchClassrooms(instructorId);

    }

    fetchClassrooms = (instructorId) => {
        let form = new FormData();
        form.append("instructorId", instructorId);

        this.post('/api/classroom/instructorIdToAllClassrooms', form).then((result) => {
            console.log(result)

            if (!result) {
                this.pushNotification("danger", "连接错误", this.props.dispatch);
                return;
            }

            if (result.status === 'fail') {
                this.pushNotification("danger", result.status, this.props.dispatch);
                return;
            }

            if (result.status === 'success') {

                this.setState({classrooms: result.detail});
                this.pushNotification("success", "成功获取教室", this.props.dispatch);

            } else {

                this.pushNotification("danger", result.status, this.props.dispatch);
            }

        })
    }

    renderCard = (classroom, index) => {

        var goToClassroom = (classroomId) => () => {
            this.props.history.push('/classroomPanel/' + classroomId);
        }

        return (
            <Row style={{height:'60px',backgroundColor:'#eff5f6'}} type='flex' justify='center'>
                <Button  style={styles.test} onClick={goToClassroom(classroom.classroomId)}>
                    <div>
                        <Row style={styles.classroomTitle}>{classroom.name}</Row>
                        <Row style={styles.text}>{classroom.code}</Row>
                    </div>
                </Button>
            </Row>
        )
    }

    render() {
        return (
            <Row>
                {this.state.classrooms.map(this.renderCard)}
            </Row>
        );
    }
}

const styles = {

    text: {
        textAlign: 'center',
        fontSize:'12px',
        fontWeight:'400',
    },

    classroomTitle: {
        textAlign: 'center',
        fontSize: '14px',
        fontWeight:'500',
    },

    test: {
        width: '95%',
        height:'95%',
        backgroundColor:'#fff'
    }
}


const mapStateToProps = state => ({
    user: state.identityReducer.user,
    instructor: state.identityReducer.instructor,
    student: state.identityReducer.student,
})

export default connect(mapStateToProps)(withRouter(ClassroomList));
