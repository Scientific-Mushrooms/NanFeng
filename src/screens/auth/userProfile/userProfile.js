import React, {Component} from "react";
import { BaseComponent } from '../../../components/BaseComponent';
import ImageUploader from 'react-images-upload';
import { Divider, Grid, Button, Typography, Icon, TextField, Popover} from '@material-ui/core';

import { FormControl} from 'react-bootstrap';
import { update } from '../../../redux/actions/action';

export class UserProfile extends BaseComponent {

    constructor(props) {
        super(props);
        this.state = {
            
            verified: false,

            email: null,
            nickName: null,
            avatar: [],
            passChange:false,
            oldPass:null,
            newPass: null,
            reNewPass:null,
        };
    }

    componentWillMount() {
        if (this.props.user === null) {
            this.props.history.push("/home");
        } else {
            var {nickName, email} = this.props.user;
            this.setState({
                nickName: nickName,
                email: email,
            })
        }
    }

    renderChooseAvatar = () => {

        var onChange = (avatar) => {
            this.setState({
                infoChange:true,
                avatar: this.state.avatar.concat(avatar)
            });     
        } 

        return (
            <Grid style={styles.inputContainer} xs={8} container>
                <Typography style={styles.typography}>Avatar: </Typography>
                <ImageUploader
                    withIcon={false}
                    withLabel={false}
                    withPreview={true}
                    buttonText='Choose images'
                    onChange={onChange}
                    imgExtension={['.jpg', '.gif', '.png']}
                    maxFileSize={5242880}
                    singleImage={true}
                />
            </Grid>
        )
    }


    renderPassInput=(name, variable) => {
        return (
            <Grid style={styles.inputContainer} xs={8} container>
                <Typography style={styles.typography}>{name} :</Typography>
                <FormControl  type="password" onChange={this.handleChange(variable)} />
            </Grid>
        )
    }

    renderPassWarning= () => {
        if(this.state.passChange==true&&this.state.reNewPass!=this.state.newPass)
            return(
                 <Grid direction='row' alignItems='center' xs={4} container>
                    <Icon style={{color:'red'}}>warning</Icon>
                    <Typography style={styles.warning}>Repassword Wrong</Typography>
                </Grid>
            )
    }

    changePass = () => {
        if(this.state.oldPass==null||this.state.newPass==null||this.state.reNewPass==null){
            this.pushNotification("danger", "Please enter the Password", this.props.dispatch);
        }else if(this.state.newPass!=this.state.reNewPass){
            this.pushNotification("danger","Please enter the right Repassword",this.props.dispatch);
        }else {
            //post here
        }
    }

    renderVarifyIdentity = () => {
        return (
            <Grid style={styles.inputContainer} xs={8} container>
                <Typography style={styles.typography}>NickName :</Typography>
                <FormControl type="text" value={this.state.nickName} onChange={this.handleChange("nickName")} />
            </Grid>
        )
    }

    save = () => {

        let form = new FormData();
        form.append("userId", this.props.user.userId);
        form.append("nickName", this.state.nickName);

        this.post('/api/user/update', form).then((result) => {

            if (!result) {
                this.pushNotification("danger", "Connection error", this.props.dispatch);

            } else if (result.status === 'fail') {
                this.pushNotification("danger", result.description, this.props.dispatch);

            } else if (result.status === 'success') {
                
                this.props.dispatch(update(result.detail))
                this.pushNotification("success", "successfully update info", this.props.dispatch);

            } else {
                
                this.pushNotification("danger", "unknown error", this.props.dispatch);
            }

        })
    }

    render(){
        return (
            <Grid alignItems='center' direction='column' container>

                <Grid container xs={8}>
                    <Typography variant='display3'>Your Profile</Typography>
                </Grid>

                <Grid style={styles.container} direction='column' container xs={8}>

                    <Typography variant='display2'>Info Settings</Typography>

                    <Grid style={styles.inputContainer} xs={8} container>
                        <Typography style={styles.typography}>NickName :</Typography>
                        <FormControl type="text" value={this.state.nickName} onChange={this.handleChange("nickName")} />
                    </Grid>

                    <Grid style={styles.inputContainer} xs={8} container>
                        <Typography style={styles.typography}>Email :</Typography>
                        <FormControl type="text" value={this.state.email} onChange={this.handleChange("email")} />
                    </Grid>

                    {this.renderChooseAvatar()}

                    <Grid justify='center' container xs={8}>
                        <Button style={styles.button} onClick={this.save} >
                            save
                        </Button>
                    </Grid>

                </Grid>

                <Grid style={styles.container} direction='column' container xs={8}>
                    <Typography variant='display2'>Security Settings</Typography>
                    <Divider/>
                    {this.renderPassInput("Old Password","oldPass")}
                    {this.renderPassInput("New Password","newPass")}
                    <Grid style={styles.inputContainer}direction='row' container xs={12}>
                        <Typography style={styles.typography}>Confirm New Password :</Typography>
                        <Grid direction='row' container>
                            <Grid xs={8}>
                                <FormControl  type="password" onChange={this.handleChange("reNewPass")} />
                            </Grid>
                            {this.renderPassWarning()}
                        </Grid>
                    </Grid>
                    <Grid justify='center' container xs={8}>
                        <Button  
                            mini
                            style={styles.button}
                            variant='fab'
                            disabled={!this.state.passChange} 
                            onClick={this.changePass}
                            >
                            <Typography variant='button'style={{fontSize:'50%'}}>Change Password</Typography>
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        );
    }

}


const styles = {

    
    button:{
        marginTop:'10px',
        borderRadius: "20px",
        width:"50%",
    },

    typography:{
        fontSize:'130%'
    },

    warning:{
        color:"red",
        fontSize:'130%'
    },

    container:{
        marginTop:'20px',
        marginBottom:'20px'
    },

    inputContainer: {
        marginBottom: '5px'
    },

    input: {
        borderRadius: '6px'
    },

    textContainer: {
        justifyContent: 'flex-end'
    },

    introContainer: {
        height: '80px'
    }


};