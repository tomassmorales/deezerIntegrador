import React, {Component} from "react";
import Tarjeta from "../Tarjeta/Tarjeta"

class TarjetasSection extends Component {
	constructor(props){
		super(props);
		this.state = {
			datos : ""
		}
	}
	render(){
		return(
			<React.Fragment>
	                <button type="button">Cargar más tarjetas</button>
                        <section className="card-container">
				{/* {this.state.datos.map((cancion,idx) => <Tarjeta key={cancion.name + idx}/>)} */}
                        </section>
			</React.Fragment>
		);
	}
}

export default TarjetasSection;