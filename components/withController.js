import React from 'react'

export const ControllerContext = React.createContext([])

export default function withController(ControlledComponent, controller) {
  return class extends React.PureComponent {
    constructor (props) {
      super(props)
      if (controller) {
        this.controller = controller
        this.controller.ref = React.createRef();
      }
    }

    getController = (controllers) => {
      if (this.controller) {
        if (controllers.length > 0) this.controller.__proto__ = controllers[controllers.length - 1]
        controllers.push(this.controller)
        this.added = true
        console.log('CONTROLLERS(ADD):',controllers)
      }
      const controller = controllers[controllers.length - 1]
      return controller
    }

    removeController = () => {
      if (this.added) console.log('CONTROLLERS REMOVE')
    }

    setRef = (el) => {
      this.controller.ref = el
    }

    componentWillMount() {
      if (this.added) console.log('CONTROLLERS REMOVE')
    }

    render() {
      return (
        <ControllerContext.Consumer>
        {
          controllers => {
            const currentController = this.getController(controllers)
            console.log('CURRENT CONTROLLER:', currentController)
            const result = (
              this.controller ? (
                <ControlledComponent {...this.props} ref={this.setRef} controller={currentController}>
                  {this.props.children}
                </ControlledComponent>
                ) : (
                <ControlledComponent {...this.props} controller={currentController}>
                  {this.props.children}
                </ControlledComponent>
              )
            )
            return result
          }
        }
        </ControllerContext.Consumer>
      )
    }
  }
}
