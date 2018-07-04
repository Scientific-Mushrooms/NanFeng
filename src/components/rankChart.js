import React, { Component } from 'react';


import Card from "./Card/Card.jsx";
import CardHeader from "./Card/CardHeader.jsx";
import CardBody from "./Card/CardBody.jsx";
import Table from "./Table/Table.jsx";


import withStyles from "@material-ui/core/styles/withStyles";




class RankChart extends Component {
    constructor(props) {
        super();
    }
    render() {
        const { classes } = this.props;
        return (
            <Card>
                <CardHeader color="warning">
                    <h4 className={classes.cardTitleWhite}>Squad Member Stats</h4>
                    <p className={classes.cardCategoryWhite}>
                        New member on 15th June, 2018
                    </p>
                </CardHeader>
                <CardBody>
                    <Table
                        tableHeaderColor="warning"
                        tableHead={["Rank", "Name", "Contribution"]}
                        tableData={this.props.data}
                    />
                </CardBody>
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

export default withStyles(dashboardStyle)(RankChart);