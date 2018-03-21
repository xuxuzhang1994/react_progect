import React, {Component} from 'react';
import { Spin } from 'antd';
import 'antd/dist/antd.css';
import './Loading.less';
export default class Loading extends Component {
    render() {
        return (
            <div className='loading'>
                <Spin size="large" />
            </div>

        )
    }
}