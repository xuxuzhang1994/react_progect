import React, {Component} from 'react';
import api from "../../api/maintenance-api";
import 'antd/dist/antd.css';
import './Warning.less';
// import 'antd/lib/time-picker/style/index.css';
import Nav from 'components/Nav/Nav';
import { DatePicker } from 'antd';
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;



import {connect} from 'react-redux';

class Waring extends Component {
    constructor(props){
        super(props);
        const warnTabList=[
            {
                id:0,
                value:'治安支队',
            },
            {
                id:1,
                value:'消防支队',
            },
            {
                id:2,
                value:'刑侦支队',
            },
            {
                id:3,
                value:'交警支队',
            },
            {
                id:4,
                value:'网安支队',
            },
            {
                id:5,
                value:'更多》'
            }
        ];
        const warningList=[
            {
                info:'青浦区二联馨苑1栋301室出现烟雾报警请及时处理！',
                type:'火警消防',
                time:'2018-02-01  19：12',
                level:1

            },
            {
                info:'青浦区二联馨苑1栋301室出现烟雾报警请及时处理！',
                type:'火警消防',
                time:'2018-02-01  19：12',
                level:2

            },
            {
                info:'青浦区二联馨苑1栋301室出现烟雾报警请及时处理！',
                type:'火警消防',
                time:'2018-02-01  19：12',
                level:3

            },
            {
                info:'青浦区二联馨苑1栋301室出现烟雾报警请及时处理！',
                type:'火警消防',
                time:'2018-02-01  19：12',
                level:4


            },
            {
                info:'青浦区二联馨苑1栋301室出现烟雾报警请及时处理！',
                type:'火警消防',
                time:'2018-02-01  19：12',
                level:4

            },
            {
                info:'青浦区二联馨苑1栋301室出现烟雾报警请及时处理！',
                type:'火警消防',
                time:'2018-02-01  19：12',
                level:5

            }
        ]
        this.state={
            warnTabList:warnTabList,
            warningList:warningList
        }
    }
    componentDidMount(){
        console.log('11111')


    }
    render() {
        const chooseColor=function (index) {
            switch(index) {
                case 1:return 'bg-red';break;
                case 2:return 'bg-red2';break;
                case 3:return 'bg-origin';break;
                case 4:return 'bg-yellow';break;
                case 5:return 'bg-green';break;
            }
        }
        function onChange(date, dateString) {
            console.log(date, dateString);
        }
        return (
            <div >
                <Nav index='1'></Nav>
                <div className="waring-list">
                    <section className="search-section clearfix ">
                        <div className="police-waring   shandow">
                            <div className='jiao'>
                                <div className='top'></div>
                                <div className='right'></div>
                                <div className='bottom'></div>
                                <div className='left'></div>
                            </div>
                            <div className="warning-title title-color ">》公安实战预警</div>
                            <div className="search-top flex">
                                <div className="waring-totle  flex">
                                    <div >预警总数：</div> <div className="warning-count">16条</div>
                                </div>
                                <div className="search-right flex">
                                    <span className="cor-time">起止时间</span>
                                    <div className="search-input flex">
                                        <DatePicker onChange={onChange} allowClear={false}  placeholder="请选择开始时间"/>
                                        <span className="search-txt">至</span>
                                        <DatePicker onChange={onChange} allowClear={false} placeholder="请选择结束时间"/>
                                    </div>
                                    <div className="search-btn">查询</div>
                                </div>
                            </div>
                            <ul className="tab-items flex">
                                {this.state.warnTabList.map((item,$index)=>{
                                    return(
                                        <li className={ $index==1? "checked-item":''} key={$index}>{item.value}</li>
                                    )
                                })}

                            </ul>
                            <ul className="info-item">
                                {
                                    this.state.warningList.map((item,$index)=>{
                                        return (
                                            <li className={"flex "+  ( chooseColor(item.level)) } key={$index}>
                                                <div className="info-left">预警信息：{item.info}</div>
                                                <span>类型：{item.type}</span>
                                                <div className="info-right flex">
                                                    <div className="">时间：{item.time}</div>
                                                    <i className="iconfont icon-icon7">  </i>
                                                </div>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div className="society-waring   shandow">
                            <div className='jiao'>
                                <div className='top'></div>
                                <div className='right'></div>
                                <div className='bottom'></div>
                                <div className='left'></div>
                            </div>
                            <div className="warning-title title-color ">》社会共治预警</div>
                            <div className="search-top flex">
                                <div className="waring-totle  flex">
                                    <div >预警总数：</div> <div className="warning-count">16条</div>
                                </div>
                                <div className="search-right flex">
                                    <span className="cor-time">起止时间</span>
                                    <div className="search-input flex">
                                        <DatePicker onChange={onChange} allowClear={false}  placeholder="请选择开始时间"/>
                                        <span className="search-txt">至</span>
                                        <DatePicker onChange={onChange} allowClear={false} placeholder="请选择结束时间"/>
                                    </div>
                                    <div className="search-btn">查询</div>
                                </div>
                            </div>
                            <ul className="tab-items flex">
                                {this.state.warnTabList.map((item,$index)=>{
                                    return(
                                        <li className={ $index==1? "checked-item":''} key={$index}>{item.value}</li>
                                    )
                                })}

                            </ul>
                            <ul className="info-item">
                                {
                                    this.state.warningList.map((item,$index)=>{
                                        return (
                                            <li className={"flex "+  ( chooseColor(item.level)) } key={$index}>
                                                <div className="info-left">预警信息：{item.info}</div>
                                                <span>类型：{item.type}</span>
                                                <div className="info-right flex">
                                                    <div className="">时间：{item.time}</div>
                                                    <i className="iconfont icon-icon7">  </i>
                                                </div>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>

                    </section>
                </div>

            </div>

        )
    }
}





export default Waring;