import { Component } from 'react';
import {notification} from 'antd';
import { Switch, Route, Redirect } from "react-router-dom";

var moment = require('moment');

export class BaseComponent extends Component {

    // server
      ip = "http://www.clavier.moe:8080";
    
    // local
    //ip = "http://localhost:8080";  


    post = (url, form) => {
        return fetch(this.ip + url, { method: 'POST', body: form, header: { 'content-type': 'multipart/form-data'}})
            .then((response) => (response.json()))
            .catch((error) => { console.error(error); });
    }

    newPost = (url, form, successAction) => {
        return fetch(this.ip + url, { method: 'POST', body: form, header: { 'content-type': 'multipart/form-data' } })
            .then((response) => (response.json()))
            .catch((error) => { console.error(error); })
            .then((result) => {

                if (!result) {
                    console.log(result)
                    this.pushNotification("danger", "连接错误");
                    return;
                }

                if (result.status === 'fail') {
                    console.log(result)
                    this.pushNotification("danger", result.description);
                    return;
                }

                if (result.status === 'success') {
                    successAction(result);
                    return;
                } 

                alert(JSON.stringify(result))
                this.pushNotification("danger", result.description);
            });
    }

    fromNow = (date) => {
        return moment(date).fromNow()
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    getImagePath = (imageId) => {
        return this.ip + "/api/image/" + imageId;
    }

    studentIdToImage = (studentId) => {
        return this.ip + "/api/image/studentIdToAvatar/" + studentId;
    }

    hasErrors(fieldsError) {
        return Object.keys(fieldsError).some(field => fieldsError[field]);
    }

    pushNotification = ( kind, reason ) => {
        notification.config({
            placement: 'topRight',
            top: 80,
            duration: 4,
        });
        if(kind=='danger')
            notification.warning({
            message:reason,
            description:"发生问题",
            })
        else if(kind=='success')
            notification.success({
            message:reason,
            description:"成功"
            })
        else
            notification.open({
            message:reason,
            description:""
            })
    }
    

}




export default BaseComponent;