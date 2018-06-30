import React, {Component} from "react";
import { NavLink } from "react-router-dom";

import Drawer from "@material-ui/core/Drawer";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";

import image from "./src/background_1.jpg";
import logo from './src/logo.png';

export default class SideBar extends Component {

    activeRoute = (routeName) => {
        return this.props.location.pathname.indexOf(routeName) > -1 ? true : false;
    }

    routesToList = (prop, key) => {
        return (
            <NavLink to={prop.path} style={styles.item} activeClassName="active" key={key}>
                <ListItem button style={this.activeRoute(prop.path) ? styles.selectedItemLink : styles.itemLink} >
                    <ListItemIcon style={styles.itemIcon}>
                        <Icon>{prop.icon}</Icon>
                    </ListItemIcon>
                    <ListItemText primary={prop.sidebarName} style={styles.itemText} disableTypography={true} />
                </ListItem>
            </NavLink>
        );
    }

    render() {
        return (
            <div>
                <Drawer  variant="permanent" open>

                    <div style={styles.sidebarWrapper}>    
                        {this.props.routes.map(this.routesToList)}
                    </div>
                    
                    <div style={{ ...styles.background, backgroundImage: "url(" + image + ")"}}/> 
                </Drawer>
            </div>
        );
    }
};


const defaultFont = {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: "300",
    lineHeight: "1.5em"
};

const styles = {

    itemLink: {
        width: "auto",
        transition: "all 300ms linear",
        margin: "10px 15px 0",
        borderRadius: "3px",
        position: "relative",
        display: "block",
        padding: "10px 15px",
        backgroundColor: "transparent",
        ...defaultFont
    },

    selectedItemLink: {
        width: "auto",
        transition: "all 300ms linear",
        margin: "10px 15px 0",
        borderRadius: "3px",
        position: "relative",
        display: "block",
        padding: "10px 15px",
        backgroundColor: "#00acc1",
        ...defaultFont
    },

    itemIcon: {
        width: "24px",
        height: "30px",
        float: "left",
        marginRight: "15px",
        textAlign: "center",
        verticalAlign: "middle",
        color: "rgba(255, 255, 255, 0.8)"
    },

    itemText: {
        ...defaultFont,
        margin: "0",
        lineHeight: "30px",
        fontSize: "18px",
        color: "#FFFFFF"
    },

    item: {
        position: "relative",
        display: "block",
        textDecoration: "none",
        "&:hover,&:focus,&:visited,&": {
            color: "#FFFFFF"
        }
    },

    header: {
        position: "relative",
        paddingTop: '40px',
        paddingBottom: '20px',
        zIndex: "4",
    },

    sidebarWrapper: {
        position: "relative",
        height: "calc(100vh - 75px)",
        overflow: "auto",
        width: "300px",
        zIndex: "4",
        overflowScrolling: "touch"
    },


    img: {
        width: "35px",
        top: "22px",
        verticalAlign: "middle",
        border: "0",
        float: 'left',
        paddingRight: '15px'
    },

    background: {
        position: "absolute",
        zIndex: "1",
        height: "100%",
        width: "100%",
        display: "block",
        top: "0",
        left: "0",
        backgroundSize: "cover",
        backgroundPosition: "center center",
    },

    title: {
        fontSize: '25px',
        float: 'left',
        color: 'white'
    },


}




