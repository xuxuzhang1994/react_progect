import React, {Component} from 'react';
import 'antd/dist/antd.css';
import './model-popup-hvae-house.less'
import {Input, Pagination ,Icon,DatePicker,LocaleProvider} from 'antd';
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
import zh_CN from 'antd/lib/locale-provider/zh_CN';
const Search = Input.Search;
export default class ModelPopupHaveHousei extends Component{
    constructor(props) {
        super(props);
        this.state={

        }
        this.handleCancel=this.props.cancelFunc
        console.log(this.props)
    }
    componentDidMount(){
        var self=this;
    }

    showModal = () => {
        this.setState({
            visible: !this.state.visible,
        });
    }



    onShowSizeChange(current, pageSize) {
        console.log(current, pageSize);
    }

    render(){
        return (
            <section className='model-popup-have-house shandow'>
                <div className='subject'>
                    <div className='head flex'>
                        <div>》一单位一档</div>
                        <Icon type="close" onClick={()=>this.handleCancel()}/>
                    </div>
                    <section className='house-info'>
                        <div className='slide-top-bar title-content'>
                            <div className='title'>房屋信息</div>
                        </div>
                        <div className='house-data-list'>
                            <div className='house-data-item title-content'>
                                <span className='title'>房主 : </span>
                                <span className='content'>赵雷</span>
                            </div>
                            <div className='house-data-item title-content'>
                                <span className='title'>面积 : </span>
                                <span className='content'>120平方</span>
                            </div>
                            <div className='house-data-item title-content'>
                                <span className='title'>使用权 : </span>
                                <span className='content'>70年</span>
                            </div>
                        </div>
                    </section>
                    <section className='tenant-info'>
                        <div className='slide-top-bar flex'>
                            <div className='title'>租客信息</div>
                        </div>
                        <div className='house-data-list flex'>
                            {[1,2,3,4].map( ($index) => {
                                return(
                                    <div className='b'>
                                        <div key={$index} className='item-box flex '>
                                            <img src={require('./person-pic.jpeg')} alt=""/>
                                            <div className='data-detail'>
                                                <div className='house-data-item title-content'>
                                                    <span className='title'>姓名：</span>
                                                    <span className='content'>赵雷</span>
                                                </div>
                                                <div className='house-data-item title-content'>
                                                    <span className='title'>性别：</span>
                                                    <span className='content'>120平方</span>
                                                </div>
                                                <div className='house-data-item title-content'>
                                                    <span className='title'>省份证号：</span>
                                                    <span className='content'>70年</span>
                                                </div>
                                                <div className='house-data-item title-content'>
                                                    <span className='title'>人物标签：</span>
                                                    <span className='content'>70年</span>
                                                </div>
                                                <div className='house-data-item title-content'>
                                                    <span className='title'>电话：</span>
                                                    <span className='content'></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                )
                            })}
                        </div>
                    </section>
                    <section className='water-coal'>
                        <div className='slide-top-bar flex'>
                            <div className='title'>租客信息</div>
                            <div className='data-time'>
                                <LocaleProvider locale={zh_CN}><MonthPicker placeholder="选择月" /></LocaleProvider>
                            </div>
                        </div>
                        <div className='water-coal-data-list flex'>
                            <div className='house-data-item flex'>
                                <img src={require('./water.jpg')} alt=""/>
                                <span className='content'>4吨</span>
                            </div>
                            <div className='house-data-item flex'>
                                <img src={require('./dian.jpg')} alt=""/>
                                <span className='content'>12吨</span>
                            </div>
                            <div className='house-data-item flex'>
                                <img src={require('./fire.jpg')} alt=""/>
                                <span className='content'>327度</span>
                            </div>
                        </div>
                    </section>
                    <section className='car-info'>
                        <div className='slide-top-bar flex'>
                            <div className='title'>车辆信息</div>
                        </div>
                        <div className='water-coal-data-list'>
                            {[1,2].map(($index) => {
                                return(
                                    <div key={$index} className='house-data-item flex'>
                                        <div className='title-content'>
                                            <span className='title'>车牌照 : </span>
                                            <span className='content'>4吨</span>
                                        </div>
                                        <div className='title-content'>
                                            <span className='title'>车主 : </span>
                                            <span className='content'>4吨</span>
                                        </div>
                                        <div className='time'>
                                            <span className='title'>进出时间</span>
                                        </div>

                                    </div>
                                )
                            })}

                        </div>
                    </section>
                </div>
            </section>
        )}
}
