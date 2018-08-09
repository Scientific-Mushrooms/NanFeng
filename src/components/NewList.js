import React, {Component} from 'react';
import { Typography,Grid } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import {Icon} from 'antd';

export default class NewList extends Component {
  render() {
    return (
      <div>
        <List component="nav">
          <ListItem>
            <Grid direction='column' container>
                <img src={require('../resource/4.png')} style={{width:'100px',height:'100px'}}/>
                <Typography style={{fontSize:20}}>用户名</Typography>
            </Grid>
          </ListItem>
          <ListItem button>
            <Grid style={styles.container} container>
                <Icon type="line-chart" style={styles.Icon}/>
                <Typography style={styles.title}>统计数据</Typography>
            </Grid>
          </ListItem>
          <ListItem button>
            <Grid style={styles.container} container>
                <Icon type="calendar" style={styles.Icon}/>
                <Typography style={styles.title}>校历</Typography>
            </Grid>
          </ListItem>
          <ListItem button>
            <Grid style={styles.container} container>
                <Icon type="star-o" style={styles.Icon}/>
                <Typography style={styles.title}>我的收藏</Typography>
            </Grid>
          </ListItem>
          <ListItem button>
            <Grid style={styles.container} container>
                <Icon type="edit" style={styles.Icon}/>
                <Typography style={styles.title}>修改个人信息</Typography>
            </Grid>
          </ListItem>
          <ListItem button>
            <Grid style={styles.container} container>
                <Icon type="setting" style={styles.Icon}/>
                <Typography style={styles.title}>设置</Typography>
            </Grid>
          </ListItem>
          <ListItem button>
            <Grid style={styles.container} container>
                <Icon type="logout" style={styles.Icon}/>
                <Typography style={styles.title}>登出</Typography>
            </Grid>
          </ListItem>
        </List>
      </div>
    );
  }
}

const styles={
    container:{
        alignItems:'center',
    },
    Icon:{
        fontSize:17,
    },
    title:{
        fontSize:17,
        marginLeft:10,
    },
};  