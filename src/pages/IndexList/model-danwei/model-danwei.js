import React, {Component} from 'react';
import './model-danwei.less'
export default class  OneTask extends Component{
    constructor(props) {
        super(props);
        this.state = {
            date: '',
            person:'',
            work:'',
            applyclass:'',
            otherinfo:'',
            applytime1:'',
            applytime2:'',
            timecount:''
        }
        console.log(this.props.list)
    }
    render(){
        return (
            <div className='model-danwei'>
                <div className='right-container'>
                    <div className='type-list'>
                        <div className='search-box'>

                        </div>
                        <div className='type-box'>
                            <div className='type-item'>
                                企业单位
                            </div>
                            <div className='type-item'>
                                事业单位
                            </div>
                            <div className='type-item'>
                                机关团体
                            </div>
                            <div className='type-item'>
                                其他
                            </div>
                        </div>
                        <div className='data-list'>
                            <div className='data-item'>
                                上海xxx科技信息有限公司
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )}
}
