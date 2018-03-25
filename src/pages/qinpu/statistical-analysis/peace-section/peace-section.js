import React, {Component} from 'react';
import './peace-section.less';
import Nav from 'components/Nav/Nav';

export default class RankSection extends Component{
    constructor(props){
        super(props);
        const scoreList=[
            {
                name:'小区名称',
                sex:'98',
            },{
                name:'小区名称',
                sex:'98',
            },{
                name:'小区名称',
                sex:'98',
            },{
                name:'小区名称',
                sex:'98',
            },{
                name:'小区名称',
                sex:'98',
            },{
                name:'小区名称',
                sex:'98',
            },{
                name:'小区名称',
                sex:'98',
            },{
                name:'小区名称',
                sex:'98',
            },{
                name:'小区名称',
                sex:'98',
            },{
                name:'小区名称',
                sex:'98',
            },{
                name:'小区名称',
                sex:'98',
            },{
                name:'小区名称',
                sex:'98',
            },{
                name:'小区名称',
                sex:'98',
            },{
                name:'小区名称',
                sex:'98',
            },

        ];
        this.state={
            scoreList:scoreList
        }
    }
    componentDidMount(){
        var self=this;
        self._peace()
    }
    _peace(){



    }
    render(){
        return(
            <div className="peace-section shandow">
                <div className='jiao'>
                    <div className='top'></div>
                    <div className='right'></div>
                    <div className='bottom'></div>
                    <div className='left'></div>
                </div>
                <p className="rank-title">》社区平安指数</p>
                <div className="sel-section flex">
                    <div className="change-tab flex">
                        <div>公安实战</div>
                        <div>社会共治</div>
                    </div>
                </div>
                <div className="peace-chart">
                    <ul className="peace-info">
                        {
                            this.state.scoreList.map((item,$index)=>{
                             return (
                                 <li className="flex" key={$index}>
                                <div className="circle-num">{$index+1}</div>
                                <div className="community-info flex"><span>{item.name}</span><span className="score">{item.sex}</span></div>
                            </li>
                                )
                             })
                        }

                    </ul>
                </div>
            </div>
        )
    }
}