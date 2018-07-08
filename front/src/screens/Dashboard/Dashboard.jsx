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
import BaseComponent from '../../components/BaseComponent';


export class Dashboard extends BaseComponent {

    constructor(props) {
        super(props);
        this.state = { 
            squad: null,
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

    componentWillMount() {
        this.fetchSquad()
        this.fetchDataForRankChart();
    }

    renderInfoCards() {
        if (this.state.squad === null) {
            return (
                <Grid container>
                    <GridItem xs={12} sm={6} md={3}>
                        <InfoCard color="info" icon="extension" title="Pending"  />
                    </GridItem>
                    <GridItem xs={12} sm={6} md={3}>
                        <InfoCard color="warning" icon="build" title="Progressing" />
                    </GridItem>
                    <GridItem xs={12} sm={6} md={3}>
                        <InfoCard color="success" icon="check_circle" title="finished" />
                    </GridItem>
                    <GridItem xs={12} sm={6} md={3}>
                        <InfoCard color="danger" icon="error" title="Bugs" />
                    </GridItem>
                </Grid>
            )
        } else {
            return (
                <Grid container>
                    <GridItem xs={12} sm={6} md={3}>
                        <InfoCard color="info" icon="extension" title="Pending" value={this.state.squad.pendingNum} />
                    </GridItem>
                    <GridItem xs={12} sm={6} md={3}>
                        <InfoCard color="warning" icon="build" title="Progressing" value={this.state.squad.progressingNum} />
                    </GridItem>
                    <GridItem xs={12} sm={6} md={3}>
                        <InfoCard color="success" icon="check_circle" title="finished" value={this.state.squad.finishedNum} />
                    </GridItem>
                    <GridItem xs={12} sm={6} md={3}>
                        <InfoCard color="danger" icon="error" title="Bugs" value={this.state.squad.bugNum} />
                    </GridItem>
                </Grid>
            )
        }
    }

    render() {

        return (
            <div>
                {this.renderInfoCards()}


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
