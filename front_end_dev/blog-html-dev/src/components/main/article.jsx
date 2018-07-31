import React from 'react';
import style from './article.scss';
import icon from '../global/icon.scss';
import { Link } from "react-router-dom";

import config from '../../config';
import axios from 'axios';

export default class Article extends React.Component {
    constructor() {
        super();
        this.state = {
            data:[],
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

    // 点击喜欢
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

    createList = () =>{
        const self = this;
        return (self.state.data || self.props.data).map(data=>
            (<article>
                <h4 className={style.title}><Link to={`/article/${data.id}`}>{data.title}</Link></h4>
                {this.isLike(data.id)}
                <p className={style.info}>
                    <span className={`${icon.iconfont} ${icon['icon-time-circle']}`}>{data.time}</span>
                    <span className={`${icon.iconfont} ${icon['icon-eye']}`}>浏览：{data.browse}</span>
                    <span className={`${icon.iconfont} ${icon['icon-heart']}`}>喜欢：{data.like}</span>
                    <span className={`${icon.iconfont} ${icon['icon-edit-square']}`}>评论：0</span>
                </p>
                <p>{data.content}</p>
        
            <p className={style.tool}>
                <Link to={`/article/${data.id}`}>查看详细<i className={`${icon.iconfont} ${icon['icon-doubleright']}`}></i></Link>
            </p>
            </article>)
        );
    }

    componentWillMount () {
        let info = JSON.parse(localStorage.getItem('info')) || {};
        let likeList = info.likeList || [];
        const self = this;
        let params = {
            pageNum: (self.props.match&&self.props.match.params.pageNum) || 1,
            pageSize:5
        };
        axios.post(config.requestUrl + '/blogs', params).then(res => {
            self.setState({data:res.data.value,likeList: likeList});
            self.createList();
        })
    }

    componentWillReceiveProps (nextProps) {
        console.log('fresh')
        const self = this;
        let params = {
            pageNum: (nextProps.match&&nextProps.match.params.pageNum) || 1,
            pageSize:5
        };
        axios.post(config.requestUrl + '/blogs', params).then(res => {
            self.setState({data:res.data.value});
            self.createList();
        })
    }

    render() {
        return (
            <div>
              {this.createList()}  
            </div>
        )
    }
}