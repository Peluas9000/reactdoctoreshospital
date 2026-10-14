import React, { Component } from 'react'
import Global from '../Global';
import axios from 'axios';
import DetallesDoctor from './DetallesDoctor';
export default class DoctoresComponent extends Component {
    url = Global.urlApiDoctores;
    state = {
        doctores: [],
        idDoctorSeleccionado: null
    }

    loadDoctores = () => {
        let request = "api/doctores/doctoresHospital/" + this.props.idhospital;
        axios.get(this.url + request).then((response) => {
            console.log("Loading doctores");
            this.setState({
                doctores: response.data
            })
        })
    }

    componentDidMount = () => {
        this.loadDoctores();
    }
    componentDidUpdate = (prevProps) => {
        if (this.props.idhospital !== prevProps.idhospital) {
            this.loadDoctores();
            this.setState({
                idDoctorSeleccionado: null
            })
        }
    }




  render() {
    return (
      <div>
        <h1>Doctores del hospital {this.props.idhospital}</h1>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>ID_DOCTOR</th>
                    <th>Apellidos</th>
                    <th>Hospital</th>
                    <th>Detalles</th>
                </tr>
            </thead>
            <tbody>
                {this.state.doctores.map((doctor,index) => (
                    <tr key={index}>
                        <td>{doctor.idDoctor}</td>
                        <td>{doctor.apellido}</td>
                        <td>{doctor.idHospital}</td>
                         <td>
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={() => this.setState({
                                    idDoctorSeleccionado: doctor.idDoctor
                                })}
                            >
                                Ver detalles
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        

        {this.state.idDoctorSeleccionado && (
            <DetallesDoctor iddoctor={this.state.idDoctorSeleccionado} />
        )} 
      </div>
    )
  }
}
