import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import {TopComponent, TopComponentController} from './components/TopComponent'
import withController from './components/withController'

const App = withController(TopComponent, new TopComponentController())
//ReactDOM.render(<TopComponent dummy="dummy"/>, document.getElementById('root'))
ReactDOM.render(<App dummy="dummy"><div>SSS</div></App>, document.getElementById('root'))
