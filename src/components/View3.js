import React, {Component} from 'react';
import "antd/dist/antd.css";
import {Typography,Grid,Paper} from '@material-ui/core';
import {Button,Icon,Input,List,Card} from 'antd';
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
    {id:3,poster:"匿名用户",time:"今天 13:23",content:"发到邮箱里，昨晚已经截止了",thumblist:[],reviewlist:[]},
];
const data1thumb = [
    {id:1,poster:"hape",time:"今天 13:21"},
    {id:2,poster:"pikacho",time:"今天 13:22"},
    {id:3,poster:"匿名用户",time:"今天 13:23"},
];
const data = [
    {id:0,poster:"匿名用户",time:"今天 13:20",content:"请问今晚的东亚海域史作业的要求是什么？什么时候交呢。",thumblist:data1thumb,reviewlist:data1review},
    {id:1,poster:"匿名用户",time:"今天 13:20",content:"请问今晚的东亚海域史作业的要求是什么？什么时候交呢。",thumblist:[],reviewlist:[]},
    {id:2,poster:"匿名用户",time:"今天 13:20",content:"请问今晚的东亚海域史作业的要求是什么？什么时候交呢。",thumblist:[],reviewlist:[]},
    {id:3,poster:"匿名用户",time:"今天 13:20",content:"请问今晚的东亚海域史作业的要求是什么？什么时候交呢。",thumblist:[],reviewlist:[]},
    {id:4,poster:"匿名用户",time:"今天 13:20",content:"请问今晚的东亚海域史作业的要求是什么？什么时候交呢。",thumblist:[],reviewlist:[]},
    {id:5,poster:"匿名用户",time:"今天 13:20",content:"请问今晚的东亚海域史作业的要求是什么？什么时候交呢。",thumblist:[],reviewlist:[]},
    {id:6,poster:"匿名用户",time:"今天 13:20",content:"请问今晚的东亚海域史作业的要求是什么？什么时候交呢。",thumblist:[],reviewlist:[]},
    {id:7,poster:"匿名用户",time:"今天 13:20",content:"请问今晚的东亚海域史作业的要求是什么？什么时候交呢。",thumblist:[],reviewlist:[]},
];


//我不知道一开始是谁做这个的但这个任务中途交到我手上那我就要打爆那个人的头——Chirachiino


export class ListItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
          layout: 'grid',
          horizonData:[],
          gridData:data,
          refreshing: false,
        }
    }
/*
    //这几段网络请求一点注释都没有，谁知道在做什么？真以为每个程序员都是全栈吗，那我还是立即去世比较好
    
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
          startFetch(rowData, pageLimit);   //谁知道这在做什么？？
        })
        .catch((error) => {
          if (error) {
            abortFetch();
            console.log('error', error);
          }
      });
    };*/

    Item(id){
        return(
            <Paper elevation={24} style={styles.paper}>
                <Grid direction='row' style={{margin:10}} alignItems='center' container>
                    <Grid>
                        <Typography style={{fontSize:20}}>{this.state.gridData[id].poster}</Typography>
                        <Typography style={{fontSize:15,color:'#AAAAAA'}}>{this.state.gridData[id].time}</Typography>
                    </Grid>
                </Grid>
                <Typography style={{fontSize:20,margin:15}}>{this.state.gridData[id].content}</Typography>
                <Grid direction='row' justify='flex-end' container>
                    <Button shape="circle" icon="heart-o" style={{marginRight:5,borderColor:'#5190E4',color:'#5190E4'}} size='large'/>
                    <Button shape="circle" icon="upload" style={{marginRight:10,borderColor:'#5190E4',color:'#5190E4'}} size='large'/>
                </Grid>
                <Grid container>
                    <Grid style={{marginLeft:10}} alignItems='center' direction='row' container>
                        <Icon type="heart-o" style={{fontSize:15,margin:10,color:'#5190E4'}} />
                        <Typography style={{fontSize:15,color:'#5190E4'}}>{this.state.gridData[id].thumblist.length}</Typography>
                    </Grid>
                    <Grid style={{marginLeft:10,}} direction='row' container>
                        <Icon type="message" style={{fontSize:15,marginLeft:10,marginRight:10,color:'#5190E4',marginBottom:10}}/>
                        <Typography style={{fontSize:15,color:'#5190E4'}}>{this.state.gridData[id].reviewlist.length}</Typography>
                    </Grid>
                </Grid>
                <Grid style={{margin:10}} container>
                    <List
                        dataSource={this.state.gridData[id].reviewlist}
                        renderItem={item => (
                            <Grid direction='row' container>
                                <Typography style={styles.username_friends}>{item.poster}</Typography>
                                <Typography style={styles.content_friends}>{item.content}</Typography>
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

    render() {
        return (
            <List
                grid={{ gutter: 8, column: 3 }}
                dataSource={data}
                renderItem={item => (
                    <List.Item>
                        {this.Item(item.id)}
                    </List.Item>
                )}
            />
        );
    }
}


const styles = {
    paper:{
        margin:10,
        width:'80%',
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
    //注意到了吗！这种反人类的缩进方法，原本还有很多！
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
