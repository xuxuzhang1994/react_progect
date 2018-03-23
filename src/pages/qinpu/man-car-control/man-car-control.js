import React, {Component} from 'react';
import './man-car-control.less';
import Nav from 'components/Nav/Nav';
import ModelPopupManCar from './model-popup-man-car/model-popup-man-car'
import {Modal, Input, Col, Select, InputNumber, DatePicker, AutoComplete, Cascader } from 'antd';
const InputGroup = Input.Group;
const Option = Select.Option;

export default class ManCarControl extends Component{
    constructor(props){
        super(props);
        this.state={
            visible: false,
        }
    }
    showModal(){
        this.setState({
            visible: !this.state.visible,
        });
    }
    render(){
        return(
            <div className="man-car-control">
                {/*导航*/}
                <Nav index='4'/>
                <section className="man-car-section">
                    <div className="input-item clearfix">
                        <div className="input-name"><Input addonBefore="姓名" defaultValue="" /></div>
                        <div className="input-car"><Input addonBefore="车牌" defaultValue="" /></div>
                        <div className="input-phone"><Input addonBefore="手机号" defaultValue="" /></div>
                        <div className="input-area"><Input addonBefore="布控区域" defaultValue="" /></div>
                        <div className="input-time"><Input addonBefore="时间" defaultValue="" /></div>
                        <div className="control-btn" >一键布控</div>
                    </div>
                    <div className="man-car-popup ">
                        <div className="detail-title">预警详细信息</div>
                        <ul className="detail-info ">
                            <li>
                                <span>时间：</span>
                                <span>2018-03-23   09:25:15</span>
                            </li>
                            <li>
                                <span>地点：</span>
                                <span>青浦区徐泾徐灵路300弄8号305室</span>
                            </li>
                            <li>
                                <span>车牌：</span>
                                <span>xxxxxxx</span>
                            </li>
                            <li>
                                <span>姓名：</span>
                                <span>xxxxxx</span>
                            </li>
                            <li>
                                <span>感知设备：</span>
                                <span>监控探头</span>
                            </li>
                        </ul>
                        <div className="look-btn flex" onClick={()=>{this.showModal()}}>
                            <img src={require("./control-icon.jpg")} alt=""/>
                            <span >查看监控</span>
                        </div>
                    </div>
                </section>
                {/*弹窗*/}
                <Modal
                    title="Basic Modal"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <ModelPopupManCar cancelFunc={()=>this.showModal()}></ModelPopupManCar>
                </Modal>


            </div>
        )
    }
}
