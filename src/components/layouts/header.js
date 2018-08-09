import React from "react";

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import { logout, update, login } from '../../redux/actions/action';
import { Menu, Icon, Row, Col} from 'antd';
import { connect } from 'react-redux';
import { Popover, Typography, IconButton, Paper } from '@material-ui/core';
import { BaseComponent } from '../BaseComponent';
import Avatar from '@material-ui/core/Avatar';
import { NavLink, withRouter } from "react-router-dom";



import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import mainRoutes from '../../routes/routes';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

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
            userId: sessionStorage.getItem("userId"),
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
                return;
            } 
            
            if (result.status === 'fail') {
                this.pushNotification("danger", result.status, this.props.dispatch);
                return;
            } 

            if (result.status === 'success') {

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
                        <Typography>个人信息</Typography>
                    </ListItem>
                    <ListItem button >
                        <Typography>查看帮助</Typography>
                    </ListItem>
                    <ListItem button >
                        <Typography>设置</Typography>
                    </ListItem>
					<ListItem button onClick={this.signOut}>
                        <Typography>登出</Typography>
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
                <Col span={6}>
                    <Grid justify='center' container>
                        <Menu
                        onClick={this.handleClick}           
                        selectedKeys={[this.state.current]}
                        mode="horizontal"
                        >
                            <Menu.Item key="/signin">
                                <Grid alignItems='center' style={styles.itemContainer} container>
                                    <Icon style={styles.iconBlack} type="user"/>
                                    <span style={styles.title}>登录</span>
                                </Grid>
                            </Menu.Item>
                            <Menu.Item key="/signUp">
                                <Grid alignItems='center' style={styles.itemContainer} container>
                                    <Icon style={styles.iconBlack} type="user-add"/>
                                    <span style={styles.title}>注册</span>
                                </Grid>
                            </Menu.Item>
                        </Menu>
                    </Grid>
                </Col>
            )
        }
        
        return (
        <Col span={6}>
            <Grid justify='center' container>
                <Menu mode="horizontal">
                <Button onClick={this.handleRightClick("notificationPopover")}>
                    <Grid alignItems='center' justify='center' container>
                        <Icon style={styles.iconBlack} type='notification'/>
                    </Grid>
                </Button>

                <Button variant='flat' onClick={this.handleRightClick("userPopover")}>
                    <Grid alignItems='center' justify='center' container>
                        {this.renderAvatar()}
                        <span style={styles.title}>{this.props.user.nickName}</span>
                    </Grid>
                </Button>
				</Menu>
            </Grid>
        </Col>
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
            if(e.key.indexOf('school')!=-1)  { 
                this.props.history.push('/school')//未写完所有页面，先修改跳转
            }
            else{
                this.props.history.push(e.key+'')
            }
        }
        else
            this.onClickClassroom(e)
    }
    
    render() {
        return(
        <Paper elevation={4} style={{marginBottom:8}}>
            <Row type='flex' justify="space-around">
                <Col span={20} type='flex'>
                    <Col span={3}>
                        <Button onClick={this.props.handleDrawer} style={styles.slogan}>
                            <img style={styles.logo} src={require("./src/logo-color.png")} />
                        </Button>
                    </Col>
            
                    <Col span={15}>
                    <Grid container justify='center' alignItems='center'>
                        <Menu
                        onClick={this.handleClick}
                        selectedKeys={[this.state.current]}
                        mode="horizontal"
                        >
                            <Menu.Item key="/courseSearch">
                                <Grid alignItems='center' style={styles.itemContainer} container>
                                    <Icon style={styles.icon} type="book"/>
                                    <span style={styles.title}>课程查询</span>
                                </Grid>
                            </Menu.Item>
                            <Menu.Item key="/classroom">
                                <Grid alignItems='center' style={styles.itemContainer} container>
                                    <Icon style={styles.icon} type="edit"/>
                                    <span style={styles.title}>我的课堂</span>
                                </Grid>
                            </Menu.Item>
                            <SubMenu 
                            title={<Grid alignItems='center' style={styles.itemContainer} container>
                            <Icon style={styles.icon} type="smile-o"/>
                            <span style={styles.title}>南大助手</span>
                            </Grid>}>
                                <Menu.Item key="/confess1"><span style={{fontSize:20}}>失物招领</span></Menu.Item>
                                <Menu.Item key="/confess2"><span style={{fontSize:20}}>寻人招人</span></Menu.Item>
                                <Menu.Item key="/confess3"><span style={{fontSize:20}}>一吐为快</span></Menu.Item>
                            </SubMenu>
                            <SubMenu 
                            title={<Grid alignItems='center' style={styles.itemContainer} container>
                            <Icon style={styles.icon} type="camera-o"/>
                            <span style={styles.title}>南大生活</span>
                            </Grid>}>
                                <Menu.Item key="/school1"><span style={{fontSize:20}}>自习研讨组队</span></Menu.Item>
                                <Menu.Item key="/school2"><span style={{fontSize:20}}>最近的校园活动</span></Menu.Item>
                                <Menu.Item key="/school3"><span style={{fontSize:20}}>TA的校园见闻</span></Menu.Item>
                            </SubMenu>
                         </Menu>
                         </Grid>
                    </Col>
                    {this.renderRight()}

                    {this.renderAlertPopover()}
                    {this.renderUserPopover()}
                    {this.renderWidgetsPopover()}
 
                </Col>
            </Row>
        </Paper>
        )
    }      

}


const styles = {

    typography: {
        marginTop: '5px',
    },

    title:{
        fontSize: '20px',
    },

    icon:{
        fontSize: 27, 
        color: '#0078d7' 
    },

    iconBlack:{
        fontSize: 27, 
        color: 'black' 
    },

    iconButton: {
        color: '#bcb8a8'
    },

    container: {
        shadowColor: 'black',
        shadowRadius:'3px',
        height: '70px',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },

    logo: {
        height:'43px',
        width:'80px'
    },

    subContainer: {
        height: '100%',
        alignItems: 'center'
    },

    itemContainer: {
        marginTop:'7px',
        marginBottom:"5px"
    },

    subRightContainer: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },


    avatar: {
        height:'40px'
    },

    slogan: {
        height: '100%',
    },

    text: {
        marginLeft: '10px'
    }

};


export default withRouter(connect(mapStateToProps)(Header));