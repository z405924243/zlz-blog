import React from 'react';
import NavigateBar from './navigateBar.jsx';

export default class Header extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div>
                <NavigateBar/>
                <p>或许这就是react吧</p>
            </div>
        );
    }
}