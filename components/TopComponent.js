import React from 'react'
import BoxComponent from './BoxComponent'

export class TopComponentController {
  someAction = (info) => {
    console.log(`TopComponentController.someAction called with ${info}`)
    return info
  }

  topLevelAction = (info) => {
    this.setState({ titleText: `TopComponentController.topLevelAction() called from ${info}` })
  }
}

export class TopComponent extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      titleText: "TopComponent's title can be changed from anywhere",
      buttonText: '[Press me to execute!]'
    }
  }

  buttonClick = () => {
    this.props.controller.topLevelAction('TopComponent')
  }

  render () {
    return (
      <div style={{ borderWidth: '3px', borderStyle: 'solid', borderColor: 'blue' }}>
        <div style={{ color: 'blue' }}>{this.state.titleText}</div>
        <div>This is part of the toplevel component. I have access to toplevel controller</div>
        <BoxComponent name='BOX A'>
          <div style={{ color: 'green'}}>BOX A</div>
          <div>
            <div>I have no controller of my own</div>
            <div>But I have access to toplevel's controller</div>
            <div>And my header has a controller of its own</div>
          </div>
        </BoxComponent>
        <div style={{ padding: 10 }}>
          <div>This is part of the toplevel component. I have access to toplevel controller</div>
          <div>Test it by pressing button here:</div>
          <button type='button' onClick={this.buttonClick}>
            controller.topLevelAction(...) {this.state.buttonText}
          </button>
        </div>
        <BoxComponent name='BOX B'>
          <div style={{ color: 'green' }}>BOX B</div>
          <div>
            <div>I have no controller of my own</div>
            <div>But I have access to toplevel's controller</div>
            <div>And my header has a controller of its own</div>
          </div>
        </BoxComponent>
      </div>
    )
  }
}
