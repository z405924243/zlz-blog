import React from 'react';
import style from './message.scss';

import config from '../../config';
import axios from 'axios';

export default class Message extends React.Component {
    constructor() {
        super();
        this.state = {
            messageList: [],
            nickStyle: style.nofoucs,
            emailStyle: style.nofoucs,
            blogStyle: style.nofoucs,
            nickName:'',
            email:'',
            blog:'',
            message:''
        }
    }

    nickClick = () => {
        this.setState({ nickStyle: '' });
    }
    emailClick = () => {
        this.setState({ emailStyle: '' });
    }
    blogClick = () => {
        this.setState({ blogStyle: '' });
    }

    createMsgList() {
        return this.state.messageList.map(msg => {
            if (msg.replyMsgId) {
                return (
                    <div key={msg.msgId} className={style.amsg}>
                        <div>
                            <img src={require("../../static/banner-bg/headPic.jpg")} alt="" />
                        </div>

                        <section>
                            <h5>{msg.nickName}</h5>
                            <time>{msg.time}</time>

                            <section className={style.reply}>
                                <h5>@{msg.replyUserName}</h5>
                                <p>{msg.replyMsg}</p>
                            </section>

                            <p>{msg.message}</p>
                            <p>
                                <input type="button" value="回复" />
                            </p>
                        </section>
                    </div>
                )
            }
            else{
                return(
                    <div className={style.amsg}>
                        <div>
                            <img src={require("../../static/banner-bg/headPic.jpg")} alt="" />
                        </div>

                        <section>
                            <h5>{msg.nickName}</h5>
                            <time>{msg.time}</time>

                            <p>{msg.message}</p>
                            <p>
                                <input type="button" value="回复" />
                            </p>
                        </section>
                    </div>
                )
            }

        })
    }

    setValue=(type,e)=>{
        let obj ={};
        obj[type]=e.target.value;
        this.setState(obj);
    }

    // 发送留言
    sendMessage=()=>{
        const self = this;
        const data = this.state;
        if(!data.nickName){
            alert('请填写你的昵称！');
            return;
        }
        if(!data.email){
            alert('请填写你的邮箱！');
            return;
        }
        if(!data.message){
            alert('请输入留言内容哦！');
            return;
        }

        let params ={
            nickName:data.nickName,
            email:data.email,
            blog: data.blog,
            message: data.message
        }

        axios.post(config.requestUrl + '/insertMsg',params).then(res => {
            console.log(res)
            self.setState({message:''});
        })
        
    }

    componentWillMount() {
        const self = this;
        axios.get(config.requestUrl + '/getMessage').then(res => {
            console.log(res)
            self.setState({ messageList: res.data.value })
        })
    }

    render() {
        return (
            <div>
                <div className={style.message}>
                    <h1>留言板</h1>
                    <h5>不说点什么吗？~</h5>
                    <div>
                        <div className={style.visitorInfo}>
                            <div>
                                <label className={this.state.nickStyle} htmlFor="nickStyle-name">昵称</label><input onClick={this.nickClick} type="text" id='nickStyle-name' value={this.state.nickName} onChange={(e)=>this.setValue('nickName',e)} />
                            </div>
                            <div>
                                <label className={this.state.emailStyle} htmlFor="emailStyle">邮箱</label><input onClick={this.emailClick} type="emailStyle" id='emailStyle' value={this.state.email} onChange={(e)=>this.setValue('email',e)} />
                            </div>
                            <div>
                                <label className={this.state.blogStyle} htmlFor="blogStyle-url">博客（可不填）</label><input onClick={this.blogClick} type="text" id='blogStyle-url' value={this.state.blog} onChange={(e)=>this.setValue('blog',e)} />
                            </div>
                        </div>
                        <textarea className={style.textarea} placeholder='快来留言啊' value={this.state.message} onChange={(e)=>this.setValue('message',e)}></textarea>
                    </div>
                    <input type="button" className={style.send} onClick={this.sendMessage} value='send' />
                </div>

                <div className={style.messagePad}>
                    {this.createMsgList()}
                </div>
            </div>);
    }
}