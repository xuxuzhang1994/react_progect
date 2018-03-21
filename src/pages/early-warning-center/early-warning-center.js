import React, {Component} from 'react';
import {hot} from 'react-hot-loader';
import Highcharts from 'highcharts/highstock';
import HighchartsMore from 'highcharts/highcharts-more';
import api from "../../api/maintenance-api";
import './home.less';
import Nav from 'components/Nav/Nav';
//import Page1 from '../Page1/Page1';
HighchartsMore(Highcharts)
class EarlyWarningCenter extends Component {
    componentDidMount(){
        this._colume()
        this._zhizhu()
        this._pie()
    }

    _colume(){
        console.log(Highcharts.getOptions().colors)
        Highcharts.getOptions().colors = Highcharts.map(["#009FEB", "#E91F1F"], function (color) {
            if(color=='#009FEB'){
                return {
                    linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
                    stops: [
                        [0, '#009FEB'],
                        [1, '#041846']
                    ]
                };
            }else{
                return {
                    linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
                    stops: [
                        [0, '#1F0101',],
                        [1, '#E91F1F'], // darken
                    ]
                };
            }
            console.log(Highcharts.Color(color).brighten(-0.3).get('rgb'))

        });
        // 图表配置
        var options = {
            colors:{
                linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
                stops: [
                    [0, '#003399'],
                    [1, '#3366AA']
                ]
            },
            chart: {
                type: 'column'
            },
            title: {
                text: '》年度预警趋势分析',
                useHTML:true
            },
            legend:{
                align: 'right',
                verticalAlign: 'top',
                x: 0,
                y: 29,
                useHTML:true
            },
            xAxis: {
                tickPositions: [0, 5, 10, 15, 20,25,30,35,40,45,50,55],
                tickPosition: 'inside',
                tickLength: 1,
                categories: ['一月','1','2','3','4', '二月','1','2','3','4', '三月','1','2','3','4', '四月',
                 '1','2','3','4','五月','1','2','3','4', '六月','1','2','3','4', '七月','1','2','3','4', '八月', '1','2','3','4','九月','1','2','3','4', '十月','1','2','3','4', '十一月','1','2','3','4','十二月'],
                className:'zhangjiayu',
                tickmarkPlacement:'between',
                tickPixelInterval:1,
            },
            yAxis: {
                gridLineDashStyle: 'ShortDash',
                title: {
                    text: null
                },

                tickAmount: 9,
                labels: {
                    formatter: function () {
                        return (Math.abs(this.value) / 1)
                    }
                },
                // min: -3000,
                // max: 3000
            },
            plotOptions: {
                useHTML:true,
                column: {
                    stacking: 'normal',
                    //pointInterval:0.6,
                    //pointPadding:-0.25
                    pointPadding:0,
                    groupPadding: 0
                }
            },
            credits: {
                enabled: false
            },
            series: [{
                name: '事件预警',
                data: [500, 1300, 400, 700, 2000,500, 1300, 400, 700, 2000,500, 1300, 400, 700, 2000,500, 1300, 400, 700, 2000,500, 1300, 400, 700, 2000,500, 1300, 400, 700, 2000,500, 1300, 400, 700, 2000,500, 1300, 400, 700, 2000,500, 1300, 400, 700, 2000,500, 1300, 400, 700, 2000,500, 1300, 400, 700, 2000,500, 1300, 400, 700, 2000,500, 1300, 400, 700, 2000,500, 1300, 400, 700, 2000,500,]
            }, {
                name: '设备预警',
                data: [-200, -2000, -300, -1200, -1000,-200, -2000, -300, -1200, -1000,-200, -2000, -300, -1200, -1000,-200, -2000, -300, -1200, -1000,-200, -2000, -300, -1200, -1000,-200, -2000, -300, -1200, -1000,-200, -2000, -300, -1200, -1000,-200, -2000, -300, -1200, -1000,-200, -2000, -300, -1200, -1000,-200, -2000, -300, -1200, -1000,-200, -2000, -300, -1200, -1000,-200, -2000, -300, -1200, -1000,-200, -2000, -300, -1200, -1000,-200, -2000, -300, -1200,]
            }],
            tooltip: {
                pointFormat: '{series.name}: <b>{point.y}</b> ({point.percentage:.1f}%)<br/>'
            }
        };
        // 图表初始化函数
        var chart = Highcharts.chart('colume', options);

    }
    _zhizhu(){
        // console.log(Highcharts.getOptions().colors)
        // Highcharts.getOptions().colors = Highcharts.map(["#009FEB", "#E91F1F"], function (color) {
        //     if(color=='#009FEB'){
        //         return {
        //             linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
        //             stops: [
        //                 [0, '#009FEB'],
        //                 [1, '#041846']
        //             ]
        //         };
        //     }else{
        //         return {
        //             linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
        //             stops: [
        //                 [0, '#1F0101',],
        //                 [1, '#E91F1F'], // darken
        //             ]
        //         };
        //     }
        //     console.log(Highcharts.Color(color).brighten(-0.3).get('rgb'))
        //
        // });
        // 图表配置
        var options = {
            colors:{
                linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
                stops: [
                    [0, '#003399'],
                    [1, '#3366AA']
                ]
            },
            chart: {
                polar: true,
                type: 'line'
            },
            title: {
                text: '》年度预警趋势分析',
                useHTML:true
            },
            pane: {
                size: '80%'
            },
            xAxis: {
                categories: ['销售', '市场营销', '发展', '客户支持',
                    '信息技术', '行政管理'],
                tickmarkPlacement: 'on',
                lineWidth: 0
            },
            yAxis: {
                gridLineInterpolation: 'polygon',
                lineWidth: 0,
                min: 0
            },
            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>${point.y:,.0f}</b><br/>'
            },
            legend: {
                align: 'right',
                verticalAlign: 'top',
                y: 70,
                layout: 'vertical',
                enabled: false
            },

            series: [{
                name: '预算拨款',
                data: [43000, 19000, 60000, 35000, 17000, 10000],
                pointPlacement: 'on'
            }, {
                name: '实际支出',
                data: [50000, 39000, 42000, 31000, 26000, 14000],
                pointPlacement: 'on'
            }]
        };
        // 图表初始化函数
        var chart = Highcharts.chart('zhizhu', options);

    }
    _pie(){
        Highcharts.getOptions().colors=['#A1010D','#008325','#F39800','#7cb5ec', '#434348', '#90ed7d', '#f7a35c', '#8085e9',
            '#f15c80', '#e4d354', '#2b908f', '#f45b5b', '#91e8e1']
        // 图表配置
        var options = {
            colors:{
                linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
                stops: [
                    [0, '#003399'],
                    [1, '#3366AA']
                ]
            },
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                spacing : [0, 0 , 0, 0]
            },
            title: {
                useHTML:true,
                text: '圆心'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        //format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                        format: '{point.percentage:.1f} %',
                        style: {
                            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                        }
                    },
                    point: {
                        events: {
                            mouseOver: function(e) {  // 鼠标滑过时动态更新标题
                                // 标题更新函数，API 地址：https://api.hcharts.cn/highcharts#Chart.setTitle
                                // chart.setTitle({
                                //     text: e.target.name+ '\t'+ e.target.y + ' %'
                                // });
                            }
                            //,
                            // click: function(e) { // 同样的可以在点击事件里处理
                            //     chart.setTitle({
                            //         text: e.point.name+ '\t'+ e.point.y + ' %'
                            //     });
                            // }
                        }
                    },
                    innerSize: 100
                }
            },
            series: [{
                type: 'pie',
                innerSize: '50%',
                name: '市场份额',
                data: [
                    {name:'Firefox',   y: 45.0, url : 'http://bbs.hcharts.cn'},
                    ['IE',       26.8],
                    {
                        name: 'Chrome',
                        y: 12.8,
                        sliced: true,
                        selected: true,
                        url: 'http://www.hcharts.cn'
                    },
                    ['Safari',    8.5],
                    ['Opera',     6.2],
                    ['其他',   0.7]
                ]
            }]
        };
        var func = function (c) {
            // 环形图圆心
            var centerY = c.series[0].center[1],
                titleHeight = parseInt(c.title.styles.fontSize);
            c.setTitle({
                y:centerY + titleHeight/2
            });
            chart = c;
        }
        // 图表初始化函数
        var chart = Highcharts.chart('pie', options);

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
                {/*<Page1/>*/}
                <div className='chart-box flex'>
                    <div className='zhizhu-box shandow'>
                        <div className='jiao'>
                            <div className='top'></div>
                            <div className='right'></div>
                            <div className='bottom'></div>
                            <div className='left'></div>
                        </div>
                        <div id='zhizhu'></div>
                    </div>
                    <div className='colume-box shandow'>
                        <div className='jiao'>
                            <div className='top'></div>
                            <div className='right'></div>
                            <div className='bottom'></div>
                            <div className='left'></div>
                        </div>
                        <div id='colume'></div>
                    </div>
                    <div className='pie-box shandow'>
                        <div className='jiao'>
                            <div className='top'></div>
                            <div className='right'></div>
                            <div className='bottom'></div>
                            <div className='left'></div>
                        </div>
                        <div id='pie'></div>
                    </div>
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

