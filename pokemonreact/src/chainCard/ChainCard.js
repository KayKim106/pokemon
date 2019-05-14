import React, {Component} from 'react';

class ChainCard extends Component{

    constructor(props){
        super(props)
        this.state={
            
        }
    }
    render(){
        return(
            <div className="maincontainer">
                <div className="thecard">
                    <div className="thefront">
                    
                    <div className="row">
                            <div className="card-images">                   
                                <img src={this.props.images}/>
                            </div>
                        </div>
                    {this.props.name}</div>
                    <div className="theback"> </div>
                </div>
            </div>
 
        )
    }
}
export default ChainCard;