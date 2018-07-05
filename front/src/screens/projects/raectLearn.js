import React, {Component} from 'react';
import Grid from "@material-ui/core/Grid";
import CheckChart from '../../components/checkChart';
import TaskDetailBox from '../../components/taskDetailBox';
import { dataForTaskChartSet } from '../../redux/actions/action';


export class ReactLearn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            squad: { pendingNum: -1, progressingNum: -1, finishedNum: -1, bugNum: -1, },
        };
    }

    fetchDataForTaskChart = () => {
        this.fetchDataForTaskChartByType("392988bc-72e1-468f-8679-d6fc9948fe2f")
    }

    fetchDataForTaskChartByType = (projectId) => {
        let form = new FormData();
        form.append("projectId", projectId);

        this.post('/api/task/dataForTaskChart', form).then((result) => {
            if (result.status == 'fail') {
                alert(result.description);
            } else {
                this.props.dispatch(dataForTaskChartSet(result.detail))       
            }
        })
    }

    componentWillMount() {
        this.fetchDataForTaskChart();
    }

    post = (url, form) => {
        return fetch(url, { method: 'POST', body: form })
            .then((response) => (response.json()))
            .catch((error) => { console.error(error); });
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