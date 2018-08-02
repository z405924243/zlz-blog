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
                    <h1>叽里咕噜</h1>
                    <p>那就安静一点吧</p>
                </div>
            </div>
        );
    }
}