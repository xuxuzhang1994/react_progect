import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import css from './clock.less'
export default class Clock extends Component {
    constructor(props) {
        super(props);
        var date=new Date()
        this.state = {
            date: moment().format('YYYY-MM-DD HH:mm:ss'),
        }

    }
    componentDidMount(){
        this._countTime()
    }

    _countTime(){
        var self=this;
        self.setState({
            date: moment().format('YYYY-MM-DD HH:mm:ss'),
        })

        setTimeout(function () {
            self._countTime()
        },1000)
    }


    render() {
        return (
            <div className='clock'>
                <span>{this.state.date}</span>
            </div>
        )
    }
}