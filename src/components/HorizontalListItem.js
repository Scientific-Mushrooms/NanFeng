import React, {Component} from 'react';
import "antd/dist/antd.css";
import {Typography,Grid} from '@material-ui/core';

export default class HorizontalListItem extends Component {

    render() {
      return (
        <Grid style={styles.container} container>
            <Grid style={styles.imageContainer} direction='column' container>
                <Typography style={styles.text_on_image} align='center'>标签</Typography>
                <Typography style={styles.title}>标题</Typography>
                <Typography style={styles.description}>副标题</Typography>
            </Grid>
        </Grid>
      );
    }
  }
  
  const styles={
    container: {
      elevation:15,
      marginVertical:5,
      marginLeft:10,
      width:"50%",
      borderRadius:5,
      backgroundColor: '#FFFFFF',
    },
    imageContainer:{
      backgroundImage: "url("+require("./resource/Back_login.png")+")",
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
  