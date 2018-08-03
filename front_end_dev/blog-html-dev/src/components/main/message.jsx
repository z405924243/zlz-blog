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
            nickName: '',
            email: '',
            blog: '',
            message: '',
            replyMsgId: ''
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
                                <input type="button" value="回复" data-id={msg.msgId} onClick={this.reply} />
                            </p>
                        </section>
                    </div>
                )
            }
            else {
                return (
                    <div className={style.amsg}>
                        <div>
                            <img src={require("../../static/banner-bg/headPic.jpg")} alt="" />
                        </div>

                        <section>
                            <h5>{msg.nickName}</h5>
                            <time>{msg.time}</time>

                            <p>{msg.message}</p>
                            <p>
                                <input type="button" value="回复" data-id={msg.msgId} onClick={this.reply} />
                            </p>
                        </section>
                    </div>
                )
            }

        })
    }

    // 设置留言框
    setMessageBox() {
        const self = this;
        const replyId = this.state.replyMsgId;

        if (!replyId)
            return (<textarea className={style.textarea} placeholder='快来留言啊' value={this.state.message} onChange={(e) => this.setValue('message', e)}></textarea>);

        let data = '';
        self.state.messageList.map(item=>{
            if(item.msgId==replyId) {data = item};
        })
        console.log(data)
        return (
            <div className={style.box}>
                <textarea className={`${style.textarea} ${style.replyTextarea}`} placeholder='快来留言啊' value={this.state.message} onChange={(e) => this.setValue('message', e)}></textarea>
                <p className={style.replyInBox}>
                    <i>@{data.nickName}</i>{data.message}
                    <span onClick={this.cancelReply}>取消回复</span>
                </p>
            </div>
        )

    }

    // 绑定输入框的值
    setValue = (type, e) => {
        let obj = {};
        obj[type] = e.target.value;
        this.setState(obj);
    }

    // 发送留言
    sendMessage = () => {
        const self = this;
        const data = this.state;
        if (!data.nickName) {
            alert('请填写你的昵称！');
            return;
        }
        if (!data.email) {
            alert('请填写你的邮箱！');
            return;
        }
        if (!data.message) {
            alert('请输入留言内容哦！');
            return;
        }

        let params = {
            nickName: data.nickName,
            email: data.email,
            blog: data.blog,
            message: data.message,
            replyMsgId: data.replyMsgId
        }

        axios.post(config.requestUrl + '/insertMsg', params).then(res => {
            console.log(res)
            self.setState({ message: '' });
            axios.get(config.requestUrl + '/getMessage').then(res => {
                console.log(res)
                self.setState({ messageList: res.data.value,replyMsgId: '' })
            })
        })

    }

    // 回复
    reply = (e) => {
        console.log(e.target.dataset.id);
        this.setState({ replyMsgId: e.target.dataset.id });
    }
    // 取消回复
    cancelReply=()=>{
        this.setState({ replyMsgId: ''});
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
                                <label className={this.state.nickStyle} htmlFor="nickStyle-name">昵称：</label><input onFocus={this.nickClick} type="text" id='nickStyle-name' value={this.state.nickName} onChange={(e) => this.setValue('nickName', e)} />
                            </div>
                            <div>
                                <label className={this.state.emailStyle} htmlFor="emailStyle">邮箱：</label><input onFocus={this.emailClick} type="emailStyle" id='emailStyle' value={this.state.email} onChange={(e) => this.setValue('email', e)} />
                            </div>
                            <div>
                                <label className={this.state.blogStyle} htmlFor="blogStyle-url">博客（可不填）:</label><input onFocus={this.blogClick} type="text" id='blogStyle-url' value={this.state.blog} onChange={(e) => this.setValue('blog', e)} />
                            </div>
                        </div>
                        {this.setMessageBox()}
                    </div>
                    <input type="button" className={style.send} onClick={this.sendMessage} value='send' />
                </div>

                <div className={style.messagePad}>
                    {this.createMsgList()}
                </div>
            </div>);
    }
}