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


export class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            squad: { pendingNum: -1, progressingNum: -1, finishedNum: -1, bugNum: -1,},
            dataForRankChart: [{ ranking: "1", name: "Clavier", contribution: "666" }],
            lineChartData: null,
            barChartData: null,
        };
    }

    fetchSquad = () => {
        let form = new FormData();
        // squad ID, gonna replace later
        form.append("id", "8073c598-674c-40a7-9fc8-611a82823944");

        this.post('/api/squad/findById', form).then((result) => {
            if (result.status == 'fail') {
                alert("result.description");
            } else {
                this.setState({
                    squad: result.detail,
                })
            }
        })
    }

    fetchDataForRankChart = () => {
        let form = new FormData();
        form.append("squadId", "8073c598-674c-40a7-9fc8-611a82823944");

        this.post('/api/squadMember/rankChart', form).then((result) => {
            if (result.status == 'fail') {
                alert(result.description);
            } else {
                this.setState({
                    dataForRankChart: result.detail,
                })
            }
        })
    }

    post = (url, form) => {
        return fetch(url, { method: 'POST', body: form })
            .then((response) => (response.json()))
            .catch((error) => { console.error(error); });
    }

    componentWillMount() {
        this.fetchSquad()
        this.fetchDataForRankChart();
    }

    render() {
        return (
            <div>
                <Grid container>
                    <GridItem xs={12} sm={6} md={3}>
                        <InfoCard color="info" icon="extension" title="Pending" value={this.state.squad.pendingNum}/>
                    </GridItem>

                    <GridItem xs={12} sm={6} md={3}>
                        <InfoCard color="warning" icon="build" title="Progressing" value={this.state.squad.progressingNum}/>
                    </GridItem>

                    <GridItem xs={12} sm={6} md={3}>
                        <InfoCard color="success" icon="check_circle" title="finished" value={this.state.squad.finishedNum}/>
                    </GridItem>

                    <GridItem xs={12} sm={6} md={3}>
                        <InfoCard color="danger" icon="error" title="Bugs" value={this.state.squad.bugNum}/>
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
                        <RankChart data={this.state.dataForRankChart}/>
                    </Grid>
                </Grid>
            </div>
        );
    }
}
