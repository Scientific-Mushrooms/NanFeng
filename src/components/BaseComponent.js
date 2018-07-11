import { Component } from 'react';
import { squadSet, rankChartSet, dataForTaskChartSet, taskDetailBoxHide } from '../redux/actions/action';


export class BaseComponent extends Component {

    ip = "http://www.clavier.moe:8080";
    

    post = (url, form) => {
        return fetch(url, { method: 'POST', body: form})
            .then((response) => (response.json()))
            .catch((error) => { console.error(error); });
    }


    fetchSquad = (squadId, dispatch) => {
        let form = new FormData();
        form.append("squadId", squadId);
        this.post(this.ip + '/api/squad/squadIdToSquad', form).then((result) => {
            if (!result){
                alert("connection to server error")
            } else if (result.status === 'fail') {
                alert("result.description");
            } else {
                dispatch(squadSet(result.detail));
            }
            
        })
    }

    fetchRankChart = (squadId, dispatch) => {
        let form = new FormData();
        form.append("squadId", squadId);
        this.post(this.ip + '/api/squadMember/squadIdToDataForRankChart', form).then((result) => {
            if (!result){
                alert("connection to server error")
            } else if(result.status === 'fail') {
                alert(result.description);
            } else {
                dispatch(rankChartSet(result.detail));
            }
            
        })
    }

    fetchDataForTaskChart = (projectId, dispatch) => {
        let form = new FormData();
        form.append("projectId", projectId);

        this.post(this.ip + '/api/task/dataForTaskChart', form).then((result) => {
            if (!result) {
                alert("connection to server error")
            } else if (result.status === 'fail') {
                alert(result.description);
            } else {
                dispatch(dataForTaskChartSet(result.detail))
            }
        })
    }


    updateTaskType = (taskId, type, dispatch) => {
        let form = new FormData();
        form.append("taskId", taskId);
        form.append("type", type);
        this.post(this.ip + '/api/task/updateTypeByTaskId', form).then((result) => {
            if (!result) {
                alert("connection to server error")
            } else if (result.status === 'fail') {
                alert(result.description);
            } else {
                this.fetchDataForTaskChart("392988bc-72e1-468f-8679-d6fc9948fe2f", this.props.dispatch)
                dispatch(taskDetailBoxHide())
            }
        })
    }

    

}




export default BaseComponent;