import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import css from './nav.less'
import Clock from '../Clock/Clock'
import moment from "moment/moment";
export default class Nav extends Component {
    constructor(props) {
        super(props);
        this.state={
            index:props.index
        }

    }
    componentDidMount(){
        //this._countTime()
    }

    render() {
        return (
            <header className='tab '>
                <Clock></Clock>
                <div className='container flex'>
                    <div className={'tab-item ' + (this.state.index=='1'?'tab-item-current':'')}>感知青浦</div>
                    <div className={'tab-item ' + (this.state.index=='2'?'tab-item-current':'')}>预警中心</div>
                    <div className={'tab-item ' + (this.state.index=='3'?'tab-item-current':'')}>综合查询</div>
                    <div className='tab-title' >青浦区公安分局社会面智能安防系统</div>
                    <div className={'tab-item tab-right ' + (this.state.index=='4'?'tab-item-current':'')}>人车布控</div>
                    <div className={'tab-item tab-right ' + (this.state.index=='5'?'tab-item-current':'')}>指挥调度</div>
                    <div className={'tab-item tab-right ' + (this.state.index=='6'?'tab-item-current':'')}>统计分析</div>
                </div>

            </header>
        )
    }
}