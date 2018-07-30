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

