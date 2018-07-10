import React from "react";
import BaseComponent from '../../components/BaseComponent';

import Grid from "@material-ui/core/Grid";

import GridItem from "../../components/Grid/GridItem.jsx";


import LineChart from '../../components/lineChart';
import BarChart from '../../components/barChart';
import RankChart from '../../components/rankChart';
import InfoCard from "../../components/infoCard";




export class Dashboard extends BaseComponent {

    dispatch = (action) => {
        this.props.dispatch(action);
    }

    async componentWillMount() {
        await this.fetchSquad("8073c598-674c-40a7-9fc8-611a82823944", this.dispatch)
        await this.fetchRankChart("8073c598-674c-40a7-9fc8-611a82823944", this.dispatch);
    }

    render() {

        return (
            <div>
                <Grid container>
                    <GridItem xs={12} sm={6} md={3}>
                        <InfoCard color="info" icon="extension" title="Pending" value={this.props.squad === null ? "" : this.props.squad.pendingNum} />
                    </GridItem>
                    <GridItem xs={12} sm={6} md={3}>
                        <InfoCard color="warning" icon="build" title="Progressing" value={this.props.squad === null ? "" : this.props.squad.progressingNum} />
                    </GridItem>
                    <GridItem xs={12} sm={6} md={3}>
                        <InfoCard color="success" icon="check_circle" title="finished" value={this.props.squad === null ? "" : this.props.squad.finishedNum} />
                    </GridItem>
                    <GridItem xs={12} sm={6} md={3}>
                        <InfoCard color="danger" icon="error" title="Bugs" value={this.props.squad === null ? "" : this.props.squad.bugNum} />
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
                        <RankChart data={this.props.rankChart === null ? [] : this.props.rankChart}/>
                    </Grid>
                </Grid>
            </div>
        );
    }
}
