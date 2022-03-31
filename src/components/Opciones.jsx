import React, {Component} from "react";
import Swal from 'sweetalert2/src/sweetalert2.js'


class Opciones extends Component {

    componentWillUnmount(){
        Swal.fire({
            title: 'Felicitaciones!',
            text: 'Terminaste la aventura',
            icon: 'success',
            hideClass: {
                popup: 'animate__animated animate__hinge'
              }
        }
          )
    }

    render() { 
        return ( 
            <div className="opciones">
                <div className="opcion">
                    <button id="A" className="botones" onClick={this.props.handleClick}>A</button>
                    <h2>{this.props.opcionA}</h2>
                </div>
                <div className="opcion">
                    <button id="B" className="botones" onClick={this.props.handleClick}>B</button>
                    <h2>{this.props.opcionB}</h2>
                </div>
            </div>
         );
    }
}
 
export default Opciones;