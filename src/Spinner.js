import React ,{ Component } from 'react';
class Spinner extends Component{
    static defaultProps = {
        msgs: "Loading ... "
    }
    constructor(props)
    {
        super(props);
    }
    render(){
        return (
                <div className="ui active dimmer">
                 <div className="ui text loader">{this.props.msgs}</div>
            </div>
        )
    }
}
export default Spinner;