import React, {Component} from "react";
import "../Tarjeta/Tarjeta.css"

class Tarjeta extends Component {
	constructor(props){
		super(props);
		this.state = {
                        datos: this.props.info
		}
	} 

        
	render(){
		return(
			<article className= "tarjeta">
                        <main>
                        <div className= "boton-eliminar">
                                <button onClick={()=> this.props.borrarArtista(this.props.info.id)}>X</button>
                        </div>
                        <img src={this.state.datos.album.cover_medium} alt="Imagen"/>
                        <h3>{this.state.datos.title}</h3>
                        <p className="description">Artista: {this.state.datos.artist.name} - Duracion: {this.state.datos.duration} - Ranking: {this.state.datos.rank}</p>
                        <section className="aditional-info">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
                        </section>
                        <a href="">Ver más</a>
                        </main>
                        </article>
		);
	}
}

export default Tarjeta;