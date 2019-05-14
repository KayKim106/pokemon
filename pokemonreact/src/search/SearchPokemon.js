import React, {Component} from 'react';


class SearchPokemon extends Component{

    constructor(props){
        super(props);
        this.state={
            pokemonName:'',
        }
        this.onChangePokemonName=this.onChangePokemonName.bind(this);
    }
    onChangePokemonName(e){
        this.setState({pokemonName:e.target.value})
    }
    render(){
   
    const SearchPokemon={
        display:"flex",
        flexDirection:"column",
    }
        return(
            <div className="searchWrapper">
                <div className="page-header">
                    <div className="row">
                        <div className="col-md-12">
                        </div>
                    </div>
                    <div class="jumbotron jumbotron-fluid">
                        <div class="container">
                            <h1 class="display-4">Find Your Favorite Pokemon</h1>
                            <p class="lead">Search by number or name</p>
                        </div>
                    </div>
                </div>
          
                <div className="content">
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-sm-12 col-md-3 card-wrapper">
                            {/* Card Component */}
                            <div className="maincontainer">
                                <div className="thecard">            
                                    <div className="cardFront">
                                        <div className="row">
                                            <div className="card-images">                   
                                                <img src={this.props.images}/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="card-name">
                                                
                                                <p>{this.props.name}</p>
                                            </div>
                                        </div>
                                    </div>
                                        <div className="cardBack">
                                            <div className="row cardBack-content">
                                                <div className="description col-md-12">
                                                    <h5>Description</h5>
                                                    <div>
                                                        <ul>
                                                            {this.props.type.map((ty,j)=>(
                                                                <li>Type : {ty.type.name}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                        
                                                </div>
                                                <div className="stat-list-content">
                                                    <ul>
                                                        {this.props.stats.map((stat,i)=>(
                                                                <li>{stat.stat.name} : <li className="stats-number">{stat.base_stat}</li></li>
                                                                )
                                                            )
                                                        }
                                                    </ul>
                                                </div>
                                                   
                                        </div>
                                    </div>
                                </div>
                            </div>



                        </div>
                        
                        <div className="col-sm-6 col-md-5">
                            <div className="row">
                            <input type="text"  className="form-control col-md-6 col-sm-6 searchText" value={this.state.pokemonName} onChange={this.onChangePokemonName} />
                            <button className="btn btn-primary col-md-2 col-sm-4" onClick={()=>this.props.searchPokemonName(this.state.pokemonName)}>
                                    <i className="fa fa-search"></i> Search 
                                </button>
                            </div>
                                
                        </div>
                    </div>
                </div>
                        
            </div>
            
        )
    }
}
export default SearchPokemon;