
const express = require('express');
const cors = require('cors');
const fetch =require('node-fetch');

const app = express();

app.use(cors());


let pokemons =
[
    {
     "name":'kay',
     'age':"30",
     'gender':'male',
     'level' :"20",   
    },
    {
        "name":'julie',
        'age':"30",
        'gender':'female',
        'level' :"27",   
       },
       {
        "name":'yongok',
        'age':"30",
        'gender':'male',
        'level' :"30",   
       }
];



let pokeapiURL = "http://pokeapi.co/api/v2/generation/1";
let targetPokemon = "https://pokeapi.co/api/v2/pokemon/12/";



app.get('/',(req,res) =>{
  
let pokeapiURL = "http://pokeapi.co/api/v2/generation/1";
    fetch(targetPokemon)
        .then(response => response.json())
        .then(response => console.log(response))
    res.send(pokemons)
})

app.get('/allPokemons',(req,res)=>{

    // fetch(pokeapiURL)
    // .then(response => response.json())
    // .then(response => res.json(response))
   
})
app.get('/searchPokemon',(req,res)=>{
    fetch(targetPokemon)
    .then(response=> response.json())
    .then(response => res.json(response) )
})

app.get('/cards', (req,res)=>{

})
app.listen(4000, ()=>{
    console.log('App is running');
})


//need to send api request for get all the pokemon datas
