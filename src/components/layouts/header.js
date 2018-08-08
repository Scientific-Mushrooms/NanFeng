import React from "react";
import Grid from '@material-ui/core/Grid';

import { logout, update, login } from '../../redux/actions/action';
import { Menu, Icon, Row, Col} from 'antd';
import { connect } from 'react-redux';
import { Popover, Typography, IconButton, Button } from '@material-ui/core';
import { BaseComponent } from '../BaseComponent';
import Avatar from '@material-ui/core/Avatar';
import { NavLink, withRouter } from "react-router-dom";



import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import mainRoutes from '../../routes/routes';

const SubMenu = Menu.SubMenu;

const mapStateToProps = state => ({
    user: state.identityReducer.user,
    instructor: state.identityReducer.instructor,
    student: state.identityReducer.student,
})


class Header extends BaseComponent {

    constructor(props) {
        super(props);
        this.state = {
            current:'/courseSearch',
            register: false,
            userId: sessionStorage.getItem("userId")
        };
    }
    
    componentWillMount = () => {
        console.log(sessionStorage.getItem("userId"))
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
                return;
            } 
            
            if (result.status === 'fail') {
                this.pushNotification("danger", result.status, this.props.dispatch);
                return;
            } 

            if (result.status === 'success') {
                console.log(result)

                this.props.dispatch(login(result.detail, result.more, result.extra))
                this.pushNotification("success", "successfully update user", this.props.dispatch);

            } else {

                this.pushNotification("danger", result.status, this.props.dispatch);
            }

        })
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
	

    renderAvatar = () => {

        if (this.props.user === null) {
            return null;
        }

        return (
            <Avatar style={styles.avatar} src={this.getImagePath(this.props.user.avatarId)}/>
        )
    
    }

    
    handleRightClick = name => event => {
        this.setState({
           [name]: event.currentTarget,
        });
    }

    renderRight = () => {

        if (this.props.user === null) {
            
            return (
                <Grid container xs={4} style={styles.subRightContainer}>
                <Menu
                    onClick={this.handleClick}           
                    selectedKeys={[this.state.current]}
                    mode="horizontal"
                >
                    <Menu.Item key="/signin">
                        <Icon style={{ fontSize: 27, color: 'black' }} type="user"/>
                        <span style={{fontSize:27}}>登录</span>
                    </Menu.Item>
                    <Menu.Item key="/signUp">
                        <Icon style={{ fontSize: 27, color: 'black' }} type="user-add"/>
                        <span style={{fontSize:27}}>注册</span>
                    </Menu.Item>
                </Menu>
                </Grid>
            )
        }
        
        return (
            
            <Grid container xs={4} style={styles.subRightContainer}>

                <Button onClick={this.handleRightClick("userPopover")} style={styles.iconButton} >
                    {this.renderAvatar()}
                    <div style={styles.text}>{this.props.user.nickName}</div>
                </Button>
				

            </Grid>
        )
    }

    onClickClassroom = (e) => {

        if (this.props.user == null) {
            this.pushNotification("danger", "sign in first", this.props.dispatch)
            return;
        }
             
        this.setState({
            current:e.key
        })

        if (this.props.instructor !== null) {
            this.props.history.push('/instructorPanel')
            return;
        }

        if (this.props.student !== null) {
            alert("student");
            return;
        }

        this.pushNotification("danger", "you need to verify first", this.props.dispatch)
    }

    handleClick = (e) => {
        if(e.key!='/classroom'){     
            this.setState({
                current:e.key
            })
            this.props.history.push(e.key+'')
        }
        else
            this.onClickClassroom(e)
    }
    
    render() {
        return(
            <Row type='flex' justify='center'>
                <Col span={20} type='flex' justify='center' align="bottom">
    

                    <Col span={4} type='flex' justify='center'>
                        <Button onClick={this.props.handleDrawer} style={styles.slogan}>
                            <img style={styles.logo} src={require("./src/logo-color.png")} />
                        </Button>
                    </Col>

                    <Col span={9} type='flex' justify='center'>
                        <Menu
                            selectedKeys={[this.state.current]}
                            mode="horizontal"
                        >
                            <Menu.Item key="/courseSearch">
                                <Icon style={{ fontSize: 27, color: '#0078d7' }} type="edit" />
                                <span style={{ fontSize: 27 }}>课堂</span>
                            </Menu.Item>
                    
                            <Menu.Item onClick={this.onClickClassroom}>
                                <Icon style={{ fontSize: 27, color: '#0078d7' }} type="edit" />
                                <span style={{ fontSize: 27 }}>课堂</span>
                            </Menu.Item>
                            <SubMenu
                                title={<span>
                                    <Icon style={{ fontSize: 27, color: '#0078d7' }} type="smile-o" />
                                    <span style={{ fontSize: 27 }}>南大助手</span>
                                </span>}>
                                <Menu.Item key="/confess1"><span style={{ fontSize: 20 }}>失物招领</span></Menu.Item>
                                <Menu.Item key="/confess2"><span style={{ fontSize: 20 }}>寻人招人</span></Menu.Item>
                                <Menu.Item key="/confess3"><span style={{ fontSize: 20 }}>一吐为快</span></Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Col>

                    {this.renderRight()}
                
                    {this.renderUserPopover()}
                    {this.renderWidgetsPopover()}
 
                </Col>
            </Row>
        )
    }      

}


const styles = {

    typography: {
        marginTop: '5px',
    },

    iconButton: {
        color: '#bcb8a8'
    },

    container: {
        height: '90px',
        backgroundColor: 'white',
    },

    logo: {
        height:'60px',
        width:'110px'
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
    },

    text: {
        marginLeft: '10px'
    },

    subContainer: {
        height: '100%'
    }

};


export default withRouter(connect(mapStateToProps)(Header));
