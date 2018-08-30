import React, {Component} from "react";
import { BaseComponent } from '../../../components/BaseComponent';
import ImageUploader from 'react-images-upload';
import {Typography, Grid,Paper} from '@material-ui/core';
import { Row, Col, Card,Anchor,Button} from 'antd';
import PersonalInformation from './components/personalInformation';
import InstructorVerification from './components/instructorVerification';
import ChangePassword from './components/changePassword';
import ChangeAvatar from './components/changeAvatar';
import StudentVerification from './components/studentVerification';
const { Link } = Anchor;

export class UserProfile extends BaseComponent {

    scrollToAnchor = (id) => {
        if (id) {
            let anchorElement = document.getElementById(id);
            if(anchorElement) { anchorElement.scrollIntoView({behavior: 'smooth'}); }
        }
    }

    renderAnchor(){
        return(
            <Anchor style={{backgroundColor:'rgba(0,0,0,0)'}} offsetTop={300}>
                <Grid container>
                    <Grid xs={2} style={{marginLeft:10}}/>
                    <Grid xs={12} direction='column' container>
                        <Paper elevation={10} style={{height:'100%',width:'80%',margin:15}}>
                            <a onClick={()=>this.scrollToAnchor('CA')}>
                                <Button style={{width:'100%',borderWidth:0,fontSize:23,marginTop:20,marginBottom:20}}>修改头像</Button>
                            </a>
                            <a onClick={()=>this.scrollToAnchor('PI')}>
                                <Button style={{width:'100%',borderWidth:0,fontSize:23,marginBottom:20}}>个人信息</Button>
                            </a>
                            <a onClick={()=>this.scrollToAnchor('CP')}>
                                <Button style={{width:'100%',borderWidth:0,fontSize:23,marginBottom:20}}>修改密码</Button>
                            </a>
                            <a onClick={()=>this.scrollToAnchor('IV')}>
                                <Button style={{width:'100%',borderWidth:0,fontSize:23,marginBottom:20}}>学工认证</Button>
                            </a>
                            <a onClick={()=>this.scrollToAnchor('SV')}>
                                <Button style={{width:'100%',borderWidth:0,fontSize:23,marginBottom:20}}>学生认证</Button>
                            </a>
                        </Paper>
                    </Grid>
                </Grid>
            </Anchor>
        );
    }

    constructor(props) {
        super(props);
        this.state = {       
            verified: false,

            passChange:false,
            oldPass:null,
            newPass: null,
            reNewPass:null,
        };
        if (this.props.user === null) {
            this.props.history.push("/courseSearch");
        }
    }


    render(){
        return (
            <Grid style={{width:'100%'}} direction='row' justify='center' container>
                <Grid xs={10}>
                    <Typography variant='display3' style={styles.header}>修改信息</Typography>
                    <Col span={24}>
                        <Card>
                            <ChangeAvatar id="CA"/>
                            <PersonalInformation id="PI"/>
                            <ChangePassword id="CP"/>
                            <InstructorVerification id="IV"/>
                            <StudentVerification id="SV"/>
                        </Card>
                    </Col>
                </Grid>
            </Grid>
        );
    }

}


const styles = {

    header:{
        fontSize:30,
        marginLeft:'20px',
        color:'#0078d7',
    },

};
