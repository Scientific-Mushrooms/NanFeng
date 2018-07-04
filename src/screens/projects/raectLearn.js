import React, {Component} from 'react';
import Grid from "@material-ui/core/Grid";
import CheckChart from '../../components/checkChart';


export class ReactLearn extends Component {
    render() {
        return (
            <Grid xs={12}>
                <CheckChart />
            </Grid>
        );
    }
}