import React from 'react'

export const ControllerContext = React.createContext([])

export default function withController(ControlledComponent, controller) {
  return class extends React.PureComponent {
    constructor (props) {
      super(props)
      this.name = this.props.name || 'unnamed'
      this.controllers = null
      if (controller) {
        this.controller = controller
        this.controller.ref = React.createRef();
      }
    }

    setRef = (el) => {
      this.controller.ref = el
    }

    getControllers = () => {
      return this.controllers
    }

    getCurrentController = () => {
      console.log('CUR CONTROLLER 4 '+this.name, this.controllers[this.controllers.length - 1])
      return this.controllers[this.controllers.length - 1]
    }

    componentWillUnmount = () => {
      if (this.controller) {
        console.log('CUR CONTROLLER 4 '+this.name, 'should be deleted')
      }
    }

    render() {
      return (
        <ControllerContext.Consumer>
        {
          controllers => {
            if (this.controller) {
              this.controllers = [...controllers, this.controller]
              this.controller.__proto__ = controllers[controllers.length - 1]
            } else {
              this.controllers = controllers
            }
            console.log('CONTROLLERS 4 '+this.name, this.controllers)
            const moreProps = this.controller ? { ref: this.setRef } : {}
            return (
              <ControllerContext.Provider value={this.getControllers()}>
                <ControlledComponent {...this.props} {...moreProps} controller={this.getCurrentController()}>
                  {this.props.children}
                </ControlledComponent>
              </ControllerContext.Provider>
            )
          }
        }
        </ControllerContext.Consumer>
      )
    }
  }
}
