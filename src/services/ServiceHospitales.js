import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'

export default class ServiceHospitales {
        getPromesa= new Promise(function(resolve,reject){
            let num=0;
        if(num==0){
        resolve("Promesa resuelta");

        }else{
        reject("Promesa rechazada");
        }});
    

    getHospitales=new Promise(function(resolve){
        let url=Global.urlApiHospitales;
        let request="api/hospitales";
         axios.get(url+request).then((response)=>{
            console.log("Hospitales obtenidos");
            resolve(response.data);
        })

    })

        }
