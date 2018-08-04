import React from 'react'
import {BoxHeader, BoxHeaderController} from './BoxHeader'
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
    console.log('BOX ' + this.props.name + ' RENDER')
    const Header = this.header
    return (
      <div style={{'borderWidth': '3px', 'borderStyle': 'solid'}}>
        <div style={{'borderWidth': '3px', 'borderStyle': 'solid', 'borderColor': 'red'}}>
          <Header name={this.props.name + ' header'}>---BOX HEADER---</Header>
        </div>
        {this.props.children}
        <div>{this.state.text}</div>
        <div>---BOX FOOTER---</div>
      </div>
    )
  }
}

export default withController(BoxComponent)
