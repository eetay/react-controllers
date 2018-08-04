# React Controllers

This repository is experimental framework for building React based applications
It should be treated as academic research project

The concept is to stay away from the heavy lifting of event-based actions
frameworks and utilize good old-fashioned function-based actions and the concept
of "stateful controllers" - mini-applications with a state of thier own, 
implementing the actions that can be used by the UI (React components),
and the business logic of the application itself, in object oriented manner:
higher-level controller manage the larger application, while lower-level
controllers manage autonomous parts of the larger application.

The controllers are heirarcial such that actions not handled by lower-level
controllers are handled by higher controllers, allowing React components low
in the DOM tree to trigger high-level application level actions directly without
sending async messages, by calling the "nearest" controller's actions

Controllers lower in the tree "inherit" (__proto__) the actions from 
controllers higher in the tree, but each controller has its own state, and the
actions of each controller are binded to that controller's state, so that when
action of a controller is called, it always manipulates the state of that
controller

Any React component can be wrapped with a 'withController' (higher order
component) which adds the "nearest" controller to the props of that React
component, allowing any React component to call controller actions

[Live Demo](https://eetay.github.io/react-controllers/index.html)

### Example code:

The 'withController' makes it possible for ```BoxComponent``` call to ```controller.someAction(...)```
knowing that it will be handled by "nearest" controller

```javascript
lass BoxComponent extends React.PureComponent {
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
        <div style={{'borderWidth': '3px', 'borderStyle': 'solid', 'borderColor': 'red'}}>
          <Header name={this.props.name}>---BOX HEADER---</Header>
        </div>
        {this.props.children}
        <div>{this.state.text}</div>
        <div>---BOX FOOTER---</div>
      </div>
    )
  }
}

export default withController(BoxComponent)
```
Note: Since controllers inherit from one another (via __proto__), it means that if the requested action function
is not provided by "nearest" controller, but is provided by a higher level controller,
that action will be used. 

### Adding a controller
The ```withController``` function can take a second parameter, which is a new
controller to control that part of the UI


