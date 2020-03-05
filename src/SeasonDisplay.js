import React , { Component } from 'react';
import './SeasonDisplay.css';
const seasonConfig = {
    summer :
    {
        text : 'So much hot outside',
        iconName : 'sun'
    },
    winter :
    {
        text : 'Bro Its chill Outside',
        iconName : 'snowflake'
    }
}
class SeasonDisplay extends Component{
    
    constructor(props)
    {
        super(props);
        console.log(this.props);
    }
    
    getSeason(lat,month)
    {
        if(month > 2 && month < 9)
        {
            return (lat > 0) ? 'summer' : 'winter'; 
        }
        else
        {
            return (lat > 0) ? 'winter' : 'summer';
        }
    }
    render(){
        let season = this.getSeason(this.props.lat,new Date().month);
       
        const { text, iconName} = seasonConfig[season];
        console.log(iconName);
        return(
            <div className={`season-display ${season}`}>
                <i className={`icon-left massive ${iconName} icon`} />
                <h3>{text}</h3>
                <i className={`icon-right massive ${iconName} icon`} />
                
            </div>
        )
    }
}

export default SeasonDisplay;