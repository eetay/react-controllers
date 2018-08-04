import React from 'react'

export class BoxHeaderController {
  constructor(boxName) {
    this.name = boxName
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
    this.props.controller.topLevelAction(this.props.name + "'s header")
    this.props.controller.setState({text: 'pressed'})
  }

  render = () => {
    return (
      <div>
        ---BOX HEADER---
        <button type='button'  onClick={this.buttonClick}>
          controller.topLevelAction(...) ({this.state.text})
        </button>
        ---BOX HEADER---
      </div>
    )
  }
}

