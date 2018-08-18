import {Icon,Button} from 'antd';
import React, {Component} from 'react';
import "antd/dist/antd.css";
import {Typography,Grid,Paper} from '@material-ui/core';

export default class rcmdCourse extends Component {

  render() {
    return (
      <Grid container>
        <Paper style={{width:'15%',alignItems:'center',justifyContent:'center'}}>
          <Typography style={{fontSize:25,marginLeft:10,marginBottom:7}}>推荐课程：</Typography>
          <Button href="https://www.baidu.com" target="_blank" rel="noopener noreferrer" style={{fontSize:20,marginLeft:10,borderWidth:0,padding:0,color:'#0096FF'}}>西方政治学说史</Button>
          <Grid direction='row' style={{alignItems:'center',marginBottom:10}} container>
            <Typography style={{fontSize:17,marginLeft:10,marginRight:3,}} >评分</Typography>
            <Icon type="like-o" style={{fontSize:17}} />
            <Typography style={{fontSize:17,}}>：93%</Typography>
          </Grid>
          <Button href="https://www.baidu.com" target="_blank" rel="noopener noreferrer" style={{fontSize:20,marginLeft:10,borderWidth:0,padding:0,color:'#0096FF'}}>离散数学</Button>
          <Grid direction='row' style={{alignItems:'center',marginBottom:10}} container>
            <Typography style={{fontSize:17,marginLeft:10,marginRight:3,}} >评分</Typography>
            <Icon type="like-o" style={{fontSize:17}} />
            <Typography style={{fontSize:17}}>：95%</Typography>
          </Grid>
        </Paper>
      </Grid>
    );
  }
}