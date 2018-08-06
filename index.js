import React from 'react'
import ReactDOM from 'react-dom'

import { TopComponent, TopComponentController } from './components/TopComponent'
import withController from './components/withController'

const App = withController(TopComponent, new TopComponentController())
ReactDOM.render(<App name='TopComp'><div>SSS</div></App>, document.getElementById('root'))
