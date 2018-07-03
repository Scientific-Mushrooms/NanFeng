import React, {Component} from "react";

import Grid from "@material-ui/core/Grid";

import GridItem from "../../components/Grid/GridItem.jsx";


import LineChart from '../../components/lineChart';
import BarChart from '../../components/barChart';
import RankChart from '../../components/rankChart';
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

export class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            squad: null,
            pendingNum: -1,
            progressingNum: -1,
            finishedNum: -1,
            bugNum: -1,
        };
    }


    post = (url, form) => {
        return fetch(url, { method: 'POST', body: form })
            .then((response) => (response.json()))
            .catch((error) => { console.error(error); });
    }

    componentWillMount() {
        let form = new FormData();
        form.append("id", "a79f86c3-5bc5-48d3-bf95-84dd5c58e959");

        this.post('/api/squad/findById', form).then((result) => {
            if (result.status == 'fail') {
                alert(result.description);
            } else {
                const squad = result.detail
                this.setState({ 
                    squad: squad,
                    pendingNum: squad.pendingNum,
                    progressingNum: squad.progressingNum,
                    finishedNum: squad.finishedNum,
                    bugNum: squad.bugNum,
                })
            }
        })
    }

    render() {

        return (
            <div>

                <Grid container>
                    <GridItem xs={12} sm={6} md={3}>
                        <InfoCard color="info" icon="extension" title="Pending" value={this.state.pendingNum}/>
                    </GridItem>

                    <GridItem xs={12} sm={6} md={3}>
                        <InfoCard color="warning" icon="build" title="Progressing" value={this.state.progressingNum}/>
                    </GridItem>

                    <GridItem xs={12} sm={6} md={3}>
                        <InfoCard color="success" icon="check_circle" title={JSON.stringify(this.state.squad)} value={this.state.finishedNum}/>
                    </GridItem>

                    <GridItem xs={12} sm={6} md={3}>
                        <InfoCard color="danger" icon="error" title={JSON.stringify(this.props.user)} value={this.state.bugNum}/>
                    </GridItem>
                </Grid>


                <Grid container>

                    <Grid xs={8}>
                        <GridItem xs={12}>
                            <LineChart title='Daily Finished'/>
                        </GridItem>
                        <GridItem xs={12}>
                            <BarChart/>
                        </GridItem>
                    </Grid>
                    
                    <Grid xs={4}>
                        <RankChart data={data}/>
                    </Grid>

                </Grid>
            </div>
        );
    }
}

var data = [
    ["1", "Clavier", "666"],
    ["2", "Minerva Hooper", "233"],
    ["3", "Sage Rodriguez", "131"],
    ["4", "Philip Chaney", "10"],
]