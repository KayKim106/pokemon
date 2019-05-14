import React , {Component} from 'react';
import {Router, Route, BrowserRouter} from 'react-router-dom'; 

import Navbar from '../navBar/Navbar';
import ChainCard from './ChainCard';
class App extends Component{

    constructor(props){
        super(props)
        this.state={
            pokemon:[],
            firstPokemon:[],
            secondPokemon:[],
            thirdPokemon:[],
        }
    }
  

  componentWillMount(){
    // this.getPokemons();
    this.evolutionChain();
  
}


  evolutionChain(){
    fetch("http://pokeapi.co/api/v2/evolution-chain/1")
    .then(response => response.json())
    .then(response => 
      
       
        this.setState({pokemon:response.chain,pokemon:response.chain.species,secondPokemon:response.chain.evolves_to[0].species, thirdPokemon:response.chain.evolves_to[0].evolves_to[0].species}) )
    } 

//   getPokemons = _ =>{
//     fetch("http://pokeapi.co/api/v2/generation/1")
//     .then(response => response.json())
//     // .then(response => console.log(response))
//     .then(response => this.setState({pokemons:response.pokemon_species}))
//   }

//   getPokemonImage =function(name){
//     let targetPokemon = `https://pokeapi.co/api/v2/pokemon/pikachu`;
//     let imageURL= 'pikachu';
//     fetch(targetPokemon)
//     .then(response => response.json())
//     .then(response => imageURL +=response
//     )
//     return imageURL;
//   }

//   renderCards = ({name,images}) => 
//       <Card name={name} images={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"}/>
// getPoke = function(name){
//     let targetPokemon = `https://pokeapi.co/api/v2/pokemon/${name}`;
//       fetch(targetPokemon)
//       .then(response => response.json())
//       .then(response => this.setState({stat:[response.stats], types:[response.types], pokemon:[response], species:[response.species],images:[response.sprites.front_default]})
    
//       )
//   }

  render(){
    const {pokemon} = this.state

 
    console.log(this.state.firstPokemon,this.state.secondPokemon,this.state.thirdPokemon)
    // if(pokemon!=''){
    //     this.setState({firstPokemon:pokemon.species})
    //     if(pokemon.species!=''){
    //         this.setState({secondPokemon:pokemon.evolves_to});
            
    //         // if(this.state.secondPokemon.evolves_to!=''){
    //         //     this.setState({thirdPokemon:secondPokemon.evolves_to})
    //         // }
    //     }

    // }
    // console.log(pokemon.species)
    // console.log(pokemon.evolves_to)
    return (
      <div className="App">
      {/* <Navbar/> */}
      {/* {pokemons.map(this.renderCards)} */}
      </div>
    )
  }
}

export default App;