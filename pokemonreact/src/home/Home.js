import React, {Component} from 'react';
import background from '../assets/images/background/background.jpg'
import { NONAME } from 'dns';


class Home extends Component{
    render(){
      
        const style = {
      
            backgroundImage: `url(${background})`,
            backgroundSize:"100% 100%",
            backgroundRepeat:"no-repeat",
            
        }
        return(
        <div className ="homeWrapper" style={style}>
            <div className ="contents" >
                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h1 class="display-4">Welcome to pokemon World</h1>
                    </div>
                </div>  
            </div>
        </div>
        )
    }
}
export default Home;