import React , {Component} from 'react';
import SearchPokemon from './SearchPokemon';
import './search.css'

class App extends Component{

  constructor(props){
    super(props);
    this.state= {
      pokemon:[],
      species:[],
      images:[],
      stat:[],
      types:[],
      name:'',
    }   
  }
  componentDidMount(){
    // default search 
    this.getPoke("pikachu");
  }

  // Get Params from Child component for searching Pokemon
  searchPokemonName(name){

    // passing params to api function
    this.getPoke(name);
  }
 
  getPoke = function(name){
    let targetPokemon = `https://pokeapi.co/api/v2/pokemon/${name}`;
      fetch(targetPokemon)
      .then(response => response.json())
      .then(response => this.setState({stat:[response.stats], types:[response.types], pokemon:[response], species:[response.species],images:[response.sprites.front_default]})
    
      )
  }

  // rendering card 
  renderCards = ({name,id,weight,stats,types}) =>
      <SearchPokemon searchPokemonName={this.searchPokemonName.bind(this)} name={name} stats ={stats} type={types} images={this.state.images} />


  render(){
      const {pokemon,species,images,stats}= this.state

      return (
      <div className="App">
 
        {pokemon.map(this.renderCards)}
      </div>
    )
  }
}

export default App;