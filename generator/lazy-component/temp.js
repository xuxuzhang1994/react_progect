import React, {Component} from 'react';
import './<%= fileName %>.less';

class <%= upCaseName %> extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){

    }

    render() {
        return (
            <div className='<%= fileName %>'>
                This is '<%= fileName %>'
            </div>
        )
    }
}

export default <%= upCaseName %>

