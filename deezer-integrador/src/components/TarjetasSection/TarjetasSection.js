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
			limit: 10,
			orientacion: false,
			mensaje: 'invertir orientacion'

		}
	}
	componentDidMount(){
		fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks&top?limit=` + this.state.limit) 
		.then(response => response.json())
		.then(data => this.setState(
			{
			datos: data.data,
			filter: data.data, 
			limit: this.state.limit 
			}
		))
		.catch(error => console.log(error))
	} 

	agregarTarjetas(){
		fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks&top?limit=` + this.state.limit)
		.then((response)=> response.json())
		.then((data)=> {
			console.log(data); 
			this.setState({
				datos: data.data,
				filter: data.data,
				limit: this.state.limit+10,
			})
		})
		.catch(error => console.log(error))
		
	};

	borrar(id){ 
		let artistasFiltrados = []; 
		artistasFiltrados = this.state.datos.filter( unArtista => unArtista.id !== id); 

		this.setState({
				datos: artistasFiltrados,
				filter: artistasFiltrados
		})
}

	filtrarBusqueda(aBuscar){
		let filtrado = this.state.datos.filter( cancion => 
			cancion.title.toLowerCase().includes(aBuscar.toLowerCase())
		)
		this.setState({
			filter: filtrado
		})
		console.log(filtrado);
	}

	cambiarOrden(){
		if(this.state.orientacion == false){
			this.setState({
				orientacion: true,
				mensaje: 'invertir orientacion'
			})
		} else {
			this.setState({
				orientacion: false,
				mensaje: 'invertir orientacion'
			})
		}
	}

	render(){
		return(
			<React.Fragment>
			<Formulario filter = {(aBuscar) => this.filtrarBusqueda(aBuscar)}/>

			<button className = 'invercion' onClick = {() => this.cambiarOrden() }> {this.state.mensaje} </button>
			{this.state.orientacion == true ?
			<section className="card-container">
			{/* {this.state.datos === "" ? <h1>Cargando...</h1> : 
			this.state.datos.map((cancion, idx) => <Tarjeta key = {cancion.title + idx} info = {cancion}
			borrarArtista={ (id)=> this.borrar(id) } />
			)} */}

			{this.state.filter === "" ? <h1>Cargando...</h1> : 
			this.state.filter.map((cancion, idx) => <Tarjeta key = {cancion.title + idx} info = {cancion} borrarArtista={ (id)=> this.borrar(id) }/>)}
            </section>
			:
			<section className="card-container-invertido">
			{this.state.filter === "" ? <h1>Cargando...</h1> : 
			this.state.filter.map((cancion, idx) => <Tarjeta key = {cancion.title + idx} info = {cancion} borrarArtista={ (id)=> this.borrar(id) }/>)}
            </section>
			}

		       <button type="button" className= "cargar" onClick={()=>this.agregarTarjetas()}>Cargar más tarjetas</button>
			</React.Fragment>
		);
	}
}

export default TarjetasSection;