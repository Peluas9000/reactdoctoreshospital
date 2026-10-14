import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'
export default class HospitalesComponent extends Component {
    url = Global.urlApiHospitales ;
    state ={
        hospitales:[]
    }

    loadHospitales=()=>{
        console.log("Loading hospitales");
        let request="api/hospitales";
        axios.get(this.url+request).then((response)=>{
            this.setState({
                hospitales:response.data
            })
        })
            
    }

    componentDidMount=()=>{
        this.loadHospitales();
    }
  render() {
    return (
      <div>
        <h1 style={{color: 'blue'}}>Hospitales Component</h1>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>IDHOSPITAL</th>
                        <th>NOMBRE</th>
                        <th>DIRECCION</th>
                        <th>TELEFONO</th>
                        <th>NUMERO DE CAMAS</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.hospitales.map((hospital,index)=>{
                            return (
                                <tr key={index}>
                                    <td>{hospital.idHospital}</td>
                                    <td>{hospital.nombre}</td>
                                    <td>{hospital.direccion}</td>
                                    <td>{hospital.telefono}</td>
                                    <td>{hospital.camas}</td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            
            </table>
      </div>
    )
  }
}
