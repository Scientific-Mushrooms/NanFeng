import React, { Component } from "react";
import { BaseComponent } from '../../../../components/BaseComponent';
import { Divider, Grid, Button, Typography, Icon, TextField, Popover } from '@material-ui/core';
import { FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Row, Col,Card} from 'antd';

class ChangePassword extends BaseComponent {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            instructor: null,
            userId: null,


            realName: null,
            instructorCode: null,
            studentCode: null,
        };
    }

    renderPassInput = (name, variable) => {
        return (
            <Row style={styles.inputContainer} type='flex' justify='center'>
                <Col span={4}>
                    <Typography style={styles.typography}>{name} :</Typography>
                </Col>
                <Col span={6}>
                    <FormControl style={{width:'100%'}}  type="password" onChange={this.handleChange(variable)} />
                </Col>
            </Row>
        )
    }

    renderPassWarning = () => {
        if (this.state.passChange == true && this.state.reNewPass != this.state.newPass)
            return (
                <Row align='middle' span={8}>
                    <Icon style={{ color: 'red' }}>warning</Icon>
                    <Typography style={styles.warning}>Repassword Wrong</Typography>
                </Row>
            )
    }

    changePass = () => {
        if (this.state.oldPass == null || this.state.newPass == null || this.state.reNewPass == null) {
            this.pushNotification("danger", "请输入密码", this.props.dispatch);
        } else if (this.state.newPass != this.state.reNewPass) {
            this.pushNotification("danger", "请输入之前的密码", this.props.dispatch);
        } else {
            //post here
        }
    }

    renderVarifyIdentity = () => {
        return (
            <Row style={styles.inputContainer} span={16}>
                <Typography style={styles.typography}>用户名:</Typography>
                <FormControl type="text" value={this.state.nickName} onChange={this.handleChange("nickName")} />
            </Row>
        )
    }

    render() {
        return (
            <Card style={styles.card}>
                <Typography style={{color:'#0078d7',fontSize:25}} variant='display2'>修改密码</Typography>
                <Divider/>
                <div style={{height:'25px'}}></div>
                    {this.renderPassInput("输入原密码", "oldPass")}
                    {this.renderPassInput("输入新密码", "newPass")}
                    <Row style={styles.inputContainer} type='flex' justify='center'>
                        <Col span={4}>
                            <Typography style={styles.typography}>再次输入密码:</Typography>
                        </Col>
                        <Col span={6}>
                            <FormControl style={{width:'100%'}}  type="password" onChange={this.handleChange("reNewPass")} />
                        </Col>
                    {this.renderPassWarning()}
                </Row>
                <Row justify='center' type='flex'>
                    <Button
                        mini
                        variant="outlined"
                        style={styles.button}
                        onClick={this.changePass}>
                        <Typography variant='button' style={styles.buttonText}>提交修改</Typography>
                    </Button>
                </Row>
            </Card>
        );
    }
}


const styles = {
    card:{
        marginBottom:'20px',
    },

    button: {
        marginTop: '20px',
        marginBottom:'20px',
        borderRadius: "5px",
        borderWidth:"1.2px",
        borderColor:'#0078d7',
        width: "20%",
        height:'40px',
    },

    buttonText:{
        fontSize:'12px',
        color:'#0078d7'
    },

    typography: {
        fontSize: '130%'
    },

    warning: {
        color: "red",
        fontSize: '130%'
    },

    container: {
        marginTop: '20px',
        marginLeft:'20px',
    },

    inputContainer: {
        marginTop: '20px',
        marginLeft:'20px',
    },

    input: {
        borderRadius: '6px'
    },

    textContainer: {
        justifyContent: 'flex-end'
    },

    introContainer: {
        height:'80px',
    },

};


const mapStateToProps = state => ({
    user: state.identityReducer.user
})


export default connect(mapStateToProps)(ChangePassword);
