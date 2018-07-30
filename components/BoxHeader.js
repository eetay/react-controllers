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
    this.props.controller.boxHeaderAction('In box header')
  }

  buttonClick = () => {
    this.props.controller.topLevelAction('top from box ' + this.props.name + ' header')
  }

  render () {
    return (
      <div>
        ---BOX HEADER---
        <button type='button'  onClick={this.buttonClick}>
          Do Action in TopLevel
        </button>
        ---BOX HEADER---
      </div>
    )
  }
}

