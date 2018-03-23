import React, {Component} from 'react';
import {Modal, Tabs , Input,Table,DatePicker,Dropdown,Menu,Button,Icon} from 'antd';
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
const TabPane = Tabs.TabPane;
import HighchartsMore from 'highcharts/highcharts-more';
HighchartsMore(Highcharts)
import 'antd/dist/antd.css';
const Search = Input.Search;
import './model-chart.less'
import { Pagination } from 'antd';

export default class ModelChart extends Component{
    constructor(props) {
        super(props);
        console.log(this.props)
    }
    componentWillReceiveProps(nextProps) {
        var self=this
        self._solidgauge()
    }

    // 绘制仪表盘
    _solidgauge(){
        var option={
            chart: {
                type: 'solidgauge',
                backgroundColor:'transparent',
                plotBackgroundColor:'transparent',
                spacing : [0, 0 , 0, 0]
            },
            title: null,
            pane: {
                center: ['50%', '50%'],
                size: '80%',
                startAngle: -120,
                endAngle: 120,
                background: {
                    borderWidth: 0,
                    backgroundColor: 'RGBA(25, 41, 97, 1)',
                    innerRadius: '60%',
                    outerRadius: '120%',
                    shape: 'arc'
                }
            },
            tooltip: {
                enabled: false
            },
            yAxis: {
                min: 20,
                max: 200,
                lineWidth: 0,
                minorTickInterval: null,
                tickPixelInterval: 400,
                tickWidth: 0,
                labels: {
                    enabled:false,
                }
            },
            credits: {
                enabled: false
            },
        }
        var option1={
            yAxis: {
                stops: [
                    [0.1, {
                        linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
                        stops: [
                            [0, 'RGBA(227, 0, 0, 1)'],
                            [1, 'RGBA(227, 0, 0, .8)']
                        ]

                    }],
                    [0.9, {
                        linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
                        stops: [
                            [0, 'RGBA(227, 0, 0, .8)'],
                            [1, 'RGBA(9, 170, 245, 1)']
                        ]
                    }],
                ],
                title: {
                    text: '红色预警',
                    y: 50,
                    style:{
                        "color":'#FF0000',
                        "fontSize":".09rem",
                        "fontWeight":"bold"
                    }
                },
            },
            plotOptions: {
                solidgauge: {
                    dataLabels: {
                        color:'#FF0000',
                        y: -20,
                        borderWidth: 0,
                        useHTML: true,
                        style:{
                            "fontSize":".12rem",
                        },
                    },
                }
            },
            series: [{
                name: '速度',
                data: [200],
            },
                {
                    name: '速度',
                    data: [100],
                }]
        }
        var option2={
            yAxis: {
                title: {
                    y: 50,
                    text: '橙色预警',
                    style:{
                        "color":'#FF7E00',
                        "fontSize":".09rem",
                    }
                },
                stops: [
                    [0.1, {
                        linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
                        stops: [
                            [0, 'RGBA(246, 119, 57, 1)'],
                            [1, 'RGBA(246, 119, 57, .8)']
                        ]

                    }],
                    [0.9, {
                        linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
                        stops: [
                            [0, 'RGBA(246, 119, 57, .8)'],
                            [1, 'RGBA(9, 170, 245, 1)']
                        ]
                    }],
                ],
            },
            plotOptions: {
                solidgauge: {
                    dataLabels: {
                        color:'#FF7E00',
                        y: -20,
                        borderWidth: 0,
                        useHTML: true,
                        style:{
                            "fontSize":".12rem",
                        },
                    },
                }
            },
            series: [{
                name: '速度',
                data: [200],
            },
                {
                    name: '速度',
                    data: [100],
                }]
        }
        var option3={
            yAxis: {
                stops: [
                    [0.1, {
                        linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
                        stops: [
                            [0, 'RGBA(255, 228, 0, 1)'],
                            [1, 'RGBA(255, 228, 0, .8)']
                        ]

                    }],
                    [0.9, {
                        linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
                        stops: [
                            [0, 'RGBA(255, 228, 0, .8)'],
                            [1, 'RGBA(9, 170, 245, 1)']
                        ]
                    }],
                ],
                title: {
                    y: 50,
                    text: '黄色预警',
                    style:{
                        "color":'#FFE400',
                        "fontSize":".09rem",
                    }
                },
            },
            plotOptions: {
                solidgauge: {
                    dataLabels: {
                        color:'#FFE400',
                        y: -20,
                        borderWidth: 0,
                        useHTML: true,
                        style:{
                            "fontSize":".12rem",
                        },
                    },
                }
            },
            series: [{
                name: '速度',
                data: [200],
            },
                {
                    name: '速度',
                    data: [150],
                }
             ]
        }
        var option4={
            yAxis: {
                stops: [
                    [0.1, {
                        linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
                        stops: [
                            [0, 'RGBA(54, 241, 54, 1)'],
                            [1, 'RGBA(54, 241, 54, .8)']
                        ]

                    }],
                    [0.9, {
                        linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
                        stops: [
                            [0, 'RGBA(54, 241, 54, .8)'],
                            [1, 'RGBA(9, 170, 245, 1)']
                        ]
                    }],
                ],
                title: {
                    y: 50,
                    text: '绿色预警',
                    style:{
                        "color":'#36F136',
                        "fontSize":".09rem",
                    }
                },
            },
            plotOptions: {
                solidgauge: {
                    dataLabels: {
                        color:'#36F136',
                        y: -20,
                        borderWidth: 0,
                        useHTML: true,
                        style:{
                            "fontSize":".12rem",
                        },
                    },
                }
            },
            series: [{
                name: '速度',
                data: [200],
            },
                {
                    name: '速度',
                    data: [100],
                }]
        }

        // 速度仪表
        var chart1 = Highcharts.chart('red-warning', $.extend(true,option,option1));
        var chart2 = Highcharts.chart('origin-warning', $.extend(true,option,option2));
        var chart3 = Highcharts.chart('yellow-warning', $.extend(true,option,option3));
        var chart4 = Highcharts.chart('green-warning', $.extend(true,option,option4));
    }

    render(){
        return(
            <div className="warning-chart flex">
                <div id="red-warning" className="red-warning" ></div>
                <div id="origin-warning" className="origin-warning" ></div>
                <div id="yellow-warning" className="yellow-warning" ></div>
                <div id="green-warning" className="green-warning" ></div>
            </div>
            )



    }
}



