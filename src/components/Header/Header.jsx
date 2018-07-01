import React, {Component} from "react";


import withStyles from "@material-ui/core/styles/withStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import HeaderLinks from "./HeaderLinks";

import headerStyle from "../../assets/jss/material-dashboard-react/components/headerStyle.jsx";

class Header extends Component {

  
    render(){
        return (
            <AppBar className={this.props.classes.appBar}>
                <Toolbar className={this.props.classes.container}>
                    <div className={this.props.classes.flex}>
                    </div>
                    <HeaderLinks />
                </Toolbar>
            </AppBar>
        );
    }
}



export default withStyles(headerStyle)(Header);
