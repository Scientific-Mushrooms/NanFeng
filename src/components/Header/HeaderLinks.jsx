import React, {Component} from "react";
import { Manager, Target, Popper } from "react-popper";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Hidden from "@material-ui/core/Hidden";
// @material-ui/icons
import Person from "@material-ui/icons/Person";
import Notifications from "@material-ui/icons/Notifications";
import Dashboard from "@material-ui/icons/Dashboard";


import Button from "../../components/CustomButtons/Button.jsx";

import headerLinksStyle from "../../assets/jss/material-dashboard-react/components/headerLinksStyle";
import LoginBox from '../loginBox';

import {loginBoxHide, loginBoxShow} from '../../redux/actions/action'
import { connect } from 'react-redux';
const mapStateToProps = state => ({
    user: state.userReducer.info,
    loginbox: state.modalReducer.loginbox,
})

class HeaderLinks extends Component {
    state = {
      open: false
    };

    handleOpen = () => {
      this.props.dispatch(loginBoxShow)
    };

    handleClose = () => {
      this.props.dispatch(loginBoxHide)
    };

    render() {
      const { classes } = this.props;
      const { open } = this.state;
      return (
        <div>
          <div className={classes.searchWrapper}>
        </div>
          <Button
            color={window.innerWidth > 959 ? "transparent" : "white"}
            justIcon={window.innerWidth > 959}
            simple={!(window.innerWidth > 959)}
            aria-label="Dashboard"
            className={classes.buttonLink}
          >
            <Dashboard className={classes.icons} />
            
          </Button>
          <Manager className={classes.manager}>
            <Target>
              <Button
                color={window.innerWidth > 959 ? "transparent" : "white"}
                justIcon={window.innerWidth > 959}
                simple={!(window.innerWidth > 959)}
                aria-label="Notifications"
                aria-owns={open ? "menu-list" : null}
                aria-haspopup="true"
                onClick={this.handleOpen}
                className={classes.buttonLink}
              >
                <Notifications className={classes.icons} />
                <span className={classes.notifications}>5</span>
         
              </Button>
            </Target>
  
          </Manager>
          <Button
            color={window.innerWidth > 959 ? "transparent" : "white"}
            justIcon={window.innerWidth > 959}
            simple={!(window.innerWidth > 959)}
            aria-label="Person"
            className={classes.buttonLink}
            onClick={this.handleOpen}
          >
            <Person className={classes.icons} />
            <Hidden mdUp>
              <p className={classes.linkText}>Profile</p>
            </Hidden>
          </Button>
            <LoginBox/>
        </div>
      );
    }
}



export default connect(mapStateToProps)(withStyles(headerLinksStyle)(HeaderLinks));
