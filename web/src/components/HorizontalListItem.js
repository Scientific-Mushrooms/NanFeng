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
      alignItems:'center',
      justifyContent: 'center',
      backgroundColor:'#EEEEEE',
      paddingLeft:10,
      paddingRight:10,
      paddingTop:5,
      paddingBottom:5,
      borderRadius:10,
      fontSize: 20,
      marginTop: 10,
      marginLeft:10,
      marginRight:10,
      paddingHorizontal:10,
      paddingVertical:5,
    },
    description:{
      color:"white",
      fontSize: 35,
      marginLeft:'10px'
    },
    title:{
      color:'white',
      fontSize: 50,
      marginLeft:'10px',
    },
  };
  