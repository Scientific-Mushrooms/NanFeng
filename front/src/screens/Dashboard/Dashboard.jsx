import React from "react";
import BaseComponent from '../../components/BaseComponent';

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
import { squadSet } from '../../redux/actions/action';



export class Dashboard extends BaseComponent {

    constructor(props) {
        super(props);
        this.state = { 
            dataForRankChart: [{ ranking: "1", name: "Clavier", contribution: "666" }],
        };
    }

    fetchSquad = (squadId) => {
        let form = new FormData();
        form.append("squadId", squadId);
        this.post('/api/squad/squadIdToSquad', form).then((result) => {
            if (result.status == 'fail') {
                alert("result.description");
            } else {
                this.props.dispatch(squadSet(result.detail));
            }
        })
    }

    fetchDataForRankChart = (squadId) => {
        let form = new FormData();
        form.append("squadId", squadId);
        this.post('/api/squadMember/squadIdToDataForRankChart', form).then((result) => {
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
        this.fetchSquad("8073c598-674c-40a7-9fc8-611a82823944")
        this.fetchDataForRankChart("8073c598-674c-40a7-9fc8-611a82823944");
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
                        <RankChart data={this.state.dataForRankChart}/>
                    </Grid>
                </Grid>
            </div>
        );
    }
}
