import React from 'react';
import marked from 'marked';
import style from './articleContent.scss';
import icon from '../global/icon.scss';
import mk from '../../styleInit.css';

import config from '../../config';
import axios from 'axios';

import MessageBoard from '../global/messageBoard.jsx';

export default class Content extends React.Component {
    constructor (){
        super();
        this.state={
            data:'',
            likeList:[]
        }
    }

    isLike=(id)=>{
        if (this.state.likeList.includes(id)){
            return <span className={`${style.hasLike} ${icon.iconfont} ${icon['icon-heart-fill']}`} title='unlike'  onClick={this.likeClick.bind(this,id,'minus')}></span>
        }
        else{
            return <span className={`${style.like} ${icon.iconfont} ${icon['icon-heart']}`} title='like' onClick={this.likeClick.bind(this,id,'add')}></span>
        }
        
    }

    likeClick (id,type){
        let info = JSON.parse(localStorage.getItem('info')) || {};
        let likeList = info.likeList || [];
        // axios.get(config.requestUrl + `/like?id=${id}&num=${type}`).then(res => {
            if (type==='add'){
                likeList.push(id);
            
            }
            else{
                let index = likeList.indexOf(id);
                likeList.splice(index,1);
                
            }
            info.likeList = likeList;
            localStorage.setItem('info',JSON.stringify(info));
            this.setState({
                likeList:likeList
            })
        // })
    }

    // 解析markdown
    plainMdToHtml(){
        let content = marked(this.state.data.content||'');
        return {__html:content };
    }

    componentWillMount () {
        let info = JSON.parse(localStorage.getItem('info')) || {};
        let likeList = info.likeList || [];
        const self = this;
        axios.get(config.requestUrl + '/getBlogById?id='+this.props.match.params.articleId).then(res => {
            self.setState({data:res.data.value,likeList: likeList});
        })
    }

    render() {
        const data = this.state.data;
        return (
        <div>
         <article>
            <h4 className={style.title}>{data.title}</h4>
            {this.isLike(data.id)}
            <p className={style.info}>
                <span className={`${icon.iconfont} ${icon['icon-time-circle']}`}>{data.time}</span>
                <span className={`${icon.iconfont} ${icon['icon-eye']}`}>浏览：{data.browse}</span>
                <span className={`${icon.iconfont} ${icon['icon-heart']}`}>喜欢：{data.like}</span>
                <span className={`${icon.iconfont} ${icon['icon-edit-square']}`}>评论：0</span>
            </p>
            {/* <p>{data.content}</p> */}
            <div className={mk['markdown-body']} dangerouslySetInnerHTML={this.plainMdToHtml()}></div>
        </article>
        {/* <h4 className={style.pl}>发表评论：</h4>
        <MessageBoard articleId={this.props.match.params.articleId}/> */}
        </div>
        );
    }
}