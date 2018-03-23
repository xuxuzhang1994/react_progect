import React, {Component} from 'react';
import { Input } from 'antd';
import 'antd/dist/antd.css';
const Search = Input.Search;
import './model-popup-security-equipment.less'
import { Pagination ,Icon} from 'antd';
export default class modelPopupSecurityEquipment extends Component{
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
            <section className='model-popup-danwei shandow'>
                <div className='subject'>
                    <div className='head flex'>
                        <div>》实时监控</div>
                        <Icon type="close" onClick={()=>this.handleCancel()}/>
                    </div>
                    <section className='video-box'>
                        <video src=''></video>
                    </section>

                    <section className='monitoring-information flex'>
                        <div className='info-item flex'>
                            <span>设备编号：</span>
                            <span>00124</span>
                        </div>
                        <div className='info-item'>
                            <span>地理位置：</span>
                            <span>xxx道路与xxx道路交叉口</span>
                        </div>
                        <div className='info-item'>
                            <span>设备状态：</span>
                            <span>正常</span>
                        </div>
                        <div className='info-item'>
                            <span>管理人员：</span>
                            <span>XXX</span>
                        </div>

                    </section>
                </div>
            </section>
        )}
}
