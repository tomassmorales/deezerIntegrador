import React, {Component} from "react";
import Tarjeta from "../Tarjeta/Tarjeta"
import "../TarjetasSection/TarjetasSection.css"
import Formulario from "../Formulario/Formulario"


class TarjetasSection extends Component {
	constructor(props){
		super(props);
		this.state = {
			datos : "",
			filter: "",
		}
	}
	componentDidMount(){
		fetch("https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks&top?limit=10")
		.then(response => response.json())
		.then(data => this.setState(
			{
			datos: data.data,
			filter: data.data
			}
		))
		.catch(error => console.log(error))
	} 

	borrar(id){ 
		let artistasFiltrados = []; 
		artistasFiltrados = this.state.datos.filter( unArtista => unArtista.id !== id); 

		this.setState({
				datos: artistasFiltrados
		})
}

	filtrarBusqueda(aBuscar){
		let filtrado = this.state.datos.filter( personaje => 
			personaje.title.toLowerCase().includes(aBuscar.toLowerCase())
		)
		this.setState({
			filter: filtrado
		})
		console.log(filtrado);
	}





	render(){
		return(
			<React.Fragment>
			<Formulario filter = {(aBuscar) => this.filtrarBusqueda(aBuscar)}/>
                        <section className="card-container">
			{this.state.datos === "" ? <h1>Cargando...</h1> : 
			this.state.datos.map((cancion, idx) => <Tarjeta key = {cancion.title + idx} info = {cancion}
			borrarArtista={ (id)=> this.borrar(id) } />
			)}
			{this.state.filter === "" ? <h1>Cargando...</h1> : 
			this.state.filter.map((cancion, idx) => <Tarjeta key = {cancion.title + idx} info = {cancion}/>)}
                       </section>
		       <button type="button" className= "cargar">Cargar más tarjetas</button>
			</React.Fragment>
		);
	}
}

export default TarjetasSection;