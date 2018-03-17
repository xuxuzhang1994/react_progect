import React, {Component} from 'react';
import api from "../../api/maintenance-api";
import './Warning.less';
import Nav from 'components/Nav/Nav';
// import { DatePicker } from 'antd';
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
                value:'更多'
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
        return (
            <div >
                <Nav index='1'></Nav>
                <div className="waring-list">
                    <section className="search-section clearfix ">
                        <div className="police-waring pull-left shandow">
                            <div className='jiao'>
                                <div className='top'></div>
                                <div className='right'></div>
                                <div className='bottom'></div>
                                <div className='left'></div>
                            </div>
                            <p className="warning-title title-color ">》公安实战预警</p>
                            <div className="search-top flex">
                                <div className="waring-totle  flex">
                                    <p >预警总数：</p> <p className="warning-count">16条</p>
                                </div>
                                <div className="search-right flex">
                                    <span className="cor-time">起止时间</span>
                                    <DatePicker onChange={onChange} />
                                    {/*<div className="search-input">*/}
                                        {/*<img src={require("../../images/construct/search.jpeg")} alt=""/>*/}
                                    {/*</div>*/}
                                    <p className="search-btn">查询</p>
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
                                                <p className="info-left">预警信息：{item.info}</p>
                                                <span>类型：{item.type}</span>
                                                <div className="info-right flex">
                                                    <p className="">时间：{item.time}</p>
                                                    <i className="iconfont icon-icon7">  </i>
                                                </div>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div className="society-waring pull-left shandow">
                            <div className='jiao'>
                                <div className='top'></div>
                                <div className='right'></div>
                                <div className='bottom'></div>
                                <div className='left'></div>
                            </div>
                            <p className="warning-title title-color font-18 p-t-10 ">》社会共治预警</p>
                            <div className="search-top flex">
                                <div className="waring-totle font-18 ">
                                    <p className="">预警总数：</p> <span>11条</span>
                                </div>
                                <div className="search-right ">
                                    <label className="cor-time">起止时间</label>
                                    <div className="search-input">
                                        <img src={require("../../images/construct/search.jpeg")} alt=""/>
                                    </div>
                                    <p className="search-btn">查询</p>
                                </div>
                            </div>
                            <ul className="tab-items flex">
                                <li className="checked-item">综治办</li>
                                <li>网格中心</li>
                                <li>居委会</li>
                                <li>物业</li>
                                <li>交警支队</li>
                                <li>更多》</li>
                            </ul>
                            <ul className="info-item">
                                <li className="flex bg-red">
                                    <p className="info-left">预警信息：青浦区二联馨苑1栋301室出现烟雾报警请及时处理！</p>
                                    <span>类型：火灾消防</span>
                                    <div className="info-right flex">
                                        <p className="">时间：2018/02/01  19:12</p>
                                        <i className="iconfont icon-icon7">  </i>
                                    </div>
                                </li>
                                <li className="flex bg-red2">
                                    <p className="info-left">预警信息：青浦区二联馨苑1栋301室出现烟雾报警请及时处理！</p>
                                    <span>类型：火灾消防</span>
                                    <div className="info-right flex">
                                        <p className="">时间：2018/02/01  19:12</p>
                                        <i className="iconfont icon-icon7">  </i>
                                    </div>
                                </li>
                                <li className="flex bg-origin">
                                    <p className="info-left">预警信息：青浦区二联馨苑1栋301室出现烟雾报警请及时处理！</p>
                                    <span>类型：火灾消防</span>
                                    <div className="info-right flex">
                                        <p className="">时间：2018/02/01  19:12</p>
                                        <i className="iconfont icon-icon7">  </i>
                                    </div>
                                </li>
                                <li className="flex bg-yellow">
                                    <p className="info-left">预警信息：青浦区二联馨苑1栋301室出现烟雾报警请及时处理！</p>
                                    <span>类型：火灾消防</span>
                                    <div className="info-right flex">
                                        <p className="">时间：2018/02/01  19:12</p>
                                        <i className="iconfont icon-icon7">  </i>
                                    </div>
                                </li>
                                <li className="flex bg-yellow">
                                    <p className="info-left">预警信息：青浦区二联馨苑1栋301室出现烟雾报警请及时处理！</p>
                                    <span>类型：火灾消防</span>
                                    <div className="info-right flex">
                                        <p className="">时间：2018/02/01  19:12</p>
                                        <i className="iconfont icon-icon7">  </i>
                                    </div>
                                </li>
                                <li className="flex bg-green">
                                    <p className="info-left">预警信息：青浦区二联馨苑1栋301室出现烟雾报警请及时处理！</p>
                                    <span>类型：火灾消防</span>
                                    <div className="info-right flex">
                                        <p className="">时间：2018/02/01  19:12</p>
                                        <i className="iconfont icon-icon7">  </i>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </section>
                </div>

            </div>

        )
    }
}





export default Waring;