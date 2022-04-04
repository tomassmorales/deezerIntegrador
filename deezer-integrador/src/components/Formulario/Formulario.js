import React, {Component} from "react"

class Formulario extends Component {
	constructor(props){
		super(props);
		this.state = {
			value: ""
		}
	}

	// evitarDefault(event){
	// 	console.log("Evitando envio del formulario");
	// 	event.preventDefault();
	// }

	// obtenerDatos(datos){
	// 	this.setState({
	// 		value: datos.target.value
	// 	},
	// 	()=> this.props.filtrar(this.state.value)
	// 	)
	// }

	render(){
		return(
		<form>
			<input type="text" name="search" id="" placeholder="Search"/>
			<button type="submit"><i className="fas fa-search"></i></button>
		</form>                   
		);
	}

}

export default Formulario;