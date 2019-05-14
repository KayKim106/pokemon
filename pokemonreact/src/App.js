import React , {Component} from 'react';
import {Router, Route, BrowserRouter} from 'react-router-dom';
import './App.css'


// Child components

import CardView from './card/App'
import SearchView from './search/App'
import HomeView from './home/App'
import EvolveChain from './chainCard/App'
import Navbar from './navBar/Navbar'
class App extends Component{
  render(){

    return (
      <div>
        <Navbar/>
      
      <BrowserRouter>
        <Route exact path="/" component={HomeView}/>
        <Route path="/allPokemons" component={CardView}/>
        <Route path="/searchPokemon" component={SearchView} />
        <Route path="/searchEvolveChain" component={EvolveChain} />
      </BrowserRouter>
       
      </div>
    )
  }
}

export default App;