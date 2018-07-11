import React, {Component} from "react";

import Icon from "@material-ui/core/Icon";
import Button from "../../components/CustomButtons/Button.jsx";
import LoginBox from '../loginBox';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import { loginBoxShow } from '../../redux/actions/action'

import { connect } from 'react-redux';

const mapStateToProps = state => ({
    user: state.userReducer.info,
    loginbox: state.modalReducer.loginbox,
})

class Header extends Component {

    constructor(props){
        super(props);
        this.state={
            anchorEl: null
        }
    }

    handleNotifClick = event => {
    this.setState({
      anchorEl: event.currentTarget,
        });
    };


  handleNotifClose = () => {
    this.setState({
      anchorEl: null,
        });
    };

    handleUserButton = () => {
        if (this.props.user === null) {
            this.props.dispatch(loginBoxShow)
        }
    };

    render() {

        const { anchorEl } = this.state;
        return (
            <div>    
                <Button
                    color={"transparent"}
                    justIcon={true}
                    onClick = {this.props.handleDrawer}
                    >
                    <Icon>dashboard</Icon>
                </Button>

                <Button
                    color={"transparent"}
                    justIcon={true}
                    onClick={this.handleNotifClick}
                    variant="contained"
                    >
                    <Icon>notifications</Icon>
                    <span style={styles.notifications}>5</span>  
                </Button>
                <Popover
                  open={Boolean(anchorEl)}
                  anchorEl={anchorEl}
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
        
                <Button
                    color={"transparent"}
                    justIcon={true}
                    onClick={this.handleUserButton}
                    >
                    <Icon>person</Icon>
                </Button>

                <LoginBox/>
            </div>
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
    popoverItem:{
        margin:"10px",
        cursor:"pointer"
    }

};


export default connect(mapStateToProps)(Header);
