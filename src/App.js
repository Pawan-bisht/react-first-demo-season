import React,{ Component } from 'react';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
class App extends Component {
    constructor(props){
        console.log("Constructor");
        super(props);
        this.state = {
            latitude:null,
            errorMessage:'',
            number:0
        }

        setInterval(()=>{

            // this.setState({
            //     number:this.state.number + 1
            // })
            
            console.log("Inside constructor");
        },2000);
    }
    componentDidUpdate()
    {
        console.log("Component did Update");
    }
    componentDidMount()
    {
        console.log("Component did mount");
        window.navigator.geolocation.getCurrentPosition(
            (data)=>
            {
                //call this.setState() to change our object
                this.setState({
                    latitude: data.coords.latitude,
                    num : 40
                })
                //We never call this.state.latitude = something
            },
            (err)=>
            {
                this.setState({
                    errorMessage:err.message
                })
                console.log(err);
            }
        );
    }
    
    renderContent()
    {
        if(this.state.latitude && !this.state.errorMessage)
        return (
                <div>
                    <SeasonDisplay lat={this.state.latitude}/>
                    <h4>Latitude is :  {this.state.latitude}</h4>
                    </div>
                    )
        
        if(!this.state.latitude && this.state.errorMessage)
                return <h4>Error : {this.state.errorMessage}</h4>;
               
        return <Spinner msg="Please accept the location request ..."/>
    }

    render(){
       
    //    return(
    //        <div>
    //            {/* <SeasonDisplay name="Winter"/>  */}
    //            {this.state.number}
    //        </div>
    //    )

    //    let msg = 'Loading ...';
    //     if(this.state.latitude)
    //     {
    //         msg = <h4>Latitude is :  {this.state.latitude}</h4>;
    //     }
    //     else if(this.state.errorMessage)
    //     {
    //         msg = <h4>Error : {this.state.errorMessage}</h4>;
    //     }
    //     else
    //     {
    //         msg = <h4>Loading ....</h4>
    //     }
        return (
            <div className="red-border">
                {this.renderContent()}
            </div>
        )

        
       
    }
}

export default App;