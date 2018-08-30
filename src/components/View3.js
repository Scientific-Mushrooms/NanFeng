import React, {Component} from 'react';
import "antd/dist/antd.css";
import {Typography,Grid,Paper,Avatar} from '@material-ui/core';
import {Button,Icon,Input,List,Card} from 'antd';
import BaseComponent from "./BaseComponent";
import moment from 'moment';
import 'moment/locale/zh-cn';
const { TextArea } = Input;
const datap = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
];
const data1review = [
    {id:1,poster:"匿名用户",time:"今天 13:21",content:"有点意思",thumblist:[],reviewlist:[]},
    {id:2,poster:"匿名用户",time:"今天 13:22",content:"上周没来上课吗？",thumblist:[],reviewlist:[]},
    {id:3,poster:"匿名用户",time:"今天 13:23",content:"发到邮箱，昨晚截止了",thumblist:[],reviewlist:[]},
];
const data1thumb = [
    {id:1,poster:"hape",time:"今天 13:21"},
    {id:2,poster:"pikacho",time:"今天 13:22"},
    {id:3,poster:"匿名用户",time:"今天 13:23"},
];
const data1 = [];
const data2 = [];
const data3 = [];

export class ListItem extends BaseComponent {
    constructor(props) {
        super(props)
        this.state = {
            layout: 'grid',
            horizonData:[],
            tagToData:[],
            refreshing: false,
            _data : [],
            _id:0,
            tag:"all"
        }
    }

    componentWillMount() {
        let form = new FormData();
        form.append("test","");
        this.post('/api/confess/all', form).then((result) => {
            this.setState({_data:result.detail,tagToData:result.detail});
        })
    }

    componentDidMount(){
        this.props.onRef(this)
    }
    setTag(newTag){
        var tagToData=[];
        var _tag=[];
        for (var i=0;i<this.state._data.length;i++){
            if (this.state._data[i].type==newTag||newTag=="all") {
                tagToData=tagToData.concat(this.state._data[i]);
            }
        }
        this.setState({tagToData:tagToData});
    }
    /*

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
        };*/

    Review(source){
        if (source!=null){
            return(
                <List
                    dataSource={source}
                    renderItem={item => (
                        <Grid direction='row' container>
                            <Typography style={styles.username_friends}>{item.poster+"："}</Typography>
                            <Typography style={styles.content_friends}>{item.content}</Typography>
                        </Grid>
                    )}
                />
            )
        }
    }

    Item(item){
        var _date=new String(item.date);
        _date=moment(item.date).calendar();
        console.info(this.state.tagToData);
        return(
            <Paper elevation={24} style={styles.paper}>
                <Grid direction='row' style={{margin:10}} alignItems='center' container>
                    <Avatar style={{margin: 10, color: '#fff', backgroundColor:'#4d0099',}}>N</Avatar>
                    <Grid>
                        <Typography style={{marginTop:5,fontSize:20}}>{item.anonymous?"匿名用户":item.userId}</Typography>
                        <Typography style={{fontSize:15,color:'#AAAAAA'}}>{_date}</Typography>
                    </Grid>
                </Grid>
                <Typography style={{fontSize:20,margin:15}}>{item.content}</Typography>
                <Grid direction='row' justify='flex-end' container>
                    <Button shape="circle" icon="heart-o" style={{marginRight:5,borderColor:'#5190E4',color:'#5190E4'}} size='large'/>
                    <Button shape="circle" icon="upload" style={{marginRight:10,borderColor:'#5190E4',color:'#5190E4'}} size='large'/>
                </Grid>
                <Grid container>
                    <Grid style={{marginLeft:10}} alignItems='center' direction='row' container>
                        <Icon type="heart-o" style={{fontSize:15,margin:10,color:'#5190E4'}} />
                        <Typography style={{fontSize:15,color:'#5190E4'}}>{item.love}</Typography>
                    </Grid>
                    <Grid style={{marginLeft:10,}} direction='row' container>
                        <Icon type="message" style={{fontSize:15,marginLeft:10,marginRight:10,color:'#5190E4',marginBottom:10}}/>
                        <Typography style={{fontSize:15,color:'#5190E4'}}>0</Typography>
                    </Grid>
                </Grid>
                <Grid style={{margin:10}} container>
                    {this.Review(item.reviewlist)}
                </Grid>
                <Grid justify='center' container>
                    <TextArea placeholder="评论..." style={{width:'96%',margin:5,backgroundColor:'#EFEFEF',}} autosize={{ minRows: 1, maxRows: 6 }}/>
                </Grid>
            </Paper>
        );

    }

