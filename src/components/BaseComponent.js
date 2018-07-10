import { Component } from 'react';
import { squadSet, rankChartSet } from '../redux/actions/action';


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
            if (result.status === 'fail') {
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
            if (result.status === 'fail') {
                alert(result.description);
            } else {
                dispatch(rankChartSet(result.detail));
            }
        })
    }

    

}




export default BaseComponent;