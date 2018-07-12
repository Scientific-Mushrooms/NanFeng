import React from 'react';
import Grid from "@material-ui/core/Grid";
import CheckChart from '../../components/checkChart';
import TaskDetailBox from '../../components/boxes/taskDetailBox';
import BaseComponent from '../../components/BaseComponent';

export class TaskBoard extends BaseComponent {

    componentWillMount() {
        this.fetchDataForTaskChart("392988bc-72e1-468f-8679-d6fc9948fe2f", this.props.dispatch)
    }

    render() {
        return (
            <Grid xs={12}>
                <CheckChart data={{
                    pending: this.props.dataForTaskChart.pending,
                    progressing: this.props.dataForTaskChart.progressing,
                    finished: this.props.dataForTaskChart.finished,
                    bugs: this.props.dataForTaskChart.bugs,
                    }}/>
                <TaskDetailBox/>
            </Grid>
        );
    }
}