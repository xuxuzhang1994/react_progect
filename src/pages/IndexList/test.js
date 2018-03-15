
import React, {Component} from 'react';
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
            <div>
                {
                    this.props.list.map((book,index) =>
                        <div>书名：{book.bookname}</div>)
                }
            </div>
        )}
}
