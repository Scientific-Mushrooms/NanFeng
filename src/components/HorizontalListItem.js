import React, {Component} from 'react';
import "antd/dist/antd.css";
import {Typography,Grid,Paper} from '@material-ui/core';

export default class HorizontalListItem extends Component {

    render() {
      return (
        <Paper elevation={24} style={styles.paper}>
          <Grid style={styles.container} container>
            <Grid style={styles.imageContainer} direction='column' container>
                <Typography style={styles.text_on_image} align='center'>标签</Typography>
                <Typography style={styles.title}>标题</Typography>
                <Typography style={styles.description}>副标题</Typography>
            </Grid>
          </Grid>
        </Paper>
      );
    }
  }
  
  const styles={
    paper:{
      margin:10,
      width:'45%',
      borderRadius:15,
      backgroundColor: '#FFFFFF',
    },
    container: {
      width:null,
      borderRadius:15,
      backgroundColor: '#FFFFFF',
    },
    imageContainer:{
      width:null,
      height:300,
      borderRadius:15,
      backgroundImage: "url("+require("./src/upload1.jpg")+")",
      alignItems:"flex-start",
      justifyContent:"flex-end"
    },
    text_on_image:{
      backgroundColor:'#EEEEEE',
      borderRadius:8,
      fontSize: 13,
      width:null,
      marginTop:'10px',
      marginLeft: '10px',
      paddingLeft:6,
      paddingRight:6,
      paddingTop:3,
      paddingBottom:3,
      paddingHorizontal:10,
      paddingVertical:5,
    },
    description:{
      color:"white",
      fontSize: 35,
      marginLeft:'10px'
    },
    title:{
      marginTop:'20px',
      color:'white',
      fontSize: 50,
      marginLeft:'10px',
    },
  };
  