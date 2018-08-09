import React, {Component} from 'react';
import "antd/dist/antd.css";
import {Typography,Grid,Paper} from '@material-ui/core';
import {Button} from 'antd';

export default class ListItem extends Component {

  handleText(str){
    if(str.length>20){
      return str.substr(0,20)+"...";
    }else{
      return str;
    }
  }

  render() {
    return (
      <Paper elevation={24} style={styles.paper}>
        <Grid style={styles.container} direction='column' container>
          <Grid style={styles.imageContainer} container>
            <Typography style={styles.text_on_image} align='center'>分享</Typography>
          </Grid>
          <Typography style={styles.description}>{this.handleText(text)}</Typography>
          <Grid style={styles.buttonContainer} container>
            <Button icon="like"  style={{borderWidth:0,marginLeft:10}} size='large'/>
            <Typography style={styles.num}>11</Typography>
            <Button icon="upload" style={{borderWidth:0,}} size='large'/>
            <Typography style={styles.num}>8</Typography>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

const text="此处为一段描述文字此处为一段描述文字此处为一段描述文字此处为一段描述文字";

const styles = {
  paper:{
    margin:10,
    width:'30%',
    borderRadius:15,
    backgroundColor: '#FFFFFF',
  },
  container: {
    width:null,
    borderRadius:15,
    backgroundColor: '#FFFFFF',
  },
  imageContainer: {
    backgroundImage: "url("+require("./src/upload1.jpg")+")",
    width:null,
    height:300,
    borderTopLeftRadius:15,
    borderTopRightRadius:15,
    alignItems:'flex-end',
    justifyContent: 'flex-end',
    backgroundColor: '#FFF',
  },
  ImageBackground_style:{
    width:'100%',
  },
  text_on_image:{
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor:'#EEEEEE',
    borderRadius:8,
    width:'40px',
    fontSize: 13,
    margin: 10,
    paddingHorizontal:10,
    paddingVertical:5,
  },
  description:{
    width:null,
    fontSize: 25,
    marginLeft: 10,
    marginTop:20,
  },
  num:{
    fontSize: 20,
    margin: 5,
  },

  icon:{
    margin:5,
    width:'5%',
  },

  buttonContainer:{
    Direction: 'row',
  },
};

