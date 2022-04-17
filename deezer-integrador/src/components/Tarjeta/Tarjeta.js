import React, {Component} from "react";
import "../Tarjeta/Tarjeta.css"

class Tarjeta extends Component {
	constructor(props){
		super(props);
		this.state = {
                        datos: this.props.info,
                        viewMore: false,
                        text: "Ver más",
                        infoAdicionalTarjeta: "",
                        orientacion: this.props.orientacion
                        
		}
	} 
        viewMore(){
                if(this.state.viewMore == true ){
                    this.setState({
                        viewMore: false,
                        text: "Ver mas"
                    })
                } else {
                    this.setState({
                        viewMore: true,
                        text: 'Ver menos'
                    })            
                }
            }

        
	render(){
		return(
                //{this.state.viewMore == false ?
		<article className= "tarjeta">
                        <main>
                        <div className= "boton-eliminar">
                                <button onClick={()=> this.props.borrarArtista(this.props.info.id)}>X</button>
                        </div>
                        <img src={this.state.datos.album.cover_medium} alt="Imagen"/>
                        <h3>{this.state.datos.title}</h3>
                        <p className="description">Artista: {this.state.datos.artist.name} - Duracion: {this.state.datos.duration} - Ranking: {this.state.datos.rank}</p>

                        <button className='more' onClick={()=>this.viewMore()}> {this.state.text} </button>
                                {this.state.viewMore == false ? <h1> </h1> :
                                <div>
                                <h5>Album: {this.state.datos.album.title}</h5> 
                                <p>Rank: {this.state.datos.rank} </p> 
                                </div>
                                }

                        </main>
                </article>
                // :
                // <article className= "tarjeta-invertida">
                //         <main>
                //         <div className= "boton-eliminar">
                //                 <button onClick={()=> this.props.borrarArtista(this.props.info.id)}>X</button>
                //         </div>
                //         <img src={this.state.datos.album.cover_medium} alt="Imagen"/>
                //         <h3>{this.state.datos.title}</h3>
                //         <p className="description">Artista: {this.state.datos.artist.name} - Duracion: {this.state.datos.duration} - Ranking: {this.state.datos.rank}</p>

                //         { <button className='more' onClick={()=>this.viewMore()}> {this.state.text} </button>
                //                 {this.state.viewMore == false ? <h1> </h1> :
                //                 <div>
                //                 <h5>Album: {this.state.datos.album.title}</h5> 
                //                 <p>Rank: {this.state.datos.rank} </p> 
                //                 </div>
                //                 }

                //         </main> }
                // </article>
                

                //}
		);
	}
}

export default Tarjeta;