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
<<<<<<< HEAD
                    <h1>叽里咕噜</h1>
                    <p>那就安静一点吧</p>
=======
                    <h1>{this.props.datas.blogTitle || ''}</h1>
                    <p>{this.props.datas.blogIntroduce || '没有签名哦~'}</p>
>>>>>>> dev
                </div>
            </div>
        );
    }
}