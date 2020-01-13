import React, {Component} from 'react';
import "antd/dist/antd.css";
import ListItem from './ListItem';
import HorizontalListItem from './HorizontalListItem';
import {Typography,Grid} from '@material-ui/core';

export default class ItemPage extends Component {

  render() {
    return (
      <Grid>
        <Typography style={styles.titles}>最近的校园活动</Typography>
        <Grid direction='row' style={styles.container} container>
          <HorizontalListItem/>
          <HorizontalListItem/>
        </Grid>
        <Typography style={styles.titles}>TA的校园见闻</Typography>
        <Grid direction='row' style={styles.container} container>
          <ListItem/>
          <ListItem/>
        </Grid>
      </Grid>
    );
  }
}

const styles={
  titles:{
    marginLeft:10,
    marginTop:10,
    fontSize:40,
  },
  container:{
    justifyContent:'space-around',
  },
};
  