import React from 'react';

import {TextField,Typography} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { login, set_instructor } from '../../redux/actions/action';
import { BaseComponent } from '../../components/BaseComponent';
import NjuImg from './src/nju.png';
import {Card, Button} from 'antd';

const homeImage = {
    marginTop:40,
    display:'inline-blocks',
    height:700,
    width:1200,
    backgroundImage: 'url('+NjuImg+')',
    borderRadius:20,
}

export class SignIn extends BaseComponent {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
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

    signUp = () => {
        this.props.history.push({ pathname: "/signup" })
    }


    login = () => {

        if (this.state.email === '' ) {
            this.pushNotification("danger","Username Can't Be Empty",this.props.dispatch);
            return;
        }
        
        if(this.state.password === ''){
            this.pushNotification("danger","Password Can't Be Empty",this.props.dispatch);
            return;
        } 

        let form = new FormData();
        form.append("email", this.state.email);
        form.append("password", this.state.password);

        this.post('/api/security/signIn', form).then((result) => {

            if (!result){
                this.pushNotification("danger","Connection To Server Failed",this.props.dispatch);
                return;
            } 

            if (result.status === 'fail') {
                this.pushNotification("danger",result.description,this.props.dispatch);
                return;
            }
            console.log(result)

            sessionStorage.setItem('userId', result.detail.userId);
            sessionStorage.setItem("instructorId", result.more.instructorId);
            sessionStorage.setItem("studentId", result.extra.studentId);
            this.props.dispatch(login(result.detail, result.more, result.extra));
            this.props.history.push("/home");
            this.pushNotification("normal","Login Succeeded",this.props.dispatch);
                      
        })
        
    };


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
                    {this._renderLoginPanel()}
                </Grid>
            </Grid>
        );
    }

    _renderLeftPanel(){
        return(
            <Grid xs={6} justify='center' container>
            </Grid>
        );

    }

    _renderLoginPanel(){
        return(
            <Grid sm={6} direction='column' justify='center' 
                  onMouseEnter = {this.onMouseEnter.bind(this)}
                  onMouseLeave = {this.onMouseLeave.bind(this)}
                  style={this.state.hover? styles.wrapper_1:styles.wrapper} container>
                <Card>
                        <Typography style={styles.welcome}>欢迎使用南风！</Typography>
                        <Typography style={styles.welcome2}>登录</Typography>
                        <Grid >
                            <TextField
                                id="name"
                                label="用户名"
                                style={styles.textField}
                                value={this.state.name}
                                onChange={this.handleChange('email')}
                                margin="none"
                                fullWidth={true}
                            />
                        </Grid>
                        <Grid >
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
                        <Grid >
                            <Button
                                size="large"
                                style={styles.button}
                                color='primary'
                                onClick={this.login}
                            >登录</Button>
                            <Button style={styles.button2} onClick={this.goBack}>返回</Button>
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
        marginTop:'10px',
    },
    policy_button:{
        fontsize:15,
        color:'#6A005F',
        borderColor:'#6A005F',
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
        marginBottom: '10px',
    },
    button: {
        color:'white',
        width: '100%',
        marginTop: '30px',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        backgroundColor: '#6A005F',    
        marginBottom: 30,
    },
    button2:{
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
        marginBottom: '10px',
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
    },

    temp:{
        marginTop: '20px',
    }
};
