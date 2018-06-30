import React, {Component} from 'react';
import Grid from "@material-ui/core/Grid";
import CheckChart from '../../components/checkChart';
import GridItem from "../../components/Grid/GridItem.jsx";

export class Home extends Component {
    state = {  }
    render() {
        return (
            <div>
                <Grid container>
                    <GridItem cs={12}>
                        <CheckChart />
                    </GridItem>
                </Grid>
            </div>
        );
    }
}