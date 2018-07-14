import React from 'react';
import { Link } from "react-router-dom";
import style from './pagination.scss';
import icon from './icon.scss';

export default class Pagination extends React.Component{
    createList = () =>{
        const size = this.props.lastPage;
        const now = this.props.pageNum;
        const url = this.props.match.url
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
            <li className={item===now ? style.nowPage : ''} >
                <Link to={`${url}/page/${item}`}>{item}</Link>
            </li>);
    }

    // 前一页
    previousPage() {
        if(this.props.pageNum===1) return;
        return (<li title='上一页' className={`${icon.iconfont} ${icon['icon-left']}`} onClick={this.minusPage}></li>);
    }
    // 后一页
    nextPage() {
        if(this.props.pageNum===this.props.lastPage) return;
        return (<li title='下一页' className={`${icon.iconfont} ${icon['icon-right']}`} onClick={this.addPage}></li>);
    }
    addPage=()=> {
        this.props.onPageChange(this.props.pageNum+1);
    }
    minusPage=()=>{
        this.props.onPageChange(this.props.pageNum-1);
    }

    changePageHandle= (pageNum,e)=>{
        if (pageNum === '...' || pageNum === this.props.pageNum) return;
        this.props.onPageChange(pageNum);
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