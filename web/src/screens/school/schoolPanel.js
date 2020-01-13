import React, {Component} from 'react';
import "antd/dist/antd.css";
import ListItem from '../../components/ListItem';
import HorizontalListItem from '../../components/HorizontalListItem';
import {Typography,Grid,Card,Icon,Paper} from '@material-ui/core';
import { Anchor,Divider,Button } from 'antd';

const { Link } = Anchor;
export class SchoolPanel extends Component {

    scrollToAnchor = (id) => {
        if (id) {
            let anchorElement = document.getElementById(id);
            if(anchorElement) { anchorElement.scrollIntoView({behavior: 'smooth'}); }
        }
      }

    renderAnchor(){
        return(
            <Anchor style={{backgroundColor:'rgba(0,0,0,0)'}} offsetTop={150}>
                        <Paper elevation={10} style={{height:'100%',margin:15}}>
                           <Grid xs={12} direction='column' container>
                                <a onClick={()=>this.scrollToAnchor('study')}>
                                    <Button icon="form" style={{...styles.listElement, marginTop:'1em'}}>自习 研讨 组队</Button>
                                </a>
                                <a onClick={()=>this.scrollToAnchor('activity')}>
                                    <Button icon="calendar" style={{...styles.listElement, marginTop:'1em', marginBottom:'1em'}}>最近的校园生活</Button>
                                </a>
                                <a onClick={()=>this.scrollToAnchor('share')}>
                                    <Button icon="camera-o" style={{...styles.listElement, marginBottom:'1em'}}>TA的校园见闻</Button>
                                </a>
                            </Grid>
                        </Paper>
            </Anchor>
        );
    }

    render() {
        return (
    <Grid justify='center' container>
        <Grid xs={2} style={{marginTop:300}}> 
        {this.renderAnchor()}
        </Grid>
        <Grid xs={8}>
            <Typography id="study" style={styles.titles}>自习 研讨 组队</Typography>
            <Grid direction='row' style={styles.container} container>
                <HorizontalListItem/>
                <HorizontalListItem/>
            </Grid>
            <Typography id="activity" style={styles.titles}>最近的校园活动</Typography>
            <Grid direction='row' style={styles.container} container>
                <HorizontalListItem/>
                <HorizontalListItem/>
            </Grid>
            <Typography id="share" style={styles.titles}>TA的校园见闻</Typography>
            <Grid direction='row' style={styles.container} container>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
            </Grid>
        </Grid>
        <Grid xs={2}/> 
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
    marginBottom:50,
    justifyContent:'space-around',
  },
  listElement:{
    borderWidth:0,
    fontSize:25,
     whiteSpace: 'normal',
     height:"100%"
  }
};


