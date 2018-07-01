import React, { Component } from 'react';


import CustomTabs from "./CustomTabs/CustomTabs.jsx";
import Tasks from "./Tasks/Tasks.jsx";


import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";


var bugs = [
    'Sign contract for "What are conference organizers afraid of?"',
    "Lines From Great Russian Literature? Or E-mails From My Boss?",
    "Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit",
    "Create 4 Invisible User Experiences you Never Knew About"
];
var website = [
    "Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit",
    'Sign contract for "What are conference organizers afraid of?"'
];
var server = [
    "Lines From Great Russian Literature? Or E-mails From My Boss?",
    "Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit",
    'Sign contract for "What are conference organizers afraid of?"'
];
class CheckChart extends Component {
    state = {}
    render() {
        return (
            <CustomTabs
                title="Tasks:"
                headerColor="primary"
                tabs={[
                    {
                        tabName: "New",
                        tabIcon: BugReport,
                        tabContent: (
                            <Tasks
                                checkedIndexes={[0, 3]}
                                tasksIndexes={[0, 1, 2, 3]}
                                tasks={bugs}
                            />
                        )
                    },
                    {
                        tabName: "Progressing",
                        tabIcon: Code,
                        tabContent: (
                            <Tasks
                                checkedIndexes={[0]}
                                tasksIndexes={[0, 1]}
                                tasks={website}
                            />
                        )
                    },
                    {
                        tabName: "Complete",
                        tabIcon: Cloud,
                        tabContent: (
                            <Tasks
                                checkedIndexes={[1]}
                                tasksIndexes={[0, 1, 2]}
                                tasks={server}
                            />
                        )
                    }
                ]}
            />
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

export default CheckChart;