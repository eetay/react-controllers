import React from 'react'
import BoxComponent from './BoxComponent'

export class TopComponentController {
  someAction = (info) => {
    console.log('someAction:', this, info)
    return info
  }
  topLevelAction = (info) => {
    this.ref.setState({text: info})
  }
}

export class TopComponent extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {text: 'TOP LEVEL IS HERE!'}
  }

  buttonClick = () => {
    this.setState({text: 'TOP LEVEL IS HERE!'})
    this.props.controller.someAction('hi')
  }

  render () {
    return (
      <div>
        {this.state.text}
        <BoxComponent name="BOX A">BOX A</BoxComponent>
        <button type='button' onClick={this.buttonClick}>
          someAction('hi')
        </button>
        <BoxComponent name="BOX B">BOX B</BoxComponent>
      </div>
    )
  }
}
