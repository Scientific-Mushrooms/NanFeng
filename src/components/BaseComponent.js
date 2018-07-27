import { Component } from 'react';
import { squadSet, rankChartSet, dataForTaskChartSet, taskDetailBoxHide, show_notification, hide_notification } from '../redux/actions/action';


export class BaseComponent extends Component {

    // server
    // ip = "http://www.clavier.moe:8080";
    
    // local
    ip = "http://localhost:8080"; 

    

    post = (url, form) => {
        return fetch(this.ip + url, { method: 'POST', body: form, header: { 'content-type': 'multipart/form-data'}})
            .then((response) => (response.json()))
            .catch((error) => { console.error(error); });
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    getImagePath = (imageId) => {
        return this.ip + "/api/image/" + imageId;
    }

    pushNotification = (kind, reason, dispatch) => {
        dispatch(show_notification(kind, reason))
        setTimeout(
            function () {
                dispatch(hide_notification())
            },
            4000
        );
    }


    fetchSquad = (squadId, dispatch) => {
        let form = new FormData();
        form.append("squadId", squadId);
        this.post('/api/squad/squadIdToSquad', form).then((result) => {
            if (!result){
                this.pushNotification("danger","Connection to server failed",this.props.dispatch);
            } else if (result.status === 'fail') {
                this.pushNotification("danger",result.description,this.props.dispatch);
            } else {
                dispatch(squadSet(result.detail));
            }
            
        })
    }

    fetchRankChart = (squadId, dispatch) => {
        let form = new FormData();
        form.append("squadId", squadId);
        this.post('/api/squadMember/squadIdToDataForRankChart', form).then((result) => {
            if (!result){
                this.pushNotification("danger","Connection to server failed",this.props.dispatch);
            } else if(result.status === 'fail') {
                this.pushNotification("danger",result.description,this.props.dispatch);
            } else {
                dispatch(rankChartSet(result.detail));
            }
            
        })
    }

    fetchDataForTaskChart = (projectId, dispatch) => {
        let form = new FormData();
        form.append("projectId", projectId);

        this.post('/api/task/dataForTaskChart', form).then((result) => {
            if (!result) {
                this.pushNotification("danger","Connection To Server Failed",this.props.dispatch);
            } else if (result.status === 'fail') {
                this.pushNotification("danger",result.description,this.props.dispatch);
            } else {
                dispatch(dataForTaskChartSet(result.detail))
            }
        })
    }


    updateTaskType = (taskId, type, dispatch) => {
        let form = new FormData();
        form.append("taskId", taskId);
        form.append("type", type);
        this.post('/api/task/updateTypeByTaskId', form).then((result) => {
            if (!result) {
                this.pushNotification("danger","Connection To Server Failed",this.props.dispatch);
            } else if (result.status === 'fail') {
                this.pushNotification("danger",result.description,this.props.dispatch);
            } else {
                this.fetchDataForTaskChart("392988bc-72e1-468f-8679-d6fc9948fe2f", this.props.dispatch)
                dispatch(taskDetailBoxHide())
            }
        })
    }

    

}




export default BaseComponent;