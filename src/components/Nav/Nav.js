import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './nav.less'
import Clock from '../Clock/Clock'
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
                <div className='nav-container flex'>
                    <Link to="/page/qinpu/perception-qingpu/page1">
                        <div className={'tab-item ' + (this.state.index=='1'?'tab-item-current':'')}>感知青浦</div>
                    </Link>
                    <Link to="/page/qinpu/perception-qingpu/page1">
                        <div className={'tab-item ' + (this.state.index=='2'?'tab-item-current':'')}>预警中心</div>
                    </Link>
                    <Link to="/page/qinpu/perception-qingpu/page1">
                        <div className={'tab-item ' + (this.state.index=='3'?'tab-item-current':'')}>综合查询</div>
                    </Link>
                    <div className='tab-title' >青浦区公安分局社会面智能安防系统</div>
                    <Link to="/page/qinpu/perception-qingpu/page1">
                        <div className={'tab-item tab-right ' + (this.state.index=='4'?'tab-item-current':'')}>人车布控</div>
                    </Link>
                    <Link to="/page/qinpu/perception-qingpu/page1">
                        <div className={'tab-item tab-right ' + (this.state.index=='5'?'tab-item-current':'')}>指挥调度</div>
                    </Link>
                    <Link to="/page/qinpu/perception-qingpu/page1">
                        <div className={'tab-item tab-right ' + (this.state.index=='6'?'tab-item-current':'')}>统计分析</div>
                    </Link>
                </div>
            </header>
        )
    }
}