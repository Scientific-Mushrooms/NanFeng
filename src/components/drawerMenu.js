import React, {Component} from 'react';
import ItemPage from './ItemPage';
import NewList from './NewList';
import {Drawer,Button} from '@material-ui/core';
import {Icon} from 'antd';

export default class drawerMenu extends Component {
  state = {
    left: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    return (
      <div>
        <Button onClick={this.toggleDrawer('left', true)}><Icon type="bars" style={{fontSize:20}}/></Button>
        <ItemPage/>
        <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            <NewList/>
          </div>
        </Drawer>
      </div>
    );
  }
}