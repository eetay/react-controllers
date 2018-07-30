import React from 'react'

export class BoxHeaderController {
  constructor(boxName) {
    this.name = boxName
  }
  setState = (state) => {
    this.ref.setState(state)
  }
  boxHeaderAction = (info) => {
    console.log('boxHeaderAction:', this, info)
  }
}


export class BoxHeader extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {text: ''}
    this.props.controller.boxHeaderAction('In box header')
  }

  buttonClick = () => {
    this.props.controller.setState({text: 'actioned'})
    this.props.controller.topLevelAction('top from box ' + this.props.name + ' header')
  }

  render () {
    return (
      <div>
        ---BOX HEADER---
        <button type='button'  onClick={this.buttonClick}>
          Do Action in TopLevel {this.state.text}
        </button>
        ---BOX HEADER---
      </div>
    )
  }
}

