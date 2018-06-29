import React, {Component} from "react";
import { NavLink } from "react-router-dom";

import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

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
                        <prop.icon />
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
                    <div style={styles.logo}>
                        <a href="https://www.creative-tim.com" style={styles.logoLink}>
                            <div style={styles.logoImage}>
                                <img src={logo} alt="logo" style={styles.img} />
                            </div>
                            CODE SQUAD
                        </a>
                    </div>

                    <div style={styles.sidebarWrapper}>
                        <List style={styles.list}>
                            {this.props.routes.map(this.routesToList)}
                        </List>
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

    list: {
        marginTop: "20px",
        paddingLeft: "0",
        paddingTop: "0",
        paddingBottom: "0",
        marginBottom: "0",
        listStyle: "none",
        position: "unset"
    },

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
        fontSize: "14px",
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

    logo: {
        position: "relative",
        padding: "15px 15px",
        zIndex: "4",
        "&:after": {
            content: '""',
            position: "absolute",
            bottom: "0",

            height: "1px",
            right: "15px",
            width: "calc(100% - 30px)",
            backgroundColor: "rgba(180, 180, 180, 0.3)"
        }
    },

    sidebarWrapper: {
        position: "relative",
        height: "calc(100vh - 75px)",
        overflow: "auto",
        width: "260px",
        zIndex: "4",
        overflowScrolling: "touch"
    },

    logoLink: {
        ...defaultFont,
        textTransform: "uppercase",
        padding: "5px 0",
        display: "block",
        fontSize: "18px",
        textAlign: "left",
        fontWeight: "400",
        lineHeight: "30px",
        textDecoration: "none",
        backgroundColor: "transparent",
        "&,&:hover": {
            color: "#FFFFFF"
        }
    },

    logoImage: {
        width: "30px",
        display: "inline-block",
        maxHeight: "30px",
        marginLeft: "10px",
        marginRight: "15px"
    },

    img: {
        width: "35px",
        top: "22px",
        position: "absolute",
        verticalAlign: "middle",
        border: "0"
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
        "&:after": {
            position: "absolute",
            zIndex: "3",
            width: "100%",
            height: "100%",
            content: '""',
            display: "block",
            background: "#000",
            opacity: ".8"
        }
    },

}




