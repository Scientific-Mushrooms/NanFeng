import React from 'react';
import {FormButton, FormText} from '../../components';
import Grid from '@material-ui/core/Grid';
import { login } from '../../redux/actions/action';
import { BaseComponent } from '../../components/BaseComponent';
import NjuImg from './src/nju.png';
import {Button, Card,Row, Col, Form,Divider} from 'antd'

const homeImage = {
    marginTop:40,
    display:'inline-blocks',
    height:700,
    width:1200,
    backgroundImage: 'url('+NjuImg+')',
    borderRadius:20,
}

export class SignUp extends BaseComponent {
	
    constructor(props) {
        super(props);
        this.state = {
            register: false,
            email: '',
            password: '',
            repassword:'',
        };
    }

	onMouseEnter(){
        this.setState({
            hover: true,
        });
    }

    onMouseLeave(){
        this.setState({
            hover: false,
        })
    }
	
    goBack = () => {
        this.props.history.goBack();
    }

    signIn = () => {
        this.props.history.push({ pathname: "/signin" })
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    signUp = () =>{

        if (this.state.email === '' ) {
            this.pushNotification("danger","Username Can't Be Empty",this.props.dispatch);

        } else if(this.state.password === ''){
            this.pushNotification("danger","Password Can't Be Empty",this.props.dispatch);

        }else if (this.state.password !== this.state.repassword) {
            this.pushNotification("danger","Wrong Repassword",this.props.dispatch);

        } else {
            let form = new FormData();
            form.append("email", this.state.email);
            form.append("password", this.state.password);

            this.post('/api/user/create', form).then((result) => {

                if (!result) {
                    this.pushNotification("danger","Connection To Server Failed",this.props.dispatch);

                } else if (result.status === 'fail') {
                        this.pushNotification("danger",result.description,this.props.dispatch);

                } else if (result.status === 'success') {

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
                    this.props.history.push('home')
                    this.pushNotification("normal","Regist Succeeded",this.props.dispatch);
                    
                } else {
                    this.pushNotification("danger", result.status, this.props.dispatch);
                }
                
            })
        }
    }

    render(){
        return(
            <Row type='flex' justify="center">
                <Col>
                    <Row type='flex' justify='center' align="middle" style={styles.homeImage}>
                        <Col>
                            <Card style={styles.cardContainer}>
                                <Grid direction='row' container>
                                    <img style={styles.logo} src={require('./src/logo-color.png')}/>
                                    <Grid>
                                        <div style={styles.welcome}>欢迎来到南风!</div>
                                        <div style={styles.welcome2}>加入我们</div>
                                    </Grid>
                                </Grid>
                                <Form onSubmit={this.handleSubmit} type='flex' justify='center'>
                                    <FormText form={this.props.form}
                                              label='邮箱' name='email' required={true} icon="user"/>
                                    <FormText form={this.props.form}
                                              label='密码' name='password' required={true} icon="lock"
                                              inputType="password"/>
                                    <FormText form={this.props.form}
                                              label='确认' name='passwordVerify' required={true} icon="lock"
                                              inputType="password"/>
                                    <Row type='flex' justify='center'>
                                        <Col>
                                            <FormButton form={this.props.form} label="注册" style={styles.formButton}/>
                                            <Button style={styles.button} onClick={this.goBack}>
                                                返回
                                            </Button>
                                        </Col>
                                    </Row>
                                <Divider/>
                                </Form>
                                <Row type='flex' justify='center'>
                                    <Col>
                                        <html><body>
                                        已有账号? <a href="http://localhost:3000/#/signIn">去登录!</a>
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



const styles = {
    homeImage:{
        display:'inline-blocks',
        height:700,
        width:1200,
        borderRadius:20,
    },
    cardContainer:{
        width:'600px',
        opacity:'1',
    },
    logo: {
        marginLeft:40,
        marginTop:5,
        height:'50px',
        width:'90px'
    },
    formButton:{
        width:'400px',
    },
    policy:{
        fontsize:15,
        color:'#AAAAAA',
        marginTop:'0px',
    },
    policy_button:{
        fontsize:15,
        color:'#3D91F7',
        borderColor:'#3D91F7',
        marginTop:'10px',
    },
    welcome:{
        fontSize:25,
        marginLeft: '10px',
        marginRight: '10px',
        marginBottom: '3px',
    },
    welcome2:{
        fontSize:17,
        color:'#AAAAAA',
        marginLeft: '10px',
        marginRight: '10px',
    },
    button: {
        width:'400px',
        backgroundColor:'',
        color:'white',
        backgroundColor: '#CCCCCC',
    },
    button2: {
        color:'white',
        width: '100%',
        marginTop: '10px',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        backgroundColor: '#3D91F7',    
        marginBottom: 30,
    },
    button3:{
        color:'white',
        width: '100%',
        marginTop: '10px',
        marginBottom:'0px',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        backgroundColor: '#CCCCCC',    
        marginBottom: 30,
    },
    wrapper: {
        opacity: 1,
    },
	
    container: {
        width: '400px',
        height: '400px',
        marginTop: '500px',
        justifyContent: 'center',
        alignItems: 'center',
    },

    textField: {
        marginLeft: '10px',
        marginRight: '10px',

    },

    modalContainer: {
        textAlign: 'center',
        justifyContent: 'center',
    },

    cardTitleWhite:{
       fontFamily: 'Righteous',
        margin:'0px'
    },

    avatar:{
      width: 100,
      height: 100,
      border: "5px solid yellow",
    },

    cardHead:{
      display: "flex",
      justifyContent: "center",
    }
};
