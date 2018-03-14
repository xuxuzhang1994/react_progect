import React, {Component} from 'react';
import api from "../../api/maintenance-api";
import './Page1.less';


import {connect} from 'react-redux';

class Waring extends Component {
    componentDidMount(){
        console.log('11111')
        this.chartDataOne();
        this.chartDataTwo();
        this.chartDataThree();

    }
    chartDataOne(){
         Highcharts.chart('container',{
             chart: {
                 polar: true,
                 type: 'line',
             },
             title: {
                 text: '',
                 x: -80
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
             legend:{
                 enabled: false
             },
             tooltip: {
                 shared: true,
                 pointFormat: '<span style="color:{series.color}">{series.name}: <b>${point.y:,.0f}</b><br/>'
             },
             // legend: {
             //     align: 'right',
             //     verticalAlign: 'top',
             //     y: 70,
             //     layout: 'vertical'
             // },
             series: [{
                 name: '预算拨款',
                 data: [43000, 19000, 60000, 35000, 17000, 10000],
                 pointPlacement: 'on'
             }, {
                 name: '实际支出',
                 data: [50000, 39000, 42000, 31000, 26000, 14000],
                 pointPlacement: 'on'
             }]

        })
    }
    chartDataTwo(){
        Highcharts.chart('container-two',{
            chart: {
                type: 'column'
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: ['一月', '二月', '三月', '四月', '五月','六月','七月','八月','九月','十月','十月','十二月']
            },
            credits: {
                enabled: false
            },
            legend:{
                enabled: false
            },
            plotOptions:{
                column: {
                    pointPadding: 0,
                    borderWidth: 0,
                    groupPadding: 0,
                    shadow: false
                }
            },
            series: [{
                name: '小张',
                data: [5, 3, 4, 7, 2,1,3,4,4,3,2,4]
            }]

        })
        Highcharts.chart('container-twos',{
            chart: {
                type: 'column'
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: ['一月', '二月', '三月', '四月', '五月','六月','七月','八月','九月','十月','十月','十二月']
            },
            legend:{
                enabled: false
            },
            credits: {
                enabled: false
            },
            series: [{
                name: '小张',
                data: [5, 3, 4, 7, 2,1,3,4,4,3,2,4]
            }]

        })



    }
    chartDataThree(){
        var chart = null;
        Highcharts.chart('container-three',{
            chart: {
                style: {
                    // fontSize: '12px',
                    fontWeight: 'bold',
                    backgroundColor:null,
                },
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                spacing : [10, 10 , 10, 10]
            },
            title: {
                floating:true,
                text: '数量65'
            },
            legend:{
                enabled: false
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
            },
            colors:['#A1010D','#008325','#F39800'],
            plotOptions: {
                pie: {
                    showInLegend:true,
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                        style: {
                            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                        },
                        connectorWidth:0,
                    },
                    point: {
                        events: {
                            mouseOver: function(e) {  // 鼠标滑过时动态更新标题
                                // 标题更新函数，API 地址：https://api.hcharts.cn/highcharts#Chart.setTitle
                                chart.setTitle({
                                    text: e.target.name+ '\t'+ e.target.y + ' %'
                                });
                            }
                            //,
                            // click: function(e) { // 同样的可以在点击事件里处理
                            //     chart.setTitle({
                            //         text: e.point.name+ '\t'+ e.point.y + ' %'
                            //     });
                            // }
                        }
                    },
                }
            },
            series: [{
                type: 'pie',
                size: '80%',
                innerSize: '60%',
                name: '条',
                data: [
                    {
                        name: 'Chrome',
                        y: 20,
                        sliced: true,
                        selected: true,
                        url: 'http://www.hcharts.cn'
                    },
                    ['Safari',    30],
                    ['其他',   50]
                ]
            }]
        }, function(c) {
            // 环形图圆心
            var centerY = c.series[0].center[1],
                titleHeight = parseInt(c.title.styles.fontSize);
            c.setTitle({
                y:centerY + titleHeight/2
            });
            chart = c;
        })
    }
    render() {
        return (
            <div className="chart-item">
                {/*<p>1111</p>*/}
                <div className="charts-one"><div className="chart-one" id="container"  ></div></div>
                <div className="charts-two">
                    <div className="chart-two" id="container-two"></div>
                    <div className="chart-twos" id="container-twos"></div>
                </div>
                <div className="charts-three"><div className="chart-three" id="container-three"></div></div>
            </div>
        )
    }
}




export default Waring;