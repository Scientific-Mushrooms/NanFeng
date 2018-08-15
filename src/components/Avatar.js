import React, { Component } from 'react';

export class Avatar extends Component {

    state = {  }

    styles = {
        container: {
            height: this.props.size,
            width: this.props.size,
            // margin: '10px',
        },

        image: {
            height: this.props.size,
            width: this.props.size,
            borderRadius: this.props.shape === 'square' ? '10%' : '50%',
        }
    }

    render() {
        return (
            <div style={this.styles.container}>
                <img src={this.props.src} style={this.styles.image}/>
            </div>
        );
    }
}