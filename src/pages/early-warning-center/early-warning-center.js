import React, {Component} from 'react';
import {hot} from 'react-hot-loader';

import api from "../../api/maintenance-api";
import './home.less';
import Nav from 'components/Nav/Nav';

class EarlyWarningCenter extends Component {
    componentDidMount(){
        this._colume()
    }

    _colume(){
        // 图表配置
        var options = {
            chart: {
                type: 'column'
            },
            title: {
                text: '包含负值的柱形图'
            },
            xAxis: {
                categories: ['苹果', '橘子', '梨', '葡萄', '香蕉']
            },
            yAxis: {
                title: {
                    text: null
                },
                labels: {
                    formatter: function () {
                        return (Math.abs(this.value) / 1) + 'M';
                    }
                },
                min: -10,
                max: 10
            },
            plotOptions: {
                column: {
                    stacking: 'normal',
                }
            },
            credits: {
                enabled: false
            },
            series: [{
                name: '小张',
                data: [5, 3, 4, 7, 2]
            }, {
                name: '小彭',
                data: [-2, -2, -3, -2, -1]
            }],
            tooltip: {
                pointFormat: '{series.name}: <b>{point.y}</b> ({point.percentage:.1f}%)<br/>'
            }
        };
        // 图表初始化函数
        var chart = Highcharts.chart('colume', options);
    }

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }


    render() {
        return (
            <div className='early-warning-center'>
                <Nav/>
                <div className='chart-box'>
                    <div id="colume"></div>
                </div>

                {/*<div className='bar'>*/}
                    {/*this is home~<br/>*/}
                    {/*当前计数：{this.state.count}<br/>*/}
                    {/*<button onClick={() => this._handleClick()}>自增</button>*/}
                    {/*<button onClick={() => this._showData()}>显示数据</button>*/}


                    {/*<h1>{this.state.brandList}</h1>*/}
                    {/*<img src={this.state.brandList} alt="" className='img' />*/}
                    {/*<button onClick={() => this._test()}>登陆111</button>*/}
                {/*</div>*/}
            </div>
        )
    }
}

export default hot(module)(EarlyWarningCenter);

