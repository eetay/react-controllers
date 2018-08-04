import React from 'react'

export class BoxHeaderController {
  constructor(boxName) {
    this.name = boxName
  }
  boxHeaderAction = (info) => {
    this.setState(info)
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
    this.props.controller.boxHeaderAction({text: 'pressed'})
    this.props.controller.topLevelAction(this.props.name + "'s header")
  }

  render = () => {
    return (
      <div style={{'borderWidth': '3px', 'margin': '3px', 'borderStyle': 'solid', 'borderColor': 'red'}}>
        ---BOX HEADER---
        <button type='button' onClick={this.buttonClick}>
          controller.topLevelAction(...) AND controller.boxHeaderAction(...) ({this.state.text})
        </button>
        ---BOX HEADER---
      </div>
    )
  }
}

