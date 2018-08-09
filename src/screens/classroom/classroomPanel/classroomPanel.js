import React, { Component } from 'react';

export class ClassroomPanel extends Component {
    state = {  }
    render() {
        console.log(this.props.match.params.classroomId)
        return (
            <div>{this.props.match.params.classroomId}</div>
        );
    }
}