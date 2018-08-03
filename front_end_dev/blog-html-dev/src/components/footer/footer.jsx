import React from 'react';
import style from './footer.scss';

export default class Footer extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div>
                <p>
                © 2018
                </p>
                <p>
                    Powered By <a href="#"><i>me</i></a> | Designed By <a href="#"><i>me</i></a> | Server By <a href="https://www.aliyun.com"><i>aliyun</i></a>
                </p>
            </div>
        );
    }
}