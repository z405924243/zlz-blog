import React from 'react';
import style from './message.scss';

export default class Message extends React.Component {
    // constructor (){
    //     super();
    //     this.state={}
    // }

    render() {
        return (
            <div>
                <div className={style.message}>
                    <h1>留言板</h1>
                    <h5>不说点什么吗？~</h5>
                    <div>
                        <div className={style.visitorInfo}>
                            <div>
                                <label className={style.nofoucs} htmlFor="nick-name">昵称</label><input type="text" id='nick-name'/>
                            </div>
                            <div>
                                <label className={style.nofoucs} htmlFor="email">邮箱</label><input type="text" id='email' />   
                            </div>
                            <div>
                                <label className={style.nofoucs} htmlFor="blog-url">博客</label><input type="text" id='blog-url' /> 
                            </div>
                        </div>
                        <textarea className={style.textarea} placeholder='快来留言啊' name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    {/* <p>如何是好，这叫人如何是好啊！~</p> */}
                    <input type="button" className={style.send} value='send' />
                </div>
            </div>);
    }
}