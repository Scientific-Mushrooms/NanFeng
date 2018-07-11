import React, { Component } from "react";

import classNames from "classnames";

import withStyles from "@material-ui/core/styles/withStyles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import Card from "../../components/Card/Card.jsx";
import CardBody from "../../components/Card/CardBody.jsx";
import CardHeader from "../../components/Card/CardHeader.jsx";


import { IconButton, Icon } from '@material-ui/core';


class CustomTabs extends Component {

    state = {
      value: 0
    };

    handleChange = (event, value) => {
      this.setState({ value });
    };

    render() {

        const {
            classes,
            headerColor,
            tabs,
            title,
        } = this.props;

        const cardTitle = classNames({
            [classes.cardTitle]: true,
        });

        return (
            <Card>
                <CardHeader color={headerColor}>
                    {title !== undefined ? (
                        <div className={cardTitle}>{title}</div>
                    ) : null}
                    <Tabs
                        value={this.state.value}
                        onChange={this.handleChange}
                        classes={{
                          root: classes.tabsRoot,
                          indicator: classes.displayNone
                        }}
                        scrollable
                        scrollButtons="auto"
                    >
                      {tabs.map((prop, key) => {
                        var icon = {};
                        if (prop.tabIcon) {
                          icon = {
                            icon: <prop.tabIcon />
                          };
                        }
                        return (
                          <Tab
                            classes={{
                              root: classes.tabRootButton,
                              labelContainer: classes.tabLabelContainer,
                              label: classes.tabLabel,
                              selected: classes.tabSelected,
                              wrapper: classes.tabWrapper
                            }}
                            key={key}
                            label={prop.tabName}
                            {...icon}
                          />
                        );
                      })}
                    <IconButton><Icon>add</Icon></IconButton>
                    </Tabs>
                </CardHeader>
                <CardBody>
                    {tabs.map((prop, key) => {
                        if (key === this.state.value) {
                            return <div key={key}>{prop.tabContent}</div>;
                        }
                          return null;
                    })}
                    
                </CardBody>
            </Card>
        );
    }
}

const customTabsStyle = {
    cardTitle: {
        float: "left",
        padding: "10px 10px 10px 0px",
        lineHeight: "24px"
    },
    cardTitleRTL: {
        float: "right",
        padding: "10px 0px 10px 10px !important"
    },
    displayNone: {
        display: "none !important"
    },
    tabsRoot: {
        minHeight: "unset !important"
    },
    tabRootButton: {
        minHeight: "unset !important",
        minWidth: "unset !important",
        width: "unset !important",
        height: "unset !important",
        maxWidth: "unset !important",
        maxHeight: "unset !important",
        padding: "10px 15px",
        borderRadius: "3px",
        lineHeight: "24px",
        border: "0 !important",
        color: "#fff !important",
        marginLeft: "4px",

    },
    tabLabelContainer: {
        padding: "0px"
    },
    tabLabel: {
        fontWeight: "500",
        fontSize: "12px"
    },
    tabSelected: {
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        transition: "0.2s background-color 0.1s"
    },
    tabWrapper: {
        display: "inline-block",
        minHeight: "unset !important",
        minWidth: "unset !important",
        width: "unset !important",
        height: "unset !important",
        maxWidth: "unset !important",
        maxHeight: "unset !important",

    }
};


export default withStyles(customTabsStyle)(CustomTabs);
