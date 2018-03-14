import React, {Component} from 'react';
import api from "../../api/maintenance-api";
import './Page1.less';


import {connect} from 'react-redux';

class Waring extends Component {
    componentDidMount(){
        console.log('11111')
        // this._https();
        this.chartDataOne();
        // this.chartDataTwo();

    }
    // _https(){
    //     api.getCharts().then((data)=>{
    //         console.log('datas',data)
    //     })
    // }
    chartDataOne(){
         Highcharts.chart('container',{
             chart: {
                 polar: true,
                 type: 'line',
                 style:{
                     // backgroundColor:'#0075FC',
                 },
                 // plotBackgroundColor:'#0075FC',
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


        })


    }

    render() {
        return (
            <div className="chart-item">
                {/*<p>1111</p>*/}
                <div className="chart-one" id="container"  ></div>
                <div class="chart-two" id="container-two"></div>
                <div class="chart-three" id="container-three"></div>
            </div>
        )
    }
}




export default Waring;