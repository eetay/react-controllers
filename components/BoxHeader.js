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
    this.state = {text: 'not pressed yet'}
    this.props.controller.boxHeaderAction('In box header')
  }

  buttonClick = () => {
    this.props.controller.setState({text: 'pressed'})
    this.props.controller.topLevelAction('top from box ' + this.props.name + ' header')
  }

  render () {
    return (
      <div>
        ---BOX HEADER---
        <button type='button'  onClick={this.buttonClick}>
          Press to change title of TOPLVL from deep inside ({this.state.text})
        </button>
        ---BOX HEADER---
      </div>
    )
  }
}

