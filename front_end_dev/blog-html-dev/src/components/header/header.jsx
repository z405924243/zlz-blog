import React from 'react';
import NavigateBar from './navigateBar.jsx';
import style from './header.scss';

export default class Header extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div>
                <NavigateBar list={this.props.navigateBarItems} />
                <div className={style.title}>
                    <h1>{this.props.datas.blogTitle || ''}</h1>
                    <p>{this.props.datas.blogIntroduce || '没有签名哦~'}</p>
                </div>
            </div>
        );
    }
}