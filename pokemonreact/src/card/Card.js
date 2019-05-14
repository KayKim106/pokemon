import React, {Component} from 'react';
import { isExpressionWrapper, directive } from '@babel/types';

class Card extends Component{

    state={}

    render(){

    
const cardStyle={
    display:"flex",
    flexDirection:"column",
}
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
export default Card;