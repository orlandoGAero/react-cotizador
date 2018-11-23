import React, {Component} from 'react';
import Resultado from './Resultado';
import {primeraMayuscula} from '../helper'

class Resumen extends Component {
    
    imprimirResumen = () => {
        const {marca, year, plan} = this.props.datos;
        
        if(!marca || !year || !plan) return null;

        return(
            <div className="resumen">
                <h2>Resumen Cotización</h2>
                <div className="mostrar">
                    <div className="etiquetas"> 
                        <p>Marca: </p>
                        <p>Año del Auto: </p>
                        <p>Plan: </p>
                    </div>
                    <div className="datos"> 
                        <p>{primeraMayuscula(marca)}</p>
                        <p>{year}</p>
                        <p>{primeraMayuscula(plan)}</p>
                    </div>
                </div>
            </div>
        );
    } 
    
    render(){

        return(
            <div>
                {this.imprimirResumen()}
                <Resultado
                    resultado={this.props.resultado}
                />
            </div>
        )
    }
}

export default Resumen;