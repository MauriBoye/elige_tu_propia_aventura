import React, { Component } from "react";
import Opciones from "./Opciones";
import Recordatorio from "./Recordatorio";
import data from "./data.json";
import Swal from 'sweetalert2/src/sweetalert2.js'

class Layout extends Component {
  state = {
    contador: 0,
    historial: [],
    seleccionPrevia: "",
    estado: true,
  };

  componentDidMount = () =>{
    Swal.fire({
      title: 'Bienvenidos a: \n Elige tu propia aventura',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutDown'
      }
    })
  }

  handleClick = (event) => {
    if (this.state.contador <= 6) {
      this.setState({
        contador:
          this.state.contador % 2 === 0
            ? event.target.id === "A"
              ? this.state.contador + 1
              : this.state.contador + 2
            : event.target.id === "B"
            ? this.state.contador + 3
            : this.state.contador + 2,
        historial: [...this.state.historial, event.target.id],
        seleccionPrevia: event.target.id,
      });
    } else {
      this.setState({
        estado: false,
      });
    }
  };

  render() {
    let opciones;
    if (this.state.estado) {
      opciones = (
        <Opciones
          handleClick={this.handleClick}
          opcionA={data[this.state.contador].opciones.a}
          opcionB={data[this.state.contador].opciones.b}
        />
      );
    }

    return (
      <div className="layout">
        <h1 className="historia">{data[this.state.contador].historia}</h1>
        {opciones}
        <Recordatorio
          historial={this.state.historial}
          seleccionPrevia={this.state.seleccionPrevia}
        />
      </div>
    );
  }
}

export default Layout;