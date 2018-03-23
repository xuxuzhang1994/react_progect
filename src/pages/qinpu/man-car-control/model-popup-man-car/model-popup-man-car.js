import React, {Component} from 'react';
import './model-popup-man-car.less';
import {input,Icon} from 'antd';
import 'antd/dist/antd.css';

export default class ModelPopupManCar extends Component{
    constructor(props){
        super(props);
        this.handleCancel=this.props.cancelFunc;

    }
    showModal=()=>{
        this.setState({
            visible:!this.state.visible,
        })
    }
    render() {
        return (
            <div className="model-popup-man-car shandow">
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
                <div className="control-video">
                    <img src={require("./video.jpg")} alt=""/>
                </div>

            </div>
        )
    }

}