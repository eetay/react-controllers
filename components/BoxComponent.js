import React from 'react'
import { BoxHeader, BoxHeaderController } from './BoxHeader'
import withController from './withController'


class BoxComponent extends React.PureComponent {
  constructor (props) {
    super(props)
    this.header = withController(BoxHeader, new BoxHeaderController(this.props.name))
    this.state = {
      text: this.props.controller.someAction('Toplevel action from BoxComponent')
    }
  }

  render () {
    const Header = this.header
    return (
      <div style={{ borderWidth: '3px', margin: '3px', borderStyle: 'solid', borderColor: 'green' }}>
        <Header name={this.props.name + ' header'}>---BOX HEADER---</Header>
        <div>{this.props.children}</div>
        <div>{this.state.text}</div>
      </div>
    )
  }
}

export default withController(BoxComponent)
