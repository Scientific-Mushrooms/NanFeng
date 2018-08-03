import React from 'react';

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { login, set_instructor } from '../../redux/actions/action';
import Card from "../../components/Card/Card.jsx";
import CardBody from "../../components/Card/CardBody.jsx";
import Button from '../../components/CustomButtons/Button'
import { BaseComponent } from '../../components/BaseComponent';
import NjuImg from './src/nju.png';

const homeImage = {
    display:'inline-blocks',
    height:700,
    width:1200,
    backgroundImage: 'url('+NjuImg+')'
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
        } else if(this.state.password === ''){
            this.pushNotification("danger","Password Can't Be Empty",this.props.dispatch);
        } else {
            let form = new FormData();
            form.append("email", this.state.email);
            form.append("password", this.state.password);

            this.post('/api/security/signIn', form).then((result) => {
                if (!result){
                    this.pushNotification("danger","Connection To Server Failed",this.props.dispatch);
                }else{
                    if (result.status === 'fail') {
                        this.pushNotification("danger",result.description,this.props.dispatch);
                    } else {
                        sessionStorage.setItem("userId", result.detail.userId);
                        this.props.dispatch(login(result.detail));
                        this.props.dispatch(set_instructor(result.more))
                        this.goBack();
                        this.pushNotification("normal","Login Succeeded",this.props.dispatch);
                    }
                }
            })
        }
    };

    render() {
        return (
            <div style={homeImage}>
                <Grid direction='row' alignItems='center' container>
                    {this._renderLeftPanel()}
                    {this._renderLoginPanel()}
                </Grid>
            </div>
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
            <Grid direction='column' sm={4} justify='center'
                  onMouseEnter = {this.onMouseEnter.bind(this)}
                  onMouseLeave = {this.onMouseLeave.bind(this)}
                  style={this.state.hover? styles.wrapper_1:styles.wrapper} container>
                <Card>
                    <CardBody>
                        <Grid >
                            <TextField
                                id="name"
                                label="Name"
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
                                label="Password"
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
                            >LOGIN</Button>
                        </Grid>
                    </CardBody>
                </Card>
                <Button style={{width:"100%"}} onClick={this.goBack}>Go Back</Button>
            </Grid>
        );
    }
}





const styles = {

    wrapper: {
        paddingBottom: '500px',
        marginTop:'200px',
        opacity: 0.7,
    },

    wrapper_1:{
        paddingBottom: '500px',
        marginTop:'200px',
        opacity: 0.93,
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

    button: {
        width: '100%',
        marginTop: '30px',
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
