import React from "react";

import Button from '@material-ui/core/Button';
import LoginBox from '../boxes/loginBox';
import Grid from '@material-ui/core/Grid';

import { loginBoxShow, show_notification, hide_notification } from '../../redux/actions/action';

import { connect } from 'react-redux';
import { Popover, Icon, Typography, IconButton } from '@material-ui/core';
import Notification from '../notification';
import { BaseComponent } from '../BaseComponent';
import Avatar from '@material-ui/core/Avatar';


import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';

const mapStateToProps = state => ({
    user: state.userReducer.info,
    loginbox: state.modalReducer.loginbox,
})


class Header extends BaseComponent {

    constructor(props) {
        super(props);
        this.state = {
            register: false,
            userPopover: null,
            notif: null
        };
    }

    handleNotifClick = event => {
        this.setState({
            notif: event.currentTarget,
        });
    };


    handleNotifClose = () => {
        this.setState({
           notif: null,
        });
    };

    handleUserButton = (event) => {
        if (this.props.user === null) {
            this.props.dispatch(loginBoxShow)
        } else {
            this.setState({
                anchorEl: event.currentTarget,
            });
        }
    };

    handleClose = () => {
        this.setState({
            anchorEl: null,
        });
    };

    renderUser=()=>{
        if(this.props.user!=undefined)
        return(
            <Grid>
                <Grid justify='center' container>
                    <Avatar 
                        alt={this.props.user.email}
                        src={require("../../assets/img/avatar_test.jpg")}
                        style={{margin:5,width:100,height:100}}
                        />
                </Grid>
                <Grid justify='center' container>
                    <Typography style={styles.typography}>Login In As</Typography>
                </Grid>
                <Grid justify='center' container>
                    <Typography style={styles.typography}>
                        <span style={{fontWeight:"bold",fontSize:20}}>{this.props.user.email}</span>
                    </Typography>
                </Grid>
            </Grid>
        )
    }

    signOut=()=>{
        //need to do something
    }

    renderRight = () => {
        if (this.props.user === null) {
            return (
                <Grid container xs={4} style={styles.subRightContainer}>

                    {/* <Button onClick={this.props.handleDrawer} style={styles.iconButton}>
                            <Icon>dashboard</Icon>
                        </Button>

                        <Button onClick={this.handleUserButton} style={styles.iconButton}>
                            <Icon>person</Icon>
                        </Button> */}

                    <Button onClick={this.handleUserButton} style={styles.iconButton} >Sign in</Button>
                    <Button onClick={this.handleUserButton} style={styles.iconButton}>Sign up</Button>

                </Grid>
            )
        }
        return (
            <Grid container xs={4} style={styles.subRightContainer}>

                <IconButton onClick={this.handleNotifClick} style={styles.iconButton} >
                    <Icon>notifications</Icon>
                    <span style={styles.notifications}>5</span>
                </IconButton>

                

                <Button onClick={this.handleUserButton} style={styles.iconButton} >
                    <Avatar style={styles.avatar}>猫</Avatar>
                    <div style={styles.text}>{this.props.user.name}</div>
                </Button>

            </Grid>
        )
    }

    render() {
        return (
            <Grid container style={styles.container}>
                <Grid container xs={11} style={styles.subContainer}>

                    <Grid xs={8}>

                        <Button onClick={this.props.handleDrawer} style={styles.slogan}>
                            Mushrooms
                        </Button>

                        <Button onClick={this.props.handleDrawer} style={styles.iconButton}>
                            Home
                        </Button>

                        <Button onClick={this.props.handleDrawer} style={styles.iconButton}>
                            Widgets
                        </Button>

                    </Grid>

                    {this.renderRight()}

                </Grid>
                


                <Popover
                    open={Boolean(this.state.anchorEl)}
                    anchorEl={this.state.anchorEl}
                    onClose={this.handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                >
                    <Grid justify="center" >
                        {this.renderUser()}
                        <hr/>
                        <Button style={styles.button}>My Upload</Button>
                        <Button style={styles.button}>Help</Button>
                        <Button style={styles.button}>Settings</Button>
                        <hr/>
                        <Button style={styles.buttonBottom} onClick={this.signOut.bind(this)}>Sign out</Button>
                    </Grid>
                </Popover>

                <Popover
                    open={Boolean(this.state.notif)}
                    anchorEl={this.state.notif}
                    onClose={this.handleNotifClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                >
                    <List component="nav">
                        <ListItem button>
                            <Typography>hi</Typography>
                        </ListItem>
                        <Divider />
                        <ListItem button divider>
                            <Typography>hello</Typography>
                        </ListItem>
                        <ListItem button>
                            <Typography>greetings</Typography>
                        </ListItem>
                        <Divider light />
                        <ListItem button>
                            <Typography>goodbye</Typography>
                        </ListItem>
                        <Divider light />
                        <ListItem button>
                            <Typography>bye</Typography>
                        </ListItem>

                    </List>
                </Popover>

                <Notification/>

                <LoginBox/>
            </Grid>
        );
    }
}


const styles = {

    notifications: {
        zIndex: "4",
        position: "absolute",
        top: "2px",
        border: "1px solid #FFF",
        right: "4px",
        fontSize: "9px",
        background: "#f44336",
        color: "#FFFFFF",
        minWidth: "16px",
        height: "16px",
        borderRadius: "10px",
        textAlign: "center",
        lineHeight: "16px",
        verticalAlign: "middle",
        display: "block"
    },

    typography: {
        marginTop: '5px',
    },


    button: {
        marginLeft: '1px',
        marginRight:'1px',
        width:"100%",
    },

    buttonBottom:{
        marginBottom: '10px',
        marginLeft: '1px',
        marginRight:'1px',
        width:"100%",
    },

    iconButton: {

        color: '#bcb8a8'
    },

    container: {
        height: '70px',
        backgroundColor: '#404040',
        justifyContent: 'center',
        alignItems: 'center'
    },

    subContainer: {
        height: '100%',
        alignItems: 'center'
    },

    subRightContainer: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },


    avatar: {
        backgroundColor: "#66ccff",
    },

    slogan: {
        height: '100%',
        color: '#bcb8a8',
        fontSize: '25px',
        fontFamily: 'Righteous'
    },

    text: {
        marginLeft: '10px'
    }


};


export default connect(mapStateToProps)(Header);
