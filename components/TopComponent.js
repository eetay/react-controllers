import React from 'react'
import BoxComponent from './BoxComponent'

export class TopComponentController {
  someAction = (info) => {
    console.log('someAction called with '+ info)
    return info
  }
  topLevelAction = (info) => {
    this.ref.setState({ titleText: info })
  }
}

export class TopComponent extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      titleText: 'TOPLVL TITLE',
      buttonText: 'TOPLVL: press to change title via my controller'
    }
  }

  buttonClick = () => {
    this.props.controller.topLevelAction('Title changed using TOPLVL button')
  }

  render () {
    return (
      <div>
        {this.state.titleText}
        <BoxComponent name='BOX A'>BOX A</BoxComponent>
        <button type='button' onClick={this.buttonClick}>
          {this.state.buttonText}
        </button>
        <BoxComponent name='BOX B'>BOX B</BoxComponent>
      </div>
    )
  }
}
