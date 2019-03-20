import React from 'react';
import {Card, Button} from 'antd';
import marked from 'marked';

import axios from 'axios';
import './writeBlog.scss';
import '../css/styleInit.css';

import { Input, Table, Divider, Tag, Modal, Icon } from 'antd';
import { template } from 'handlebars';

const { confirm } = Modal;

export default class WriteBlog extends React.Component {
    state = {
        data:{
            title: '',
            content: ''
        },
        pagination: {},
        
      }
    // 解析markdown
    plainMdToHtml(){
        let content = marked(this.state.data.content||'');
        return {__html:content };
    }
    inputChange(e){
        let data = Object.assign(this.state.data, {
            content: e.target.value
        })
        this.setState({data});
    }
    titleChange(e){
        this.setState({data:{
            content: this.state.data.content,
            title: e.target.value
        }})
    }

    submit(){
        if(!this.state.data.content){
            alert('请填写内容')
        }
        else if(!this.state.data.title){
            alert('请填写标题');
        }
        const params = {
            content: this.state.data.content,
            title: this.state.data.title,
            tags: '',
            online: 1
        }
        axios.post('http://localhost:3001/addBlog', params).then(res=>{
            debugger
        })
    }
    render(){
        return (<div>
            <Card>
                <p>
                    <h5>博客标题：</h5>
                <Input placeholder="不超过120字" value={this.state.data.title} onChange={this.titleChange.bind(this)}/>
                </p>
                <div>
                    <h5>标签选择：</h5>
                    <div className='tags'>
                        <span>一个标签</span>
                        <span><Icon type="plus" /></span>
                    </div>
                </div>
                <div>
                    <h5>博客正文：</h5>
                    <div className='content-area'>
                        <div>
                            <textarea className='input-box'  value={this.state.data.content} onChange={this.inputChange.bind(this)}>
                            </textarea>
                        </div>
                        <div className='markdown-body' dangerouslySetInnerHTML={this.plainMdToHtml()}></div>
                    </div>
                </div>
                <div className='btns'>
                    <Button type="primary" onClick={this.submit.bind(this)}>发布</Button>
                    <Button>返回</Button>
                </div>
            </Card>
        </div>)
    }
}