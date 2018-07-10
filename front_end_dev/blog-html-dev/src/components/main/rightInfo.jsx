import React from 'react';
import style from './rightInfo.scss';
import icon from '../global/icon.scss';

export default class RightInfo extends React.Component {
    // constructor (){}

    render() {
        return (
            <div>
                <div className={style.searchBar}>
                    <input type="text" placeholder='搜索一下吧~'/>
                    <a href="javascript:;" className={`${icon.iconfont} ${icon['icon-search']}`}></a>
                </div>

                <div className={style.myinfo}>
                    <div className={style.showme}>
                        <img alt=''/>
                        <div>
                            <h5>一个弱鸡╰_ ╯</h5>
                            <p>
                                <i className={`${icon.iconfont} ${icon['icon-zhihu-circle-fill']}`}></i>
                                <i className={`${icon.iconfont} ${icon['icon-weibo']}`}></i>
                                <i className={`${icon.iconfont} ${icon['icon-github-fill']}`}></i>
                            </p>
                        </div>
                    </div>

                    <p className={style.abstract}>
                        -- 山是眉峰聚，水是眼波横。
                    </p>
                </div>

                <div className={style.classify}>
                    <h4>classify:</h4>
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                    </ul>
                </div>

                <div className={style.basket}>
                    <h4>basket:</h4>
                </div>

            </div>

        )
    }
}