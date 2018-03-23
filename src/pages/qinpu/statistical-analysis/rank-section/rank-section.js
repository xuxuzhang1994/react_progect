import React, {Component} from 'react';
import './rank-section.less';
import Nav from 'components/Nav/Nav';
import { DropdownButton,MenuItem} from 'react-bootstrap';

export default class RankSection extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="rank-section shandow">
                <div className='jiao'>
                    <div className='top'></div>
                    <div className='right'></div>
                    <div className='bottom'></div>
                    <div className='left'></div>
                </div>
                <p className="rank-title">》预警排行统计</p>
                <div className="sel-section flex">
                    <div className="change-tab flex">
                        <div>公安实战</div>
                        <div>社会共治</div>
                    </div>
                    <div className="sel-right flex">
                        <div className="sel-drop">
                            <DropdownButton bsStyle='success' title={'出租房'} key={'d'} id={'d'}>
                                <MenuItem eventKey="1">1月</MenuItem>
                                <MenuItem eventKey="2">2月</MenuItem>
                            </DropdownButton>
                        </div>
                        <div className="bar-btn"></div>
                        <div className="line-btn"></div>
                    </div>
                </div>
                <div id="rank-chart" className="rank-chart"></div>
            </div>
        )
    }
}