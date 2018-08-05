import { Component } from 'react';
import { show_notification, hide_notification, set_instructor } from '../redux/actions/action';


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
    

}




export default BaseComponent;