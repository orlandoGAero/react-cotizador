import React, { Component } from 'react';
import Header from './Header'
import Formulario from './Formulario';
import {obtenerDiferenciaAnio, calcularMarca, obtenerPlan} from '../helper';
import Resumen from './Resumen';

class App extends Component {
  
  state = {
    resultado: '',
    datos: {}
  }

  cotizarSeguro = datos => {
    const {marca, year, plan} = datos;

    //agregar una base de 2000
    let resultado = 2000;
    //obtener la diferencia de años
    const diferencia = obtenerDiferenciaAnio(year);

    //por cada año restar el 3% al valor del seguro
    resultado -= ((diferencia * 3) * resultado) / 100;
    
    //Americano 15%, Asiatico 5%, Europeo 30% de incremento al valor actual
    resultado =  calcularMarca(marca) * resultado;
    
    // el plan del auto, basico incrementa el valor 20% y completo 50%
    let incrementoPlan = obtenerPlan(plan);
    resultado = parseFloat(incrementoPlan * resultado).toFixed(2);


    //crear objeto
    const datosAuto =  {
      marca,
      year,
      plan
    }

    this.setState({
      resultado,
      datos: datosAuto
    })

  }

  render() {

    return (
      <div className="contenedor">
        < Header titulo = 'Cotizador de Seguro de Auto' />
        <div className="contenedor-formulario">
          < Formulario 
            cotizarSeguro={this.cotizarSeguro}
          />

          < Resumen 
            datos={this.state.datos}
            resultado={this.state.resultado}
          />
        </div>
      </div>
    );
  }
}

export default App;
