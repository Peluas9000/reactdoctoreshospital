import React, { Component } from 'react'
import ServiceEjemplo from '../services/ServiceEjemplo'

export default class EjemploServiceComponent extends Component {
    service =new ServiceEjemplo();
    state={
        mensaje1:"",
        mensaje2:"",
        comics:[]
    }
    loadData=()=>{
        this.setState({
            mensaje1:this.service.getDia("Juan"),
            mensaje2:this.service.getSaludo(),
            comics:this.service.getComics()
        })

    }


    componentDidMount=()=>{
        this.loadData();
    }
  render() {
    return (
      <div>
        <h1>Ejemplo Service</h1>
        <h3 className="mensaje1" style={{color: 'blue'}}> {this.state.mensaje1}</h3>
        <h3 className="mensaje2" style={{color: 'red'}}> {this.state.mensaje2}</h3>
        <h2 style={{color: 'green'}}> {this.state.comics.length} comics</h2>

        
            <ul className="list-group">
                {
                    this.state.comics.map((comic,index)=>{
                        return (
                            <li key={index} className="list-group-item">
                                <h2>{comic.titulo}</h2>
                                <p>{comic.descripcion}</p>
                                <img src={comic.imagen} alt={comic.titulo} />

                            </li>
                        )
                    })
                }
            </ul>
        
      </div>

    )
  }
}
