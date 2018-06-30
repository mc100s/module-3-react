![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# React | State and Lifecycle


## [React | 5. State and Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)

### About the state

```jsx
// You can initialize the state in the Component's constructor
this.state = { firstname: 'Maxence', age: 25 }

// You can get a state value with "this.state" property
this.state.firstname

// You MUST set some state value with "this.setState" method
// Be careful, this opereation might be asynchronous
this.setState({firstname: 'Mickaël'})
```

### About React Lifecycle

Mounting:
- [`constructor(props)`](https://reactjs.org/docs/react-component.html#constructor): Should starts with `super(props)`; Perfect to initialize the state and binding methods
- [`render()`](https://reactjs.org/docs/react-component.html#render): Return the JSX to display
- [`componentDidMount()`](https://reactjs.org/docs/react-component.html#componentdidmount): Perfect place to call APIs and set up any subscriptions.

Updating: 
- [`componentWillUpdate(nextProps, nextState)`](https://reactjs.org/docs/react-component.html#componentwillupdate)
- [`render()`](https://reactjs.org/docs/react-component.html#render)
- [`componentDidUpdate(prevProps, prevState)`](https://reactjs.org/docs/react-component.html#componentdidupdate)

Unmounting: 
- [`componentWillUnmount()`](https://reactjs.org/docs/react-component.html#componentwillunmount)

Error Handling:
- [`componentDidCatch()`](https://reactjs.org/docs/react-component.html#componentdidcatch)

### Exercise

[On this Codepen](https://codepen.io/maxencebouret/pen/bKKzwp?editors=0010), by using `axios`, display in the `App` component the information from this API: `https://ih-crud-api.herokuapp.com/characters/1`

