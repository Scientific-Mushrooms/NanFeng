import React, {Component} from "react";
import { BaseComponent } from '../../../components/BaseComponent';
import ImageUploader from 'react-images-upload';
import {Typography} from '@material-ui/core';

import { Row, Col, Card} from 'antd';

import PersonalInformation from './components/personalInformation';
import InstructorVerification from './components/instructorVerification';
import ChangePassword from './components/changePassword';
import ChangeAvatar from './components/changeAvatar';
import StudentVerification from './components/studentVerification';

export class UserProfile extends BaseComponent {

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
            this.props.history.push("/home");
        }
    }


    render(){
        return (
            <Row>
                <Col span={2}></Col>
                <Typography variant='display3' style={styles.header}>账号设置</Typography>
                <Row>
                    <Col span={2}></Col>
                <Col span={12}>
                    <Card>

                        <PersonalInformation/>

                        <ChangePassword/>

                    </Card>
                </Col>
                <Col span={1}></Col>
                <Col span={8}>

                    <ChangeAvatar />

                    <InstructorVerification />

                    <StudentVerification/>

                </Col>
                </Row>

            </Row>
        );
    }

}


const styles = {

    header:{
        marginLeft:'20px',
        color:'#0078d7',
    },

};
