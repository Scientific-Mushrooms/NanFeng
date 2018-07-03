import React, {Component} from "react";

import Icon from "@material-ui/core/Icon";
import Button from "../../components/CustomButtons/Button.jsx";
import LoginBox from '../loginBox';

import { loginBoxShow } from '../../redux/actions/action'

import { connect } from 'react-redux';
const mapStateToProps = state => ({
    user: state.userReducer.info,
    loginbox: state.modalReducer.loginbox,
})

class Header extends Component {

    handleUserButton = () => {
        if (this.props.user === null) {
            this.props.dispatch(loginBoxShow)
        }
    };

    render() {
        return (
            <div>    
                <Button
                    color={"transparent"}
                    justIcon={true}
                    >
                    <Icon>dashboard</Icon>
                </Button>

                <Button
                    color={"transparent"}
                    justIcon={true}
                    >
                    <Icon>notifications</Icon>
                    <span style={styles.notifications}>5</span>  
                </Button>
        
                <Button
                    color={"transparent"}
                    justIcon={true}
                    onClick={this.handleUserButton}
                    >
                    <Icon>person</Icon>
                </Button>

                <LoginBox/>
            </div>
        );
    }
}


const styles = {

    notifications: {
        zIndex: "4",
        position: "absolute",
        top: "2px",
        border: "1px solid #FFF",
        right: "4px",
        fontSize: "9px",
        background: "#f44336",
        color: "#FFFFFF",
        minWidth: "16px",
        height: "16px",
        borderRadius: "10px",
        textAlign: "center",
        lineHeight: "16px",
        verticalAlign: "middle",
        display: "block"
    },

};


export default connect(mapStateToProps)(Header);
