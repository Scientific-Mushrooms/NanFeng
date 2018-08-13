import React, { Component } from "react";
import { BaseComponent } from '../../../../components/BaseComponent';
import ImageUploader from 'react-images-upload';
import { Divider, Grid, Button, Typography, Icon, TextField, Popover } from '@material-ui/core';
import { FormControl } from 'react-bootstrap';
import {set_instructor, update} from '../../../../redux/actions/action';
import { connect } from 'react-redux';
import { Row, Col} from 'antd';



class PersonalInformation extends BaseComponent {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            email: null,
            nickName: null,
        };
    }

    componentWillMount = () => {
        if (this.props.user !== null) {
            this.setState({
                userId: this.props.user.userId,
                email: this.props.user.email,
                nickName: this.props.user.nickName,
            })
        }
    }

    renderChooseAvatar = () => {

        var onChange = (avatar) => {
            this.setState({
                infoChange: true,
                avatar: this.state.avatar.concat(avatar)
            });
        }

        return (
            <Grid container>
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

    save = () => {

        let form = new FormData();
        form.append("userId", this.state.userId);
        form.append("nickName", this.state.nickName);
        form.append("email", this.state.email);

        var successAction = (result) => {
            this.props.dispatch(update(result.detail))
            this.pushNotification("success", "successfully update info", this.props.dispatch);
        }

        this.newPost('/api/user/update', form, successAction);
    }

    
    render() {
        return (
            <div>
                <Typography variant='display2'>个人信息</Typography>
                <Divider/>
                <div style={{height:'25px'}}></div>
                <Row style={styles.container} type='flex' justify='center'>
                    <Col span={4}>
                        <Typography style={styles.typography}>用户名:</Typography>
                    </Col>
                    <Col span={20}>
                        <FormControl type="text" value={this.state.nickName} onChange={this.handleChange("nickName")} />
                    </Col>
                </Row>

                <Row style={styles.container} type='flex' justify='center'>
                    <Col span={4}>
                        <Typography style={styles.typography}>邮箱:</Typography>
                    </Col>
                    <Col span={20}>
                        <FormControl type="text" value={this.state.email} onChange={this.handleChange("email")} />
                    </Col>
                </Row>

                {/* {this.renderChooseAvatar()} */}

                <Row justify='center' type='flex'>
                    <Button
                        mini
                        style={styles.button}
                        variant="outlined"
                        onClick={this.save} >
                        <Typography variant='button' style={styles.buttonText}>保存</Typography>
                    </Button>
                </Row>

            </div>
        );
    }
}


const styles = {


    button: {
        marginTop: '20px',
        marginBottom:'50px',
        borderRadius: "5px",
        borderWidth:"1.2px",
        borderColor:"#60CDEE",
        width: "20%",
        height:'40px',
    },

    buttonText:{
        fontSize:'12px',
        color:'#60CDEE'
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
    },

};

const mapStateToProps = state => ({
    user: state.identityReducer.user
})

export default connect(mapStateToProps)(PersonalInformation);
