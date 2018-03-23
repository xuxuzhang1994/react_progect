import React, {Component} from 'react';
import { Input } from 'antd';
const Search = Input.Search;
import './model-security-equipment.less'
import ModelPopupSecurityEquipment from '../model-popup-security-equipment/model-popup-security-equipment'
import { Modal } from 'antd';
import {DropdownButton,MenuItem} from 'react-bootstrap';

export default class  modelSecurityEquipment extends Component{
    constructor(props) {
        super(props);
        this.state = {
            dataList: [
                {
                    id:'上海xxx科技信息有限公司',
                    address:'xxx路与xx路交叉口'
                },
                {
                    id:'上海xxx科技信息有限公司',
                    address:'xxx路与xx路交叉口'
                },
                {
                    id:'上海xxx科技信息有限公司',
                    address:'xxx路与xx路交叉口'
                },
                {
                    id:'上海xxx科技信息有限公司',
                    address:'xxx路与xx路交叉口'
                },
                {
                    id:'上海xxx科技信息有限公司',
                    address:'xxx路与xx路交叉口'
                },
                {
                    id:'上海xxx科技信息有限公司',
                    address:'xxx路与xx路交叉口'
                },
                {
                    id:'上海xxx科技信息有限公司',
                    address:'xxx路与xx路交叉口'
                },
                {
                    id:'上海xxx科技信息有限公司',
                    address:'xxx路与xx路交叉口'
                },
            ],
            slidShowStatus:this.props.slidShowStatus,
            currentTab:this.props.currentTab,
        }
        console.log(this.props.list)
    }
    componentDidMount(){

    }

    componentWillReceiveProps(nextProps) {
        var self=this
        self.setState({
            currentTab: nextProps.currentTab
        });
        self._colume()
        console.log(this.props.currentTab)
    }
    onPressEnter(data){
        alert(data)
    }
    showModal(){
        this.setState({
            visible: !this.state.visible,
        });
    }

    slidUp(){
        var self=this
        self.setState({
            slidShowStatus:!this.state.slidShowStatus
        })
    }


    // 绘制柱状图
    _colume(){
        console.log(Highcharts.getOptions().colors)
        Highcharts.getOptions().colors = Highcharts.map(["#009FEB", "#E91F1F"], function (color) {
            return {
                linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
                stops: [
                    [0, '#25D7FB'],
                    [1, '#0B5ECF']
                ]
            };
            console.log(Highcharts.Color(color).brighten(-0.3).get('rgb'))

        });
        // 图表配置
        var options = {
            colors:{
                linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
                stops: [
                    [0, '#0B5ECF'],
                    [1, '#25D7FB']
                ]
            },
            chart: {
                type: 'column',
                spacing : [40, 15 , 10, 10]
            },
            title: {
                text: '》实有安防设施统计分析',
                useHTML:true
            },
            legend:{
                enabled: false,
                align: 'right',
                verticalAlign: 'top',
                x: 0,
                y: 29,
                useHTML:true
            },
            xAxis: {
                tickPosition: 'inside',
                categories: ['1月', '2月','3月', '4月','5月','6月','7月', '8月','9月', '10月','11月','12月'],
                className:'zhangjiayu',
                tickmarkPlacement:'between',
                tickPixelInterval:1,
            },
            yAxis: {
                gridLineDashStyle: 'ShortDash',
                title: {
                    text: null
                },

                tickAmount: 6,
                labels: {
                    formatter: function () {
                        return (Math.abs(this.value) / 100)
                    }
                },
            },
            plotOptions: {
                useHTML:true,
                column: {
                    stacking: 'normal',
                    //pointInterval:0.6,
                    //pointPadding:-0.25
                    pointPadding:0,
                    //groupPadding: 0
                }
            },
            credits: {
                enabled: false
            },
            series: [{
                name: '事件预警',
                data: [ 2000,500, 1300, 400, 700, 2000,500, 1300, 400, 700, 2000,500, 1300, 400, 700, 2000,500,]
            }],
            tooltip: {
                pointFormat: '{series.name}: <b>{point.y}</b> ({point.percentage:.1f}%)<br/>'
            }
        };
        // 图表初始化函数
        var chart = Highcharts.chart('equipment-colume', options);

    }
    render(){
        return (
            <div className={"model-security-equipment " + (this.state.slidShowStatus?'slid-out':'' + this.state.currentTab==4?'':'hide')}>
                <div className='sild-btn' onClick={() => this.slidUp()}>{this.state.slidShowStatus?'展开':'收起'}</div>

                <div className='right-container shandow' >
                    <div className='jiao'>
                        <div className='top'></div>
                        <div className='right'></div>
                        <div className='bottom'></div>
                        <div className='left'></div>
                    </div>
                    <div className='type-list'>
                        <div className='title'>实有安防设备</div>
                        <div className='search-box'>
                            <Search
                                placeholder="搜索单位"
                                onSearch={value => this.onPressEnter(value)}
                            />
                        </div>
                        <div className='select-box'>
                            <DropdownButton bsStyle='success' title={'技防设施'} key={'d'} id={'d'}>
                                <MenuItem eventKey="1">出租房</MenuItem>
                                <MenuItem eventKey="2">出租房</MenuItem>
                                <MenuItem eventKey="3" active>激活条目</MenuItem>
                                <MenuItem eventKey="4">出租房</MenuItem>
                            </DropdownButton>
                            <DropdownButton bsStyle='success' title={'监控探头'} key={'ddd'} id={'d'}>
                                <MenuItem eventKey="1">操作</MenuItem>
                                <MenuItem eventKey="2">另一操作</MenuItem>
                                <MenuItem eventKey="3" active>激活条目</MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey="4">分组链接</MenuItem>
                            </DropdownButton>
                        </div>
                        <div className='data-list' >
                            {this.state.dataList.map((item,$index) => {
                                return(
                                    <div key={$index} className={'data-item flex ' + ($index==1?'data-item-active':'')} onClick={()=>{this.showModal()}}>
                                        <img src={require('./shexiangtou.png')} alt=""/>
                                        <div className='item-info'>
                                            <div className='term'>
                                                <span>编号</span>
                                                <span>00124</span>
                                            </div>
                                            <div className='term'>
                                                <span>位置</span>
                                                <span>xxx路与xx路交叉口</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                </div>

                <div className='chart-box shandow'>
                    <div className='jiao'>
                        <div className='top'></div>
                        <div className='right'></div>
                        <div className='bottom'></div>
                        <div className='left'></div>
                    </div>
                    <div className='page flex'>
                        <div className='left page-btn'>
                            <i className='iconfont icon-arrowL'></i>
                        </div>
                        <div className='right page-btn'>
                            <i className='iconfont icon-arrowR'></i>
                        </div>
                    </div>
                    <div id='equipment-colume'></div>
                </div>

                {/* 单位详情弹框 */}
                <Modal
                    title="Basic Modal"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <ModelPopupSecurityEquipment cancelFunc={()=>this.showModal()}></ModelPopupSecurityEquipment>
                </Modal>

            </div>
        )}
}
