import React from "react";

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import { logout } from '../../redux/actions/action';

import { connect } from 'react-redux';
import { Popover, Icon, Typography, IconButton } from '@material-ui/core';
import { BaseComponent } from '../BaseComponent';
import Avatar from '@material-ui/core/Avatar';
import { NavLink, withRouter } from "react-router-dom";



import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import mainRoutes from '../../routes/routes';


const mapStateToProps = state => ({
    user: state.userReducer.user,
})


class Header extends BaseComponent {

    constructor(props) {
        super(props);
        this.state = {
            register: false,
            avatarPath: null,
        };
    }

    fetchAvatar = () => {
        let form = new FormData();
        form.append("imageId", this.props.user.avatarId);
        
        this.post('/api/image/imageIdToImage', form).then((result) => {
            alert(JSON.stringify(result))
            if (!result) {
                this.pushNotification("danger", "Connection error", this.props.dispatch);

            } else if (result.status === 'fail') {
                this.pushNotification("danger", result.description, this.props.dispatch);

            } else if (result.status === 'success') {

                this.setState({avatar: result.detail})
                this.pushNotification("success", "successfully fetch avatar", this.props.dispatch);

            } else {

                this.pushNotification("danger", "unknown error", this.props.dispatch);
            }

        })
    }

    handleClick = name => event => {
        this.setState({
           [name]: event.currentTarget,
        });
    }

    handleClose = name => () => {
        this.setState({
            [name]: null,
        });
    };

    signOut=()=>{
        this.props.dispatch(logout());
    }

    goToUserProfile = () => {
        this.props.history.push("/userProfile")
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
                <List component="nav">
                    <ListItem button onClick={this.goToUserProfile}>
                        <Typography>Profile</Typography>
                    </ListItem>
                    <ListItem button >
                        <Typography>Help</Typography>
                    </ListItem>
                    <ListItem button >
                        <Typography>Settings</Typography>
                    </ListItem>
                </List>
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
                    <ListItem button >
                        <Typography>hi</Typography>
                    </ListItem>
                    <ListItem button >
                        <Typography>hello</Typography>
                    </ListItem>
                </List>
            </Popover>
        )
    }

    routesToList = (prop, key) => {
        return (
            <NavLink to={prop.path} key={key} style={{ textDecoration: "none",}}>
                <ListItem button>
                    <Icon style={{paddingRight: 10}}>{prop.icon}</Icon>
                    <Typography>{prop.sidebarName}</Typography>
                </ListItem>
            </NavLink>
        );
    }

    renderWidgetsPopover = () => {

        return (
            <Popover
                open={Boolean(this.state.widgetsPopover)}
                anchorEl={this.state.widgetsPopover}
                onClose={this.handleClose("widgetsPopover")}
                anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
                transformOrigin={{vertical: 'top', horizontal: 'center'}}
                >
                <List component="nav" style={{display : "flex"}}>
                    {mainRoutes.map(this.routesToList)}
                </List>
            </Popover>
        )
    }

    gotoSignIn = () => {
        this.props.history.push('./signin')
    }

    gotoSignUp = () => {
        this.props.history.push('./signUp')
    }

    renderAvatar = () => {

        if (this.props.user !==null) {
            return (
                <Avatar style={styles.avatar} src={this.getImagePath(this.props.user.avatarId)}/>
            )
        }

        // alert(JSON.stringify(this.state.avatar))
        // return (
            
        //     <Avatar style={styles.avatar} src={this.imagePath + this.state.avatar.name} />
        // )
    }



    renderRight = () => {

        if (this.props.user === null) {
            return (
                <Grid container xs={4} style={styles.subRightContainer}>
                    <Button onClick={this.gotoSignIn} style={styles.iconButton} >Sign in</Button>
                    <Button onClick={this.gotoSignUp} style={styles.iconButton}>Sign up</Button>
                </Grid>
            )
        }
        
        return (
            <Grid container xs={4} style={styles.subRightContainer}>

                <IconButton onClick={this.handleClick("notificationPopover")} style={styles.iconButton} >
                    <Icon>notifications</Icon>
                    <span style={styles.notifications}>5</span>
                </IconButton>

                <Button onClick={this.handleClick("userPopover")} style={styles.iconButton} >
                    {this.renderAvatar()}
                    <div style={styles.text}>{this.props.user.nickName}</div>
                </Button>

            </Grid>
        )
    }

    test = () => {
        this.props.history.push('/home')
    }



    render() {
        return (
            <Grid container style={styles.container}>
                <Grid container xs={10} style={styles.subContainer}>

                    <Grid xs={8}>

                        <Button onClick={this.props.handleDrawer} style={styles.slogan}>
                            Mushrooms
                        </Button>

                        <Button onClick={this.test} style={styles.iconButton}>
                            Home
                        </Button>

                        <Button onClick={this.handleClick("widgetsPopover")} style={styles.iconButton}>
                            Widgets
                        </Button>

                    </Grid>

                    {this.renderRight()}

                </Grid>

                {this.renderUserPopover()}

                {this.renderAlertPopover()}

                {this.renderWidgetsPopover()}

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


    iconButton: {

        color: '#bcb8a8'
    },

    container: {
        height: '70px',
        backgroundColor: '#404040',
        justifyContent: 'center',
        alignItems: 'center',
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


export default withRouter(connect(mapStateToProps)(Header));