    render() {
        return (
            <Grid direction='row' container>
                <List
                    style={{width:'30%'}}
                    grid={{ column: 1 }}
                    dataSource={this.state.tagToData}
                    renderItem={(item) => (
                        this.state.tagToData.indexOf(item)%3==0?<List.Item>{this.Item(item)}</List.Item>:<div></div>
                    )}
                />
                <List
                    style={{width:'30%'}}
                    grid={{ column: 1 }}
                    dataSource={this.state.tagToData}
                    renderItem={(item) => (
                        this.state.tagToData.indexOf(item)%3==1?<List.Item>{this.Item(item)}</List.Item>:<div></div>
                    )}
                />
                <List
                    style={{width:'30%'}}
                    grid={{ column: 1 }}
                    dataSource={this.state.tagToData}
                    renderItem={(item) =>(
                        this.state.tagToData.indexOf(item)%3==2?<List.Item>{this.Item(item)}</List.Item>:<div></div>
                    )}
                />
            </Grid>
        );
    }
}


const styles = {
    paper:{
        margin:10,
        width:'90%',
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

/*
<Paper elevation={24} style={styles.paper}>
        <Grid direction='row' style={{margin:10}} alignItems='center' container>
            <Grid>
                <Typography style={{fontSize:20}}>匿名用户</Typography>
                <Typography style={{fontSize:15,color:'#AAAAAA'}}>今天 13:20</Typography>
            </Grid>
        </Grid>
        <Typography style={{fontSize:20,margin:15}}>请问今晚的东亚海域史作业的要求是什么？什么时候交呢。</Typography>
        <Grid direction='row' justify='flex-end' container>
            <Button shape="circle" icon="heart-o" style={{marginRight:5,borderColor:'#5190E4',color:'#5190E4'}} size='large'/>
            <Button shape="circle" icon="upload" style={{marginRight:10,borderColor:'#5190E4',color:'#5190E4'}} size='large'/>
        </Grid>
        <Grid container>
            <Grid style={{marginLeft:10}} alignItems='center' direction='row' container>
                <Icon type="heart-o" style={{fontSize:15,margin:10,color:'#5190E4'}} />
                <Typography style={{fontSize:15,color:'#5190E4'}}>11人觉得很赞</Typography>
            </Grid>
            <Grid style={{marginLeft:10,}} direction='row' container>
                <Icon type="message" style={{fontSize:15,marginLeft:10,marginRight:10,color:'#5190E4',marginBottom:10}}/>
                <Typography style={{fontSize:15,color:'#5190E4'}}>2条评论回复</Typography>
            </Grid>
        </Grid>
        <Grid style={{margin:10}} container>
            <List
                dataSource={datap}
                renderItem={item => (
                    <Grid direction='row' container>
                        <Typography style={styles.username_friends}>用户：</Typography>
                        {item}
                    </Grid>
                )}
            />
        </Grid>
        <Grid justify='center' container>
            <TextArea placeholder="评论..." style={{width:'96%',margin:5,backgroundColor:'#EFEFEF',}} autosize={{ minRows: 1, maxRows: 6 }}/>
        </Grid>
      </Paper>

*/
