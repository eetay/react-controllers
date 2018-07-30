This repository is experimental framework for building React based applications
The concept is to stay away from event-based actions and utilize function-based
actions and the concept of "stateful controllers" - basically a controller
is a mini-application with a state of its own, implementing the actions that
can be used by the UI (React components), and the business logic of the
application itself


The controllers are hirarcical, allowing React components low in the DOM tree
to trigger high-level application level actions directly without need to send
messages

Controllers lower in the tree "inherit" (__proto__) the actions from 
controllers higher in the tree, but each controller has its own state, and the
actions of each controller are binded to that controller's state, so that when
action of a controller is called, it always manipulates the state of that
controller

Any React component can be wrapped with a 'withController' (higher order
component) which adds the "nearest" controller to the props of that React
component, allowing any React component to call controller actions

## example:

The 'withController' makes it possible for ```BoxComponent``` call to ```controller.someAction(...)```
knowing that it will be handled by "nearest" controller, and if that controller does not have such
action function, it will search parent controllers as well, allowing higher
controllers to provide actions to lower UI components

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

the ```withController``` function can take a second parameter, which is a new
controller to control that part of the UI


