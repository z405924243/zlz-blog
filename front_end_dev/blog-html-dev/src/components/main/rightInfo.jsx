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
                    <a href="javascript:;" className={`${icon.iconfont} ${icon['icon-search']}`} title='search'></a>
                </div>

                <div className={style.myinfo}>
                    <div className={style.showme}>
                        <img alt=''/>
                        <div>
                            <h5>{this.props.datas.myNickname}</h5>
                            <p>
                                <a href="https://www.zhihu.com/people/ni-bu-ping-fan-59/activities" title='知乎'>
                                  <i className={`${icon.iconfont} ${icon['icon-zhihu-circle-fill']}`}></i>  
                                </a>
                                <a href="https://weibo.com/p/1005051822963765/home?from=usercardnew&is_all=1#place&refer_flag=0000020001_" title='微博'>
                                   <i className={`${icon.iconfont} ${icon['icon-weibo']}`}></i> 
                                </a>
                                <a href="https://github.com/z405924243" title='Github'>
                                    <i className={`${icon.iconfont} ${icon['icon-github-fill']}`}></i>
                                </a>
                                
                            </p>
                        </div>
                    </div>

                    <p className={style.abstract}>
                        {this.props.datas.mySignature}
                    </p>
                </div>

                <div className={style.classify}>
                    <h4>classify:</h4>
                    <ul>
                        <li>技术</li>
                        <li>心情</li>
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