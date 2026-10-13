import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import MenuComponent from './MenuComponent'
import HomeComponent from './HomeComponent'
import { Routes } from 'react-router-dom'

export default class Router extends Component {

  render() {
    return (
        <BrowserRouter>
        <MenuComponent />
        <Routes>
            <Route path="/" element={<HomeComponent />} />
        </Routes>
        </BrowserRouter>
    )
  }
}
