import React, {Component} from 'react';
import "antd/dist/antd.css";
import {Typography,Grid} from '@material-ui/core';
import {Button} from 'antd';

export default class ListItem extends Component {
  state = {
    size: 'large',
  };

  handleText(str){
    if(str.length>20){
      return str.substr(0,20)+"...";
    }else{
      return str;
    }
  }

  render() {
    const size = this.state.size;
    return (
      <Grid style={styles.container} direction='column' container>
        <Grid style={styles.imageContainer} container>
          <Typography style={styles.text_on_image} align='center'>分享</Typography>
        </Grid>
        <Typography style={styles.description}>{this.handleText(text)}</Typography>
        <Grid style={styles.buttonContainer} container>
          <Button icon="like"  style={{borderWidth:0,}} size='large'/>
          <Typography style={styles.num}>11</Typography>
          <Button icon="upload" style={{borderWidth:0,}} size='large'/>
          <Typography style={styles.num}>8</Typography>
        </Grid>
      </Grid>
    );
  }
}

const text="此处为一段描述文字此处为一段描述文字此处为一段描述文字此处为一段描述文字";

const styles = {
  container: {
    elevation:10,
    marginVertical:5,
    marginLeft:8,
    width:'45%',
    borderRadius:8,
    backgroundColor: '#FFFFFF',
  },
  imageContainer: {
    backgroundImage: "url("+require("./resource/Back_login.png")+")",
    width:null,
    height:300,
    borderRadius:10,
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
    marginHorizontal: 5,
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

