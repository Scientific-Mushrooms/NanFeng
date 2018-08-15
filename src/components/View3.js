import React, {Component} from 'react';
import "antd/dist/antd.css";
import {Typography,Grid,Paper} from '@material-ui/core';
import {Button,Icon,Input,List} from 'antd';
const { TextArea } = Input;
const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ];

export default class ListItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
          layout: 'grid',
          horizonData:[],
          gridData:[],
          refreshing: false,
        }
      }
    
    
      componentWillMount() {
        //防止卡死的多次请求，故性能可能会有点差
        //待优化
        fetch('http://118.25.56.186/data/', {
            method: 'GET',
            headers: {
                  'Content-Type': 'application/json'
            }
            }).then((response) => response.json())
            .then((response) => {
                var json = response;
                this.setState({
                  horizonData: json,
                });
            })
            .catch((error) => {
                if (error) {
                    console.log('error', error);
                }
            });
      }
    
      onFetch_Horizon=()=>{
        fetch('http://118.25.56.186/data', {
          method: 'GET',
          headers: {
                'Content-Type': 'application/json'
          }
          }).then((response) => response.json())
          .then((response) => {
              var json = response;
              this.setState({
                horizonData: json,
              });
          })
          .catch((error) => {
              if (error) {
                  console.log('error', error);
              }
          });
      }
    
    
      onFetch = async(page = 1, startFetch, abortFetch) => {
        fetch('http://118.25.56.186/data', {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json'
            }
            }).then((response) => response.json())
            .then((response) => {
              let pageLimit = 40;
              var json = response;
              this.setState({
                gridData: json,
              });
              let rowData =this.state.gridData
              startFetch(rowData, pageLimit);
            })
            .catch((error) => {
              if (error) {
                abortFetch();
                console.log('error', error);
              }
          });   
      };

  render() {
    return (
      <Paper elevation={24} style={styles.paper}>
        <Grid direction='row' style={{margin:10}} alignItems='center' container>
            <img src={require('../resource/4.png')} style={{width:'60px',height:'60px'}}/>
            <Grid>
                <Typography style={{fontSize:20}}>匿名用户</Typography>
                <Typography style={{fontSize:15,color:'#AAAAAA'}}>今天 13:20</Typography>
            </Grid>
        </Grid>
        <Typography style={{fontSize:20,margin:15}}>请问今晚的东亚海域史作业的要求是什么？什么时候交呢。</Typography>
        <Grid direction='row' justify='flex-end' container>
            <Button shape="circle" icon="heart-o" style={{marginRight:5}} size='large'/>
            <Button shape="circle" icon="upload" style={{marginRight:10}} size='large'/>
        </Grid>
        <Grid container>
            <Grid style={{marginLeft:10}} alignItems='center' direction='row' container>
                <Icon type="heart-o" style={{fontSize:15,margin:10}} />
                <Typography style={{fontSize:15}}>11人觉得很赞</Typography>
            </Grid>
            <Grid style={{marginLeft:10,}} direction='row' container>
                <Icon type="message" style={{fontSize:15,marginLeft:10,marginRight:10,marginBottom:10}}/>
                <Typography style={{fontSize:15}}>2条评论回复</Typography>
            </Grid>
        </Grid>
        <Grid style={{margin:10}} container>
            <List
                dataSource={data}
                renderItem={item => (
                    <Grid direction='row' container>
                        <Typography style={styles.username_friends}>用户：</Typography>
                        <Typography style={styles.content_friends}>hhhhhh</Typography>
                    </Grid>
                )}
            />
        </Grid>
        <Grid justify='center' container>
            <TextArea placeholder="评论..." style={{width:'96%',margin:5,backgroundColor:'#EFEFEF',}} autosize={{ minRows: 1, maxRows: 6 }}/>
        </Grid>
      </Paper>
    );
  }
}


const styles = {
    paper:{
        margin:10,
        width:'48%',
        borderRadius:15,
        backgroundColor: '#FFFFFF',
      },
    username_friends:{
        marginLeft:10,
        marginTop:5,
        marginRight:5,
        color:"#268BD2",
        fontSize:15,
      },
      content_friends:{
        marginTop:5,
        color:"#000000",
        fontSize:15,
      },
};

