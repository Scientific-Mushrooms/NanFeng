import React, { Component } from "react";
import { BaseComponent } from '../../../../components/BaseComponent';
import { Divider, Grid, Button, Typography, Icon} from '@material-ui/core';
import { connect } from 'react-redux';
import { Row, Col, Card} from 'antd';

class ChangeAvatar extends BaseComponent {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            instructor: null,
            userId: null,
        };
    }


    render() {
        return (
            <Card style={styles.card}>
                <Typography style={{fontSize:25,color:'#0078d7'}} variant='display2'>修改头像</Typography>
                <Divider/>
                <div style={{height:'25px'}}></div>
                <Row justify='center' type='flex'>
                <img src={this.getImagePath(this.props.user.avatarId)} style={styles.avatar}/>
                </Row>
                <Row justify='center' type='flex' xs={8}>
                        <Button
                            mini
                            style={styles.button}
                            variant="outlined" >
                            <Typography variant='button' style={styles.buttonText}>提交修改</Typography>
                        </Button>
                </Row>
            </Card>
        );
    }
}


const styles = {

    container: {
        marginBottom: '20px'
    },

    button: {
        marginTop: '20px',
        marginBottom:'10px',
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

    card:{
        marginBottom:'20px',
    },

    avatarContainer: {
        marginTop:'10px',
        height: '150px',
        justifyContent: 'center',
        alignItems: 'center'
    },

    avatar: {
        marginTop:'10px',
        marginBottom:'10px',
        width: '150px',
        height: '150px',
        borderRadius: '50%',
    },

};


const mapStateToProps = state => ({
    user: state.identityReducer.user
})


export default connect(mapStateToProps)(ChangeAvatar);
