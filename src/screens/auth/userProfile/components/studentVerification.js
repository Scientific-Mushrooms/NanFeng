import React from "react";
import { BaseComponent } from '../../../../components/BaseComponent';
import { Grid, Button, Typography,Divider } from '@material-ui/core';
import { FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';
import {set_instructor, set_student} from '../../../../redux/actions/action';
import { Row, Col, Card} from 'antd';

class StudentVerification extends BaseComponent {

    constructor(props) {
        super(props);
        this.state = {
            update: false,
            realName: null,
            code: null,
        };
    }

    create = () => {

        let form = new FormData();
        form.append("userId", this.props.user.userId);
        form.append("code", this.state.code);
        form.append("realName", this.state.realName);

        var successAction = (result) => {
            this.setState({ student: result.detail })
            this.pushNotification("success", "学生认证成功", this.props.dispatch);
        }

        this.newPost('/api/student/create', form, successAction);
    }

    submit = () => {
        
        let form = new FormData();
        form.append("studentId", this.props.student.studentId);
        form.append("code", this.state.code);
        form.append("realName", this.state.realName);

        var successAction = (result) => {
            this.props.dispatch(set_student(result.detail))
            this.setState({ update: false })
            this.pushNotification("success", "成功更新显示信息", this.props.dispatch);
        }

        this.newPost('/api/student/updateByStudentId', form, successAction);
    }

    update = () => {
        this.setState({ update: true })
    }


    render() {

        if (this.props.student === null) {
            return (
                <Card style={styles.card}>
                    <Typography style={{color:'#0078d7',fontSize:25}} variant='display2'>学生认证</Typography>
                    <Divider/>
                    <Row style={styles.container} type='flex' justify='center'>
                        <Col xs={3}>
                            <Typography style={styles.typography}>真实姓名:</Typography>
                        </Col>
                        <Col xs={6}>
                            <FormControl style={{width:'100%'}} type="text" value={this.state.realName} onChange={this.handleChange("realName")} />
                        </Col>
                    </Row>

                    <Row style={styles.container} type='flex' justify='center'>
                        <Col xs={3}>
                            <Typography style={styles.typography}>学号:</Typography>
                        </Col>
                        <Col xs={6}>
                            <FormControl style={{width:'100%'}} type="text" value={this.state.code} onChange={this.handleChange("code")} />
                        </Col>
                    </Row>

                    <Row type='flex' justify='center'>
                        <Button mini style={styles.button} variant="outlined" onClick={this.create} >
                            <Typography variant='button' style={styles.buttonText}>提交</Typography>
                        </Button>
                    </Row>

                </Card>
            )
        }

        if (this.state.update) {
            return (
                <Card style={styles.card}>

                    <Row style={styles.container} type='flex' justify='center'>
                        <Col xs={3}>
                            <Typography style={styles.typography}>真实姓名:</Typography>
                        </Col>
                        <Col xs={6}>
                            <FormControl style={{width:'100%'}} type="text" value={this.state.realName} onChange={this.handleChange("realName")} />
                        </Col>
                    </Row>

                    <Row style={styles.container} type='flex' justify='center'>
                        <Col xs={3}>
                            <Typography style={styles.typography}>学号:</Typography>
                        </Col>
                        <Col xs={6}>
                            <FormControl style={{width:'100%'}} type="text" value={this.state.code} onChange={this.handleChange("code")} />
                        </Col>
                    </Row>

                    <Row type='flex' justify='center'>
                        <Button mini style={styles.button} variant="outlined" onClick={this.submit} >
                            <Typography variant='button' style={styles.buttonText}>提交</Typography>
                        </Button>
                    </Row>

                </Card>
            )
        }

        return (
            <Card>

                <Row type='flex' justify='center'>
                    <Typography style={styles.name}>{this.props.student.realName}</Typography>
                </Row>

                <Row type='flex' justify='center'>
                    <Typography style={styles.code}>{this.props.student.code}</Typography>
                </Row>

                <Row type='flex' justify='center'>
                    <Typography style={styles.instructor}>Verified Student</Typography>
                </Row>

                <Row type='flex' justify='center'>
                    <Button mini style={styles.button} variant="outlined" onClick={this.update} >
                        <Typography variant='button' style={styles.buttonText}>更新</Typography>
                    </Button>
                </Row>

            </Card>
        )
    }

}


const styles = {
    card:{
        marginBottom:'20px',
    },

    button: {
        marginTop: '20px',
        marginBottom: '10px',
        borderRadius: "5px",
        borderWidth: "1.2px",
        borderColor: '#0078d7',
        width: "20%",
        height:'40px',
    },

    buttonText: {
        fontSize: '12px',
        color: '#0078d7'
    },

    container: {
        marginTop: '20px',
    },

    typography: {
        fontSize: '130%'
    },

    name: {
        fontSize: '130%',
        color: '#404040',
    },

    code: {
        fontSize: '130%',
    },

    instructor: {
        fontSize: '130%',
        color: '#5DB95D',
    }

};


const mapStateToProps = state => ({
    user: state.identityReducer.user,
    instructor: state.identityReducer.instructor,
    student: state.identityReducer.student,
})


export default connect(mapStateToProps)(StudentVerification);
