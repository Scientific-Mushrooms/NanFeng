import { Component } from 'react';
import {notification} from 'antd'
//import { show_notification, hide_notification, set_instructor } from '../redux/actions/action';


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

    hasErrors(fieldsError) {
        return Object.keys(fieldsError).some(field => fieldsError[field]);
    }

    pushNotification = (kind, reason, dispatch) => {
        notification.config({
            placement: 'topRight',
            top: 80,
            duration: 4,
        });
        if(kind=='danger')
            notification.warning({
            message:reason,
            description:"Oops,a danger problem!",
            })
        else if(kind=='success')
            notification.success({
            message:reason,
            description:"Success!"
            })
        else
            notification.open({
            message:reason,
            description:""
            })
    }
    

}




export default BaseComponent;