import React, { Component } from 'react';


import Card from "./Card/Card.jsx";
import CardHeader from "./Card/CardHeader.jsx";
import CardBody from "./Card/CardBody.jsx";
import CardFooter from "./Card/CardFooter.jsx";

import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";


import ChartistGraph from "react-chartist";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";


import {
    dailySalesChart,
} from "../variables/charts";


class LineChart extends Component {
    state = {  }
    render() {
        const { classes } = this.props;
        return (
            <Card chart>
                <CardHeader color="success">
                    <ChartistGraph
                        className="ct-chart"
                        data={dailySalesChart.data}
                        type="Line"
                        options={dailySalesChart.options}
                        listener={dailySalesChart.animation}
                    />
                </CardHeader>
                <CardBody>
                    <h4 className={classes.cardTitle}>{this.props.title}</h4>
                    <p className={classes.cardCategory}>
                        <span className={classes.successText}>
                            <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                  </span>{" "}
                        increase in today sales.
                </p>
                </CardBody>
                <CardFooter chart>
                    <div className={classes.stats}>
                        <AccessTime /> updated 4 minutes ago
                </div>
                </CardFooter>
            </Card>
        );
    }
}



const dashboardStyle = {
    successText: {
        color: "#4caf50"
    },
    upArrowCardCategory: {
        width: "16px",
        height: "16px"
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
    cardCategory: {
        color: "#999999",
        margin: "0",
        fontSize: "14px",
        marginTop: "0",
        paddingTop: "10px",
        marginBottom: "0"
    },
    cardCategoryWhite: {
        color: "rgba(255,255,255,.62)",
        margin: "0",
        fontSize: "14px",
        marginTop: "0",
        marginBottom: "0"
    },
    cardTitle: {
        color: "#3C4858",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none",
        "& small": {
            color: "#777",
            fontSize: "65%",
            fontWeight: "400",
            lineHeight: "1"
        }
    },
    cardTitleWhite: {
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none",
        "& small": {
            color: "#777",
            fontSize: "65%",
            fontWeight: "400",
            lineHeight: "1"
        }
    }
};

export default withStyles(dashboardStyle)(LineChart);