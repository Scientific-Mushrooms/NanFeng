import React, {Component} from 'react';
import "antd/dist/antd.css";
import {TextField,Grid,Typography} from '@material-ui/core';
import {Card,Button,Icon,Input} from 'antd';
import Dropzone from 'react-dropzone';
import request from 'superagent';

const { TextArea } = Input;
const CLOUDINARY_UPLOAD_PRESET = 'your_upload_preset_id';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/your_cloudinary_app_name/upload';

export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uploadedFileCloudinaryUrl: ''
    };
  }

  onImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
    });
    this.handleImageUpload(files[0]);
  }
    
  handleImageUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
    .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
    .field('file', file);
    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }
      if (response.body.secure_url !== '') {
        this.setState({
          uploadedFileCloudinaryUrl: response.body.secure_url
        });
      }
    });
  }

  render() {
    return (
      <Grid sm={6} direction='column' justify='center' container>
        <div className="FileUpload">
        </div>
        <div>
          {this.state.uploadedFileCloudinaryUrl === '' ? null :
          <div>
            <p>{this.state.uploadedFile.name}</p>
            <img src={this.state.uploadedFileCloudinaryUrl} />
          </div>
          }
        </div>
        <Card>
          <Grid>
          <Dropzone
            multiple={false}
            accept="image/*"
            style={{height:null}}
            >
            <Grid style={styles.dropzone} direction='column' justify='center' container>
              <Icon type="plus" style={{fontSize:30,color:'#CFCFCF',marginBottom:10}}/>
              <Typography style={{color:'#CFCFCF',fontSize:20,}}>拖拽图片到此处或者轻按来上传照片</Typography>
            </Grid>
          </Dropzone>
          <TextField
              id="title"
              label="标题"
              margin="normal"
              style={{width:'100%'}}
            />
            <TextArea
              autosize={{ minRows: 3, maxRows: 6 }}
              placeholder="（正文）分享让您印象深刻的旅行故事，比如有趣的瞬间，新奇的发现，让人回味的体验。"
              style={{width:'100%',fontSize:17,marginBottom:10,}}
            />
            <Grid justify='flex-end' container>
              <Button type="normal" shape='circle' size="large" style={styles.button}>
                <Icon type="clock-circle-o" />
              </Button>  
              <Button type="normal" shape='circle' size="large" style={styles.button}>
                <Icon type="user" />
              </Button>  
              <Button type="normal" shape='circle' size="large" style={styles.button}>
                <Icon type="link" />
              </Button>
              <Button type="primary" shape='circle' size="large" style={styles.button}>
                <Icon type="arrow-up" />
              </Button>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    );
  }
}

const styles = {
  paper:{
    margin:10,
    width:'100%',
    borderRadius:15,
    backgroundColor: '#FFFFFF',
  },
  button: {
    marginLeft:10,
    marginTop:5,
  },
  container:{
    margin:10,
    width:'70%',
    borderRadius:15,
    borderWidth:'4px',
    backgroundColor: '#FFFFFF',
  },
  input:{
    margin:20,
    width:'90%',
  },
  dropzone:{
    width:'60%',
    height:'150px',
    borderWidth:'2px',
    borderColor:'#CFCFCF',
    borderRadius:10,
    borderStyle:'dashed',
    justifyContent:'center',
    alignItems:'center',
  },
};