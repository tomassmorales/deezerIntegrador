import React, {Component} from "react";
import Tarjeta from "../Tarjeta/Tarjeta"
import "../TarjetasSection/TarjetasSection.css"

class TarjetasSection extends Component {
	constructor(props){
		super(props);
		this.state = {
			datos : ""
		}
	}
	componentDidMount(){
		fetch("https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks&top?limit=10")
		.then(response => response.json())
		.then(data => this.setState(
			{
			datos: data.data,
			}
		))
		.catch(error => console.log(error))
	}
	render(){
		return(
			<React.Fragment>
                        <section className="card-container">
			{this.state.datos === "" ? <h1>Cargando...</h1> : 
			this.state.datos.map((cancion, idx) => <Tarjeta key = {cancion.title + idx} info = {cancion}/>)}
                       </section>
		       <button type="button" className= "cargar">Cargar más tarjetas</button>
			</React.Fragment>
		);
	}
}

export default TarjetasSection;