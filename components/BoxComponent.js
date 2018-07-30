import React from 'react'
import {BoxHeader, BoxHeaderController} from './BoxHeader'
import withController from './withController'


class BoxComponent extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      text: this.props.controller.someAction('Toplevel action from BoxComponent')
    }
  }

  render () {
    console.log('BOX '+this.props.name+' RENDER')
    const Header = withController(BoxHeader, new BoxHeaderController(this.props.name))
    console.log('BOX '+this.props.name+' RENDERED')
    return (
      <div style={{'borderWidth': '3px', 'borderStyle': 'solid'}}>
        <Header name={this.props.name}>---BOX HEADER---</Header>
          {this.props.children}
          <div>{this.state.text}</div>
        <div>---BOX FOOTER---</div>
      </div>
    )
  }
}

export default withController(BoxComponent)
