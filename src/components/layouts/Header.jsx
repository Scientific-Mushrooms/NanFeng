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
import { NavLink } from "react-router-dom";

import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

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
        };
    }

    routesToList = (prop, key) => {
        return (
            <NavLink to={prop.path} style={styles.item} activeClassName="active" key={key}>
                <ListItem button style={this.activeRoute(prop.path) ? styles.selectedItemLink : styles.itemLink} >
                    
                    <Icon>{prop.icon}</Icon>
                    
                    <ListItemText primary={prop.sidebarName} style={styles.itemText} disableTypography={true} />
                </ListItem>
            </NavLink>
        );
    }

    handleClick = name => event => {
        this.setState({
           [name]: event.currentTarget,
        });
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
                userPopover: event.currentTarget,
            });
        }
    };

    handleClose = name => () => {
        this.setState({
            [name]: null,
        });
    };

    signOut=()=>{
        //need to do something
    }

    renderUserPopover = () => {

        if (this.props.user === null) {
            return null;
        }

        return (
            <Popover
                open={Boolean(this.state.userPopover)}
                anchorEl={this.state.userPopover}
                onClose={this.handleClose("userPopover")}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                transformOrigin={{ vertical: 'top', horizontal: 'center',}}
                >
                <Grid justify="center" >
                    <Button style={styles.button}>My Upload</Button>
                    <Button style={styles.button}>Help</Button>
                    <Button style={styles.button}>Settings</Button>
              
                    <Button style={styles.buttonBottom} onClick={this.signOut.bind(this)}>Sign out</Button>
                </Grid>
            </Popover>
        )
        
    }

    renderAlertPopover = () => {

        if (this.props.user === null) {
            return null;
        }

        return (
            <Popover
                open={Boolean(this.state.notificationPopover)}
                anchorEl={this.state.notificationPopover}
                onClose={this.handleClose("notificationPopover")}
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
        )
    }

    renderRight = () => {
        if (this.props.user === null) {
            return (
                <Grid container xs={4} style={styles.subRightContainer}>

                    <Button onClick={this.handleUserButton} style={styles.iconButton} >Sign in</Button>
                    <Button onClick={this.handleUserButton} style={styles.iconButton}>Sign up</Button>

                </Grid>
            )
        }
        return (
            <Grid container xs={4} style={styles.subRightContainer}>

                <IconButton onClick={this.handleClick("notificationPopover")} style={styles.iconButton} >
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
                
                {this.renderUserPopover()}

                {this.renderAlertPopover()}

                <Notification />

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
