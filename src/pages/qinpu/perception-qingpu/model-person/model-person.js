import React, {Component} from 'react';
import { Input } from 'antd';
const Search = Input.Search;
import './model-person.less'
import ModelPopupPerson from './model-popup-person/model-popup-person'
import { Modal, Button } from 'antd';
import { DropdownButton,MenuItem} from 'react-bootstrap';

export default class  ModelPerson extends Component{
    constructor(props) {
        super(props);
        const houseList=[
            {
                name:'张静',
                sex:'女',
                age:'18',
                count:'4',
                address:'徐泾镇二联馨苑2栋3单元502室',
                flags:'群租房'
            },
            {
                name:'张静',
                sex:'女',
                age:'18',
                count:'4',
                address:'徐泾镇二联馨苑2栋3单元502室',
                flags:'群租房'
            },
            {
                name:'张静',
                sex:'女',
                age:'18',
                count:'4',
                address:'徐泾镇二联馨苑2栋3单元502室',
                flags:'群租房'
            },
            {
                name:'张静',
                sex:'女',
                age:'18',
                count:'4',
                address:'徐泾镇二联馨苑2栋3单元502室',
                flags:'群租房'
            },
        ];
        this.state = {
            houseList: houseList,
            slidShowStatus:this.props.slidShowStatus,
            currentTab:this.props.currentTab
        }
        console.log(this.props.currentTab)
    }

    componentDidMount(){
        var self=this;
        //this._colume()
        console.log($('body'))
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            currentTab: nextProps.currentTab
        });
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
                text: '》年度预警趋势分析',
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
        var chart = Highcharts.chart('danwei_colume', options);

    }
    render(){
        return (
            <div className={"model-person " + (this.state.slidShowStatus?'slid-out':'' + this.state.currentTab==1?'':'hide')}>
                <div className='sild-btn' onClick={() => this.slidUp()}>{this.state.slidShowStatus?'展开':'收起'}</div>

                <div className='right-container shandow' >
                    <div className='jiao'>
                        <div className='top'></div>
                        <div className='right'></div>
                        <div className='bottom'></div>
                        <div className='left'></div>
                    </div>
                    <div className='person-count'>
                        <div className="color-blue">实有房屋</div>
                        <div className="search-input-right">
                            <input type="text" placeholder="搜索人员姓名"/>
                            <i className="iconfont icon-sousuo"></i>
                            <ul className="search-right-list">
                                <li>xx小区</li>
                                <li className="checked-list">xx小区</li>
                                <li>xx小区</li>
                            </ul>
                        </div>
                        <div className="sel-item">
                            <DropdownButton bsStyle='success' title={'出租房'} key={'d'} id={'d'}>
                                <MenuItem eventKey="1">出租房</MenuItem>
                                <MenuItem eventKey="2">出租房</MenuItem>
                                <MenuItem eventKey="3" active>激活条目</MenuItem>
                                <MenuItem eventKey="4">出租房</MenuItem>
                            </DropdownButton>
                            <DropdownButton bsStyle='success' title={'出租房'} key={'ddd'} id={'d'}>
                                <MenuItem eventKey="1">操作</MenuItem>
                                <MenuItem eventKey="2">另一操作</MenuItem>
                                <MenuItem eventKey="3" active>激活条目</MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey="4">分组链接</MenuItem>
                            </DropdownButton>
                            {/*<div className="sels">*/}
                            {/*<select>*/}
                            {/*<option value="">重点人口</option>*/}
                            {/*</select>*/}
                            {/*</div>*/}
                        </div>
                        <ul className="person-list">
                            {this.state.houseList.map((item,$index)=>{
                                return (
                                    <li  className={'flex'+ ($index==1?" checked-people":'') } key={'person-item'+$index} onClick={()=>{this.showModal()}}>
                                        <div className="person-pic">
                                            <img src={require("../../../../images/person-pic.jpeg")} alt=""/>
                                        </div>
                                        <div className="person-info">
                                            <div className="base-info flex">
                                                <b>姓名：{item.name}</b>
                                                <div className="sex color-blue">男</div>
                                                <span className="color-blue">32岁</span>
                                            </div>
                                            <div>
                                                <span>身份证号：</span>
                                                <span className="color-blue">342222222222****</span>
                                            </div>
                                            <div className="flex address">
                                                <span className="adr-label">家庭住址：</span>
                                                <div className="color-blue adr-info">青浦区xx小区2栋3单元508室</div>
                                            </div>
                                            <div className="label-item"><span>标签：</span><span className="person-label">精神病人</span></div>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
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
                    <div id='danwei_colume'></div>
                </div>

                {/* 单位详情弹框 */}
                <Modal
                    title="Basic Modal"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <ModelPopupPerson cancelFunc={()=>this.showModal()}></ModelPopupPerson>
                </Modal>

            </div>
        )}
}
