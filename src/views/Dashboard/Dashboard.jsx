import React, {Component} from "react";

import ChartistGraph from "react-chartist";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";


import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";


import GridItem from "../../components/Grid/GridItem.jsx";
import Table from "../../components/Table/Table.jsx";
import Tasks from "../../components/Tasks/Tasks.jsx";
import CustomTabs from "../../components/CustomTabs/CustomTabs.jsx";
import Card from "../../components/Card/Card.jsx";
import CardHeader from "../../components/Card/CardHeader.jsx";
import CardBody from "../../components/Card/CardBody.jsx";
import CardFooter from "../../components/Card/CardFooter.jsx";


import LineChart from '../../components/lineChart';
import InfoCard from "../../components/infoCard";
import {
    dailySalesChart,
    emailsSubscriptionChart,
} from "../../variables/charts";


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


var data = [
  ["1", "Clavier", "666"],
  ["2", "Minerva Hooper", "233"],
  ["3", "Sage Rodriguez", "131"],
  ["4", "Philip Chaney", "10"],
]

class Dashboard extends Component {

  render() {
    const { classes } = this.props;
    return (
      <div>

        <Grid container>

          <GridItem xs={12} sm={6} md={3}>
              <InfoCard color="info" icon="extension" title="Pending" value="32"/>
          </GridItem>

          <GridItem xs={12} sm={6} md={3}>
            <InfoCard color="warning" icon="build" title="Progressing" value="32"/>
          </GridItem>

          <GridItem xs={12} sm={6} md={3}>
            <InfoCard color="success" icon="check_circle" title="Finished" value="23"/>
          </GridItem>

          <GridItem xs={12} sm={6} md={3}>
            <InfoCard color="danger" icon="error" title="Bugs" value="32"/>
          </GridItem>

        </Grid>


        <Grid container>

          <GridItem  xs={8}>
            <GridItem xs={12}>

            <LineChart/>



            </GridItem>

            <GridItem xs={12}>
              <Card chart>
                <CardHeader color="warning">
                  <ChartistGraph
                    className="ct-chart"
                    data={emailsSubscriptionChart.data}
                    type="Bar"
                    options={emailsSubscriptionChart.options}
                    responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                    listener={emailsSubscriptionChart.animation}
                  />
                </CardHeader>
                <CardBody>
                  <h4 className={classes.cardTitle}>Email Subscriptions</h4>
                  <p className={classes.cardCategory}>
                    Last Campaign Performance
                </p>
                </CardBody>
                <CardFooter chart>
                  <div className={classes.stats}>
                    <AccessTime /> campaign sent 2 days ago
                </div>
                </CardFooter>
              </Card>
            </GridItem>
          </GridItem>
          

          
         
          <GridItem xs={12} sm={12} md={4}>
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
                  tableData={data}
                />
              </CardBody>
            </Card>
          </GridItem>

          
          



        </Grid>



        <Grid container>
          <GridItem xs={12} sm={12} md={6}>
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
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Card>
              <CardHeader color="warning">
                <h4 className={classes.cardTitleWhite}>Employees Stats</h4>
                <p className={classes.cardCategoryWhite}>
                  New employees on 15th September, 2016
                </p>
              </CardHeader>
              <CardBody>
                <Table
                  tableHeaderColor="warning"
                  tableHead={["ID", "Name", "Salary", "Country"]}
                  tableData={data}
                />
              </CardBody>
            </Card>
          </GridItem>
        </Grid>
      </div>
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


export default withStyles(dashboardStyle)(Dashboard);
