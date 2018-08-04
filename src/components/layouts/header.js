import React from "react";

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import { logout, update } from '../../redux/actions/action';

import { connect } from 'react-redux';
import { Popover, Icon, Typography, IconButton } from '@material-ui/core';
import { BaseComponent } from '../BaseComponent';
import Avatar from '@material-ui/core/Avatar';
import { NavLink, withRouter } from "react-router-dom";



import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import mainRoutes from '../../routes/routes';


const mapStateToProps = state => ({
    user: state.identityReducer.user,
})


class Header extends BaseComponent {

    constructor(props) {
        super(props);
        this.state = {
            register: false,
            avatarPath: null,
            userId: sessionStorage.getItem("userId")
        };
    }
    
    componentWillMount = () => {
        if (this.props.user == null && sessionStorage.getItem("userId") !== null) {
            this.fetchUser();
        }
    }

    fetchUser = () => {
        let form = new FormData();
        form.append("userId", this.state.userId);

        this.post('/api/user/userIdToUser', form).then((result) => {

            if (!result) {
                this.pushNotification("danger", "Connection error", this.props.dispatch);

            } else if (result.status === 'fail') {
                this.pushNotification("danger", result.description, this.props.dispatch);

            } else if (result.status === 'success') {

                this.props.dispatch(update(result.detail))
                this.pushNotification("success", "successfully update user", this.props.dispatch);

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
        sessionStorage.clear();
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
					<ListItem button onClick={this.signOut}>
                        <Typography>Logout</Typography>
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
	
	renderLanguageChoose = () => {
	
		return(
			<Grid container xs={2} style={styles.subRightContainer}>
			<Button onClick={this.handleClick("LanguagePopover")} style={styles.iconButton} >
                Language
            </Button>
			</Grid>
		)
	}
	
	renderLanguagePopover=()=>{
		
		return (
            <Popover
                open={Boolean(this.state.LanguagePopover)}
                anchorEl={this.state.LanguagePopover}
                onClose={this.handleClose("LanguagePopover")}
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
                        <Typography>中文</Typography>
                    </ListItem>
                    <ListItem button >
                        <Typography>English</Typography>
                    </ListItem>
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

        if (this.props.user === null) {
            return null;
        }

        return (
            <Avatar style={styles.avatar} src={this.getImagePath(this.props.user.avatarId)}/>
        )
    
    }



    renderRight = () => {

        if (this.props.user === null) {
            
            return (
                <Grid container xs={4} style={styles.subRightContainer}>
                    <Button onClick={this.gotoSignIn} style={styles.iconButton} >Sign in</Button>
                    <Button onClick={this.gotoSignUp} style={styles.iconButton}>Sign up</Button>
					{this.renderLanguageChoose()}
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

    goToCourseSearch = () => {
        this.props.history.push('/courseSearch')
    }

    onClickInstructor = () => {
        this.props.history.push('./instructorSearch')
    }

    onClickClassroom = () => {
        if (this.props.user == null) {
            this.pushNotification("danger", "sign in first", this.props.dispatch)
            return;
        }

        if (this.props.instructor !== null) {
            alert("instructor")
            return;
        }

        if (this.props.student !== null) {
            alert("student");
            return;
        }

        alert("you need to verify first")
    }

    



    render() {
        return (
            <Grid container style={styles.container}>
                <Grid container xs={10} style={styles.subContainer}>

                    <Grid xs={8}>

                        <Button onClick={this.props.handleDrawer} style={styles.slogan}>
                            Mushrooms
                        </Button>

                        <Button onClick={this.goToCourseSearch} style={styles.iconButton}>
                            Course
                        </Button>

                        <Button onClick={this.onClickInstructor} style={styles.iconButton}>
                            Instructor
                        </Button>

                        <Button onClick={this.onClickClassroom} style={styles.iconButton}>
                            Classroom
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
				
				{this.renderLanguagePopover()}
				
				

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
