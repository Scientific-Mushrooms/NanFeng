import React, {Component} from 'react';
import Grid from "@material-ui/core/Grid";
import CheckChart from '../../components/checkChart';
import TaskDetailBox from '../../components/taskDetailBox';


var data1 = [{
    taskKey: 1002,
    title: 'Sign contract for "What are conference organizers afraid of?"',
    status: "pending",
    level: 'hard',
    date: '7.3',
    creatorId: 'clavier'
}]

var data2 = [{
        taskKey: 2,
        title: 'Sign contract for "What are conference organizers afraid of?"',
        type: "finished",
        level: 'easy',
        date: '7.4',
        creatorId: 'saber'
    }]

export class ReactLearn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            squad: { pendingNum: -1, progressingNum: -1, finishedNum: -1, bugNum: -1, },
            pending: data1,
            progressing: data2,
            finished: data1,
            bugs: data2,
        };
    }

    fetchDataForTaskChart = () => {
        this.fetchDataForTaskChartByType("392988bc-72e1-468f-8679-d6fc9948fe2f", "pending")
        this.fetchDataForTaskChartByType("392988bc-72e1-468f-8679-d6fc9948fe2f", "progressing")
        this.fetchDataForTaskChartByType("392988bc-72e1-468f-8679-d6fc9948fe2f", "finished")
        this.fetchDataForTaskChartByType("392988bc-72e1-468f-8679-d6fc9948fe2f", "bugs")
    }

    fetchDataForTaskChartByType = (projectId, type) => {
        let form = new FormData();
        form.append("projectId", projectId);
        form.append("type", type);

        this.post('/api/task/dataForTaskChart', form).then((result) => {
            if (result.status == 'fail') {
                alert(result.description);
            } else {
                this.setState({
                    [type]: result.detail,
                })
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
                    pending: this.state.pending,
                    progressing: this.state.progressing,
                    finished: this.state.finished,
                    bugs: this.state.bugs,
                    }}/>
                <TaskDetailBox/>
            </Grid>
        );
    }
}