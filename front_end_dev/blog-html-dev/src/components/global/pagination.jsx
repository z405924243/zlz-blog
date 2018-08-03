import React from 'react';
// import { Link } from "react-router-dom";
import style from './pagination.scss';
import icon from './icon.scss';
import PageLink from './pageLink.jsx';

import { Link } from "react-router-dom";

import config from '../../config';
import axios from 'axios';

export default class Pagination extends React.Component{
    
    getPageNum (){
        const url = window.location.href;
        let num = url.split('/').pop();
        if (isNaN(Number(num))) return 1;
        else return Number(num);
    }

    createList = () =>{
        const size = this.props.lastPage || 1;
        const now =  this.getPageNum();
        const url = this.props.match.url;
        let list=[];
        for (let i = 0; i<size; i++) {
            list.push(i+1);
        }

        if (size>5){
            if(now===1||now===2||now===3){
                list = [1,2,3,4,'...',size];
            }
            else if(now>3 && now<size-1 && now !== size-2){
                list = [1,'...',now-1,now,now+1,'...',size];
            }
            else{
                list = [1,'...',size-3,size-2,size-1,size];
            }
        }
        return list.map(item =>
            <li>
                    <PageLink url={url} item={item} />
            </li>);
    }

    // 前一页
    previousPage() {
        const num = this.getPageNum();
        const url = this.props.match.url;
        if(num===1) return;
        return (<li>
            <Link title='上一页' className={`${icon.iconfont} ${icon['icon-left']}`} to={`${url}/page/${num-1}`} />
        </li>);
    }
    // 后一页
    nextPage() {
        const num = this.getPageNum();
        const url = this.props.match.url;
        if(num===this.props.lastPage) return;
        return (<li>
            <Link title='下一页' className={`${icon.iconfont} ${icon['icon-right']}`} to={`${url}/page/${num+1}`} />
        </li>);
    }

    render() {
        const list = this.createList();
        return (
            <div>
                <ul className={style.bar}>
                    {this.previousPage()}
                    {list}
                    {this.nextPage()}
                </ul>
            </div>
        );
    }
}