import React , {Component} from 'react';
import {Router, Route, BrowserRouter} from 'react-router-dom'; 
import $ from 'jquery'; 
import Navbar from '../navBar/Navbar';
import Card from './Card';
import './card.css'

class App extends Component{

  constructor(props){
    super(props)
    this.state={
      pokemons :[],
      imagesURL:'',
      allPokemons:[],
    }
  }
 
  componentWillMount(){

    this.getPokemons();
  }

  getPokemons = _ =>{
    fetch("http://pokeapi.co/api/v2/generation/1")
    .then(response => response.json())
    .then(response => this.setState({pokemons:response.pokemon_species}))
  }

  getPokemonImage =function(name){
    let targetPokemon = `https://pokeapi.co/api/v2/pokemon/${name}`;
    fetch(targetPokemon)
    .then(response => response.json())
    .then(response => this.setState({imagesURL:response.sprites.front_default})
    )
  }

  getPokemons = _ =>{
    
    let tempArray='';
    fetch("http://pokeapi.co/api/v2/generation/1")
    .then(response => response.json())
    .then(function(response){
        let pokemons = response.pokemon_species
        let allPoke = [];
         pokemons.map(function(poke){
          let temp=[];
          fetch(`https://pokeapi.co/api/v2/pokemon/${poke.name}`)
          .then(res => res.json())
          .then(function(res){
            let p={
              'name':poke.name,
              'imageURL':res.sprites.front_default,
            }

            let type = res.types;
            let stats=res.stats;
            let stat ='';
         
            if(stats.length>3){
              stat =
              "<li>"+stats[0].stat.name+" : "+"<li class=stats-number>"+stats[0].base_stat+"</li>"+"</li>"+
              "<li>"+stats[1].stat.name+" : "+"<li class=stats-number>"+stats[1].base_stat+"</li>"+"</li>"+
              "<li>"+stats[2].stat.name+" : "+"<li class=stats-number>"+stats[2].base_stat+"</li>"+"</li>"+
              "<li>"+stats[3].stat.name+" : "+"<li class=stats-number>"+stats[3].base_stat+"</li>"+"</li>"+
              "<li>"+stats[4].stat.name+" : "+"<li class=stats-number>"+stats[4].base_stat+"</li>"+"</li>"+
              "<li>"+stats[5].stat.name+" : "+"<li class=stats-number>"+stats[5].base_stat+"</li>"+"</li>"
            }
        

      
            let pokeTypes='';
            if(type.length>0){ 
              if(type.length>1){
                pokeTypes ="<li>"+type[0].type.name+"</li>"+"<li>"+type[1].type.name+"</li>"
              }else{
                pokeTypes ="<li>"+type[0].type.name+"</li>"
              }
          }
    
        
            allPoke.push(p)

        

          
          $("#po").append("<div class=maincontainer>"+
                                "<div class=thecard>"+
                                    "<div class=cardFront>"+
                                        "<div class=row>"+
                                            "<div class=card-images>"+
                                                "<img src="+p.imageURL+" />"+
                                            "</div>"+
                                        "</div>"+
                                        "<div class=row>"+
                                          "<div class=card-name>"+
                                            "<p>"+p.name+"<p>"+
                                         "</div>"+
                                         "</div>"+
                                    "</div>"+
                                  "<div class=cardBack>"+
                                    "<div class=rowBack-content>"+
                                        "<div class=description col-md-12>"+
                                            "<h5>Description</h5>"+
                                            "<div>"+
                                                "<ul>"+

                                                  pokeTypes+
                                              
                                                "</ul>"+
                                            "</div>"+
                                              
                                  "</div>"+
                                  "<div class=stat-list-content>"
                                  +"<ul>"+
                                  stat+
                                  "</ul>"+
                                  "</div>"+
                                "</div>"+
                            "</div>"+
                          "</div>"+
                        "</div>"+
                      "</div>"
                            
                            
                            
                            )
        });
       
      })    
    }
  )
  this.setState({allPokemons:tempArray})
};














  render(){
  
  
    return (
      <div className="App">
      <div id="po" className="col-md-12 col-sm-12"></div>
  
      </div>
    )
  }
}

export default App;