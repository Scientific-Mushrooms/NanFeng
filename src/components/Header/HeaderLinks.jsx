import React from "react";
import classNames from "classnames";
import { Manager, Target, Popper } from "react-popper";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Hidden from "@material-ui/core/Hidden";
// @material-ui/icons
import Person from "@material-ui/icons/Person";
import Notifications from "@material-ui/icons/Notifications";
import Dashboard from "@material-ui/icons/Dashboard";
import Modal from '@material-ui/core/Modal';


import Button from "../../components/CustomButtons/Button.jsx";

import headerLinksStyle from "../../assets/jss/material-dashboard-react/components/headerLinksStyle";
import LoginBox from '../loginBox';



class HeaderLinks extends React.Component {
    state = {
      open: false
    };
    handleClick = () => {
      this.setState({ open: !this.state.open });
    };

    handleOpen = () => {
      this.setState({ open: true });
    };

    handleClose = () => {
      this.setState({ open: false });
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
                onClick={this.handleClick}
                className={classes.buttonLink}
              >
                <Notifications className={classes.icons} />
                <span className={classes.notifications}>5</span>
                <Hidden mdUp>
                  <p onClick={this.handleClick} className={classes.linkText}>
                    Notification
                  </p>
                </Hidden>
              </Button>
            </Target>
            <Popper
              placement="bottom-start"
              eventsEnabled={open}
              className={
                classNames({ [classes.popperClose]: !open }) +
                " " +
                classes.pooperResponsive
              }
            >
             
                <Grow
                  in={open}
                  id="menu-list"
                  style={{ transformOrigin: "0 0 0" }}
                >
                  <Paper className={classes.dropdown}>
                    <MenuList role="menu">
                      <MenuItem
                        onClick={this.handleClose}
                        className={classes.dropdownItem}
                      >
                        Mike John responded to your email
                      </MenuItem>
                      <MenuItem
                        onClick={this.handleClose}
                        className={classes.dropdownItem}
                      >
                        You have 5 new tasks
                      </MenuItem>
                      <MenuItem
                        onClick={this.handleClose}
                        className={classes.dropdownItem}
                      >
                        You're now friend with Andrew
                      </MenuItem>
                      <MenuItem
                        onClick={this.handleClose}
                        className={classes.dropdownItem}
                      >
                        Another Notification
                      </MenuItem>
                      <MenuItem
                        onClick={this.handleClose}
                        className={classes.dropdownItem}
                      >
                        Another One
                      </MenuItem>
                    </MenuList>
                  </Paper>
                </Grow>
        
            </Popper>
          </Manager>
          <Button
            color={window.innerWidth > 959 ? "transparent" : "white"}
            justIcon={window.innerWidth > 959}
            simple={!(window.innerWidth > 959)}
            aria-label="Person"
            className={classes.buttonLink}
          >
            <Person className={classes.icons} />
            <Hidden mdUp>
              <p className={classes.linkText}>Profile</p>
            </Hidden>
          </Button>


          
          <Modal
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              open={this.state.open}
              style={styles.modalContainer}
            disableAutoFocus={true}

          >
            <ClickAwayListener onClickAway={this.handleClose}>
            <LoginBox/>
            </ClickAwayListener>
          </Modal>
          

          
        </div>
      );
    }
}

const styles = {

  modal: {
    width: '200px',
    height: '200px',
    backgroundColor: 'white',
    marginTop: '100px'

  },

  modalContainer: {
    textAlign: 'center',
    justifyContent: 'center',
  }
};

export default withStyles(headerLinksStyle)(HeaderLinks);
