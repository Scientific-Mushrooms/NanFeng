import React, { Component } from 'react';

import CardHeader from "./Card/CardHeader.jsx";
import CardIcon from "./Card/CardIcon.jsx";
import CardFooter from "./Card/CardFooter.jsx";

import Icon from "@material-ui/core/Icon";


class InfoCard extends Component {
    
    render() {
        return (
            <div style={styles.card}>
                <CardHeader stats icon>
                <div style={styles.header}>
                    <div style={styles.headerLeft}>
                        <CardIcon color={this.props.color}>
                            <Icon style={styles.icon}>{this.props.icon}</Icon>
                        </CardIcon>
                    </div>
                    <div style={styles.headerRight}>
                        <p style={styles.title}>{this.props.title}</p>
                        <p style={styles.value}>{this.props.value}</p>
                    </div>
                    </div>
                </CardHeader>
                <CardFooter stats>
                    <div style={styles.stats}>
                        <Icon>date_range</Icon>
                        <div style={styles.date}>{JSON.stringify(new Date())}</div>
                    </div>
                </CardFooter>
            </div>
        );
    }
}

const styles = {

    card: {
        border: "0",
        marginBottom: "30px",
        marginTop: "30px",
        borderRadius: "6px",
        color: "rgba(0, 0, 0, 0.87)",
        background: "#fff",
        width: "100%",
        boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.14)",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        minWidth: "0",
        wordWrap: "break-word",
        fontSize: ".875rem"
    },

    title: {
        color: "#999999",
        fontSize: "19px",
        textAlign: 'center',
    },

    stats: {
        color: "#999999",
        display: "inline-flex",
        fontSize: "12px",
        lineHeight: "22px",
        "& svg": {
            top: "4px",
            width: "16px",
            height: "16px",
            position: "relative",
            marginRight: "3px"
        }
    },

    value: {
        color: "#3C4858",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none",
        textAlign: 'center',
        fontSize: "19px",
        color: "#999999",
    },

    icon: {
        fontSize: "50px"
    },

    headerLeft: {
        width: '50%',
        height: '100%',
        float: 'left',
    },

    headerRight: {
        width: '50%',
        height: '100%',
        float: 'left'
    },

    header: {
        float: 'left',
        width: '100%'
    },

    date: {
        paddingLeft: '10px'
    }
}


export default InfoCard;