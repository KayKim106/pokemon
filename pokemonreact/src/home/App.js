import React , {Component} from 'react';
import './App.css';
import background from '../assets/images/background/background.jpg'
import Home from './Home'

class App extends Component{
  render(){

    return (
      <div className="App">
        {/* <Navbar /> */}
        <Home />
      </div>
    )
  }
}

export default App;