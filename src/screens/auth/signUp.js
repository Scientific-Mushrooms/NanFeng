import React from 'react';

import {TextField,Typography} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { login } from '../../redux/actions/action';
import { BaseComponent } from '../../components/BaseComponent';
import NjuImg from './src/nju.png';
import {Button, Card} from 'antd'

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

    render() {
        return (
            <Grid 
            alignItems='center' 
            justify='center' 
            xs={12} container>
            
                <Grid style={homeImage} 
                justify='center' 
                direction='row' 
                alignItems='center' container>
                    {/*this._renderLeftPanel()*/}
                    {this._renderLoginPanel()}
                </Grid>
            </Grid>
        );
    }

    _renderLeftPanel(){
        return(
            <Grid sm={4} justify='center'  container>
            </Grid>
        );

    }

    _renderLoginPanel(){
        return(
            <Grid direction='column' sm={6} justify='center'
                  onMouseEnter = {this.onMouseEnter.bind(this)}
                  onMouseLeave = {this.onMouseLeave.bind(this)}
                  style={this.state.hover? styles.wrapper_1:styles.wrapper} container>
                <Card>
                        <Typography style={styles.welcome}>欢迎来到南风！</Typography>
                        <Typography style={styles.welcome2}>加入我们</Typography>
                    <Grid>
                        <TextField
                            id="name"
                            label="用户名"
                            style={styles.textField}
                            value={this.state.name}
                            onChange={this.handleChange('email')}
                            margin="normal"
                            fullWidth={true}
                        />
                        </Grid>
                        <Grid>
                            <TextField
                                id="password-input"
                                label="密码"
                                style={styles.textField}
                                type="password"
                                autoComplete="current-password"
                                onChange={this.handleChange('password')}
                                margin="normal"
                                fullWidth={true}
                            />
                        </Grid>
                        <Grid>
                            <TextField
                                id="password-verify"
                                label="确认密码"
                                style={styles.textField}
                                type="password"
                                autoComplete="current-password"
                                onChange={this.handleChange('repassword')}
                                margin="normal"
                                fullWidth={true}
                            />
                        </Grid>
                        <Grid >
                            <Button
                                size="large"
                                style={styles.button}
                                color='primary'
                                onClick={this.signUp}
                                >注册</Button>
                        </Grid>
                        <Grid xs={12}>
                            <Button
                            size="large"
                            style={styles.button2}
                            color='primary'
                            onClick={this.signIn}
                            >已有账号，去登录</Button>
                            <Button style={styles.button3} onClick={this.goBack}>返回</Button>
                        </Grid>
                        <Grid alignItems='center' direction='column' container>
                            <Typography style={styles.policy}>我已阅读并接受</Typography>
                            <Button style={styles.policy_button}>服务与隐私条款</Button>
                        </Grid>
                </Card>
            </Grid>
        );
    }
}



const styles = {
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
        marginBottom: '10px',
    },
    welcome2:{
        fontSize:17,
        color:'#AAAAAA',
        marginLeft: '10px',
        marginRight: '10px',
    },
    button: {
        color:'white',
        width: '100%',
        marginTop: '20px',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        backgroundColor: '#3D91F7',    
        marginBottom: 30,
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
        opacity: 0.85,
    },

    wrapper_1:{
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
