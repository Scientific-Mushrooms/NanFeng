import React from 'react';
import {withRouter} from "react-router-dom";
import { login, set_instructor } from '../../redux/actions/action';
import { Row, Col, Input, Button, Icon, Form, Upload, Avatar,Card } from 'antd';
import { BaseComponent } from '../../components/BaseComponent';
import {FormButton, FormText, FormAvatar, FormSelector} from '../../components';
import NjuImg from './src/nju.png';

export class SignIn extends BaseComponent {

    constructor(props) {
        super(props);
        this.state={
            isenter:false
        }
    }

    MouseEnter() {
        setTimeout(() => {
            this.setState({
                isenter: true
            })
        }, 0)
    }

    MouseLeave() {
        setTimeout(() => {
            this.setState({
                isenter: false
            })
        }, 0)
    }

    goBack = () => {
        this.props.history.goBack();
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (values.email === '' ) {
                this.pushNotification("danger","Username Can't Be Empty",this.props.dispatch);
                return;
            }
            if(values.password === ''){
                this.pushNotification("danger","Password Can't Be Empty",this.props.dispatch);
                return;
            }
            if (!err) {
                console.log("hey");
                console.log('Received values of form: ', values);
            }

            let form = new FormData();
            form.append('email', values.email);
            form.append('password', values.password);

            var successAction = (result) => {
                if (result.detail !== null) {
                    sessionStorage.setItem('userId', result.detail.userId);
                }
                if (result.more !== null) {
                    sessionStorage.setItem("instructorId", result.more.instructorId);
                }
                if (result.extra !== null) {
                    sessionStorage.setItem("studentId", result.extra.studentId);
                }
                
                this.props.dispatch(login(result.detail, result.more, result.extra));

                this.props.history.push("/home");
                this.pushNotification("success", "successfully log in! ");
            }

            this.newPost('/api/security/signIn', form, successAction);

        });
    }

    render() {
        const isenter = this.state.isenter
        return (
            <Row type='flex' justify="center">
                <Col>
                    <Row type='flex' justify='center' align="middle" style={styles.homeImage}>
                        <Col>
                            <Card
                                style={styles.cardContainer}>
                                <div style={styles.welcome}>欢迎使用南风!</div>
                                <div style={styles.welcome2}>登录</div>
                                <Form onSubmit={this.handleSubmit} type='flex' justify='center'>

                                    <FormText form={this.props.form}
                                              label='邮箱' name='email' required={true} icon="user"/>

                                    <FormText form={this.props.form}
                                              label='密码' name='password' required={true} icon="lock"
                                              inputType="password"/>

                                    <Row type='flex' justify='center'>
                                        <Col>
                                            <FormButton form={this.props.form} label="登录" style={styles.formButton}/>
                                            <Button style={styles.button} onClick={this.goBack}>
                                                返回
                                            </Button>
                                        </Col>
                                    </Row>

                                </Form>

                                <Row type='flex' justify='center'>
                                    <Col>
                                        <html><body>
                                        没有账号? <a href="http://localhost:3000/#/signUp">快速注册!</a>
                                        </body></html>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }

}



const styles={

    homeImage:{
        display:'inline-blocks',
        height:700,
        width:1200,
        backgroundImage: 'url('+NjuImg+')',
        borderRadius:20,
    },

    cardContainer:{
        width:'600px',
        opacity:'1',
    },

    formButton:{
        width:'400px',
    },

    button:{
        width:'400px',
        backgroundColor:'',
        color:'white',
        backgroundColor: '#CCCCCC',
    },

    welcome:{
        fontSize:25,
        marginLeft: '10px',
        marginRight: '10px',
        marginBottom: '10px',
    },
    welcome2:{
        fontSize:17,
        color:'#AAAAAA',
        marginLeft: '10px',
        marginRight: '10px',
        marginBottom: '10px',
    },

};

export default withRouter(SignIn)

