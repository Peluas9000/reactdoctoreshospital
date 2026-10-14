import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'

export default class ServiceHospitales {
    getDoctoresHospital(idHospital){
        return new Promise(function(resolve,reject){
            let url=Global.urlApiDoctores;
            let request = "api/doctores/doctoresHospital/" + idHospital;

            axios.get(url+request).then((response)=>{
                console.log("Doctores obtenidos");
                resolve(response.data);
            })
        })
    }

    insertHospital(hospital){
        return new Promise(function(resolve,reject){
            let url=Global.urlApiHospitales;
            let request="api/hospitales";
            axios.post(url+request,hospital).then(response=>{
                console.log("Hospital inserted");
                resolve(response);
            })
        })
    }
    

    getHospitales(){
        return new Promise(function(resolve,reject){
        let url=Global.urlApiHospitales;
        let request="api/hospitales";
         axios.get(url+request).then((response)=>{
            console.log("Hospitales obtenidos");
            resolve(response.data);
        })
    })
    }

}
