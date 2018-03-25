import React, {Component} from 'react';
import "./model-popup-person.less"
import {input,Icon} from 'antd';

export default class ModelPopupPerson extends Component{
    constructor(props){
        super(props);
        this.handleCancel=this.props.cancelFunc;
    }
    showModal=()=>{
        this.setState({
            visible:!this.state.visible,
        })
    }
    render(){
        return (
            <section className="model-popup-person shandow">
                <div className='jiao'>
                    <div className='top'></div>
                    <div className='right'></div>
                    <div className='bottom'></div>
                    <div className='left'></div>
                </div>
                <div className="model-title flex">
                    <div>》一人一档</div>
                    <Icon type="close" onClick={()=>this.handleCancel()}/>
                </div>
                <div className="model-info flex">
                    <div className="info-left">
                        <div className="car-info">
                            <img src={require("./img/car.png")} alt=""/>
                            <img src={require("./img/car-checked.png")} alt="" style={{display:'none'}}/>
                        </div>
                        <div className="smoke-info">
                            <img src={require("./img/smoke.png")} alt=""/>
                            <img src={require("./img/smoke-checked.png")} alt="" style={{display:'none'}}/>
                        </div>
                        <div className="mac-info">
                            <img src={require("./img/mac.png")} alt=""/>
                            <img src={require("./img/mac-checked.png")} alt="" style={{display:'none'}}/>
                        </div>
                        <div className="event-info">
                            <img src={require("./img/event.png")} alt=""/>
                            <img src={require("./img/event-checked.png")} alt="" style={{display:'none'}}/>
                        </div>
                        <div className="house-info">
                            <img src={require("./img/house.png")} alt=""/>
                            <img src={require("./img/house-checked.png")} alt="" style={{display:'none'}}/>
                        </div>
                        <div className="base-info">
                            <img src={require("./img/baseinfo.png")} alt="" style={{display:'none'}}/>
                            <img src={require("./img/base-checked.png")} alt="" />
                        </div>
                        <div className="door-info">
                            <img src={require("./img/door.png")} alt=""/>
                            <img src={require("./img/door-checked.png")} alt="" style={{display:'none'}}/>
                        </div>
                        <div className="unit-info">
                            <img src={require("./img/unit.png")} alt=""/>
                            <img src={require("./img/unit-checked.png")} alt="" style={{display:'none'}}/>
                        </div>

                    </div>
                    <div className="info-right">
                        <div className="base-infos flex">
                            <div className="person-pic">
                                <img src={require("./img/person-pic.jpeg")} alt=""/>
                            </div>
                            <div className="right-info">
                                <div>
                                    <span>姓名：</span>
                                    <span>张云飞</span>
                                </div>
                                <div>
                                    <span>性别：</span>
                                    <span>男</span>
                                </div>
                                <div>
                                    <span>年龄：</span>
                                    <span>32岁</span>
                                </div>
                                <div>
                                    <span>身份证号：</span>
                                    <span>3422222222222****</span>
                                </div>
                            </div>

                        </div>
                        <div className="other-info">
                            <div>
                                <span>民族：</span>
                                <span>汉</span>
                            </div>
                            <div>
                                <span>国籍：</span>
                                <span>中国</span>
                            </div>
                            <div>
                                <span>文化程度：</span>
                                <span>专科</span>
                            </div>
                            <div>
                                <span>人物标签：</span>
                                <span>精神病人</span>
                            </div>
                            <div>
                                <span>人员状态：</span>
                                <span>未知</span>
                            </div>
                            <div>
                                <span>婚姻：</span>
                                <span>已婚</span>
                            </div>
                            <div>
                                <span>居地住址：</span>
                                <span>青浦区xxxxxx小区2栋3单元508室</span>
                            </div>
                            <div>
                                <span>电话：</span>
                                <span className="phone-info">021-*******</span>
                                <span>1515575****</span>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        )
    }
}