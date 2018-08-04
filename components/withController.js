import React from 'react'

export const ControllerContext = React.createContext([])

const ControllerTools = {
  // functions all controllers should have
  setState: function(state) {
    this.ref.setState(state)
  }
}

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
      this.debug('CUR CONTROLLER', this.controllers[this.controllers.length - 1])
      return this.controllers[this.controllers.length - 1]
    }

    componentWillUnmount = () => {
      if (this.controller) {
        this.debug('CUR CONTROLLER', 'should be deleted')
      }
    }

    debug = (...args) => {
      console.log('DEBUG:', this.name, ...args)
    }

    render() {
      return (
        <ControllerContext.Consumer>
          {
            controllers => {
              if (this.controller) {
                this.controllers = [...controllers, this.controller]
                Object.setPrototypeOf(
                  this.controller,
                  (controllers.length == 0) ? ControllerTools : controllers[controllers.length - 1]
                )
              } else {
                this.controllers = controllers
              }
              this.debug('CONTROLLER CHAIN', this.controllers)
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
