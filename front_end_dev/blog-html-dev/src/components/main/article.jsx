import React from 'react';
import style from './article.scss';
import icon from '../global/icon.scss';


export default class Article extends React.Component {
    render() {
        const data = this.props.datas;
        return (
            <article>
                    <h4>{data.title}</h4>
                    <p className={style.info}>
                        <span className={`${icon.iconfont} ${icon['icon-time-circle']}`}>{data.time}</span>
                        <span className={`${icon.iconfont} ${icon['icon-eye']}`}>浏览：{data.browse}</span>
                        <span className={`${icon.iconfont} ${icon['icon-heart']}`}>喜欢：{data.like}</span>
                        <span className={`${icon.iconfont} ${icon['icon-edit-square']}`}>评论：0</span>
                    </p>
                    <p>{data.content}</p>
            
            <p className={style.tool}>
                {/* <Link to={item.url}><i className={`${icon.iconfont} ${icon['icon-star-fill']}`}></i>{item.text}</Link> */}
            </p>
            </article>
        )
    }
}