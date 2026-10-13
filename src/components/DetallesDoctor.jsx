import React, { Component } from 'react';
import axios from 'axios';
import Global from '../Global';

export default class DetallesDoctor extends Component {
    state = {
        doctor: null,
        
    };

    loadDoctor = () => {
        this.setState({ doctor: null, error: null });

        axios.get(Global.urlApiDoctores + 'api/Doctores/' + this.props.iddoctor)
            .then((response) => {
                this.setState({ doctor: response.data });
            })

           
    };

    componentDidMount() {
        this.loadDoctor();
    }

    componentDidUpdate(prevProps) {
        if (this.props.iddoctor !== prevProps.iddoctor) {
            this.loadDoctor();
        }
    }

    render() {
        

        if (!this.state.doctor) {
            return <p>Cargando detalles del doctor...</p>;
        }

        const doctor = this.state.doctor;

        return (
            <div className="card mt-4">
                <div className="card-header">
                    Detalles del doctor {doctor.idDoctor}
                </div>
                <div className="card-body">
                    <p><strong>ID:</strong> {doctor.idDoctor}</p>
                    <p><strong>Apellido:</strong> {doctor.apellido}</p>
                    <p><strong>Especialidad:</strong> {doctor.especialidad}</p>
                    <p><strong>Salario:</strong> {doctor.salario}</p>
                    <p><strong>Hospital:</strong> {doctor.idHospital}</p>
                </div>
            </div>
        );
    }
}
