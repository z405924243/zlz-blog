import React from 'react';
import style from './navigateBarStyle.scss';
import icon from '../global/icon.scss';

import { Link } from "react-router-dom";

export default class NavigateBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nav:style.show,
            navSelected: 1
        }
    }

    creatByconfig = () => {
        const list = this.props.list.map(item =>
            <li key={item.id} onClick={(e)=>this.changeContent(item.id ,e)}>
                <Link to={item.url} activeClassName='{style.showstar}'><i className={`${icon.iconfont} ${icon['icon-star-fill']}`}></i>{item.text}</Link>
            </li>
        )
        return (<ul className={style.list}>{list}</ul>);
    }

    changeContent (id,e) {
        if (id === this.state.navSelected){
            // 如果是当前选中项。则返回顶部
        }
        else{
            this.setState({navSelected: id});
        }
    }

    componentDidMount() {
        let top = 0;
        window.addEventListener('scroll', e => {
            
            // 获取滚动条高度
            let scrollTop = 0;
            if (document.documentElement && document.documentElement.scrollTop) {
                scrollTop = document.documentElement.scrollTop;
            } else if (document.body) {
                scrollTop = document.body.scrollTop;
            }

            if(scrollTop > 300 && scrollTop - top> 0){
                this.setState({nav:style.hide})
            }
            else{
                this.setState({nav:style.show})
            }
            top = document.scrollingElement.scrollTop;
        })
    }

    render() {
        const list = this.creatByconfig();
        return (
            <div className={style.body+' '+this.state.nav}>
                {list}
            </div>
        );
    }
}