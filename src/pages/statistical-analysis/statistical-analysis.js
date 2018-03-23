import React, {Component} from 'react';
import './statistical-analysis.less';
import Nav from 'components/Nav/Nav';
import api from "../../api/maintenance-api";
import RankSection from './rank-section/rank-section';


export default class Statiscal extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="statiscal">
                <Nav/>
                <section className="statiscal-section">
                    <RankSection/>
                </section>
            </div>
        )
    }
}