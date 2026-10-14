import React, { Component } from 'react'
import ServiceHospitales from '../services/ServiceHospitales'
import { Navigate } from 'react-router-dom'
export default class CreateHospital extends Component {
    cajaId=React.createRef();
    cajaNombre=React.createRef();
    cajaDireccion=React.createRef();
    cajaTelefono=React.createRef();
    cajaNumCama=React.createRef();

    servicio=new ServiceHospitales();
    insertHospital=(event)=>{
        event.preventDefault();
       { let hospital={
            idHospital: parseInt(this.cajaId.current.value), // "22"
            nombre:this.cajaNombre.current.value,
            direccion:this.cajaDireccion.current.value,
            telefono:this.cajaTelefono.current.value,
            numCama:parseInt(this.cajaNumCama.current.value) //"50"
        }

        this.servicio.insertHospital(hospital).then(result=>{
            this.setState({
                mensaje:"Hospital insertado correctamente",
                status:true
            })  
        })
        
        }
    }



    state={
        mensaje:"",
        status:false
    }

    render() {
    return (
      <div>
        
        {
            this.state.status==true &&
            (<Navigate to ="/hospitales" />)
        }
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
