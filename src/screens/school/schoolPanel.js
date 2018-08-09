import React, {Component} from 'react';
import "antd/dist/antd.css";
import ListItem from '../../components/ListItem';
import HorizontalListItem from '../../components/HorizontalListItem';
import {Typography,Grid,Button} from '@material-ui/core';
import { Anchor,Divider } from 'antd';

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
            <Anchor style={{backgroundColor:'rgba(0,0,0,0)'}} offsetTop={300}>
                <Grid container>
                    <Grid xs={2}/>
                    <Grid xs={10} direction='column' container>
                        <a onClick={()=>this.scrollToAnchor('study')}>
                            <Button style={{borderWidth:0,fontSize:25}}>自习 研讨 组队</Button>
                        </a>
                        <a onClick={()=>this.scrollToAnchor('activity')}>
                            <Button style={{borderWidth:0,fontSize:25}}>最近的校园生活</Button>
                        </a>
                        <a onClick={()=>this.scrollToAnchor('share')}>
                            <Button style={{borderWidth:0,fontSize:25}}>TA的校园见闻</Button>
                        </a>
                    </Grid>
                </Grid>
            </Anchor>
        );
    }

    render() {
        return (
    <Grid justify='center' container>
        <Grid xs={2} style={{marginTop:400}}> 
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
};


