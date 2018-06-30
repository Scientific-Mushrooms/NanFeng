import React, {Component} from "react";

import Grid from "@material-ui/core/Grid";


import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";


import GridItem from "../../components/Grid/GridItem.jsx";


import LineChart from '../../components/lineChart';
import BarChart from '../../components/barChart';
import RankChart from '../../components/rankChart';
import CheckChart from '../../components/checkChart';
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

                    <GridItem xs={8}>
                        <GridItem xs={12}>
                            <LineChart title='Daily Finished'/>
                        </GridItem>
                        <GridItem xs={12}>
                            <BarChart/>
                        </GridItem>
                    </GridItem>
                    
                    <GridItem xs={4}>
                        <RankChart/>
                    </GridItem>

                </Grid>

                <Grid container>
                    <GridItem cs={12}>
                        <CheckChart/>
                    </GridItem>
                </Grid>
            </div>
        );
    }
}



export default Dashboard;
