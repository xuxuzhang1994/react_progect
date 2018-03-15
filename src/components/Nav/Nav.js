import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import css from './nav.less'
export default class Nav extends Component {
    render() {
        return (
            <header className='tab '>
                <div className='container flex'>
                    <div className='tab-item' ng-class='{"tab-item-current":index==1}'>感知青浦</div>
                    <div className='tab-item' ng-class='{"tab-item-current":index==2}' ng-click='changeTab(2)'>预警中心</div>
                    <div className='tab-item' ng-class='{"tab-item-current":index==3}' ng-click='changeTab(3)'>综合查询</div>
                    <div className='tab-title' >青浦捕风捉影系统</div>
                    <div className='tab-item tab-right' ng-class='{"tab-item--right-current":index==4}' ng-click='changeTab(4)'>人车布控</div>
                    <div className='tab-item tab-right' ng-class='{"tab-item--right-current":index==5}' ng-click='changeTab(5)'>指挥调度</div>
                    <div className='tab-item tab-right' ng-class='{"tab-item--right-current":index==6}' ng-click='changeTab(6)'>统计分析</div>
                </div>

            </header>
        )
    }
}