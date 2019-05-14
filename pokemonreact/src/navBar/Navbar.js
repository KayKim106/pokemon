import React,{Component} from 'react';
import './navbar.css';
import logo from '../assets/images/logo.png'
import logoOpen from '../assets/images/logo-open.png'
class NavBar extends Component{

    render(){
        return (

        <div className="navWrapper">
            <header>
                <div className="logo">
                    <img src={logo} className="logo-image" />
                    <img src={logoOpen} className="open-logo" />
                    
                </div>
                <div className="menu">
                    <nav>
                        <ul>
                            <a href="/"><li>Home</li></a>
                            <a href="/searchPokemon"><li>Search Pokemon</li></a>
                            <a href="/searchEvolveChain"><li>Pokemon Evolve Chain</li></a>
                            <a href="/allPokemons"><li>All Pokemons</li></a>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
        );
    }
}
export default NavBar;