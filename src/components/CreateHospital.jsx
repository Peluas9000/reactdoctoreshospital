import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'

export default class CreateHospital extends Component {
    cajaId=React.createRef();
    cajaNombre=React.createRef();
    cajaDireccion=React.createRef();
    cajaTelefono=React.createRef();
    cajaNumCama=React.createRef();
    url =Global.urlApiHospitales;

    insertHospital=(event)=>{
        event.preventDefault();
       { let hospital={
            idHospital: parseInt(this.cajaId.current.value), // "22"
            nombre:this.cajaNombre.current.value,
            direccion:this.cajaDireccion.current.value,
            telefono:this.cajaTelefono.current.value,
            numCama:parseInt(this.cajaNumCama.current.value) //"50"
        }
        let request="api/hospitales";
        axios.post(this.url+request,hospital).then((response)=>{
            console.log("Hospital inserted");
            this.loadHospitales();
            this.setState({
                mensaje:"Hospital inserted"+ hospital.nombre
            })
        })}
    }



    state={
        mensaje:""
    }

    render() {
    return (
      <div>
        <h1>New Hospital</h1>
        <h3 style={{color: 'green'}}>{this.state.mensaje}</h3>
      
        <form>
            <label>IDHOSPITAL</label>
            <input type="text" ref={this.cajaId} className="form-control" />
            <label>NOMBRE</label>
            <input type="text" ref={this.cajaNombre} className="form-control" />
            <label>DIRECCION</label>
            <input type="text" ref={this.cajaDireccion} className="form-control" />
            <label>TELEFONO</label>
            <input type="text" ref={this.cajaTelefono} className="form-control" />
            <label>NUMERO DE CAMAS</label>
            <input type="text" ref={this.cajaNumCama} className="form-control" />
            <button type="submit" onClick={this.insertHospital} className="btn btn-primary">Insert Hospital</button>
        </form>
      </div>
    )
  }
}
