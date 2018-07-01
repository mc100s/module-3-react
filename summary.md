![Ironhack logo](https://i.imgur.com/1QgrNNw.png)

# React Summary
1. Start a simple  React project
1. JSX
1. React Components
1. React Props
1. React States
1. React Lifecycle
1. React Events
1. React and forms
1. Conditional rendering
1. List rendering
1. React Router
1. Using Axios with React

## Start a simple  React project

### With Codepen

- Blank React 14.7 project: https://codepen.io/maxencebouret/pen/MQLWaW/ 
- Tic Tac Toe Project: https://codepen.io/gaearon/pen/oWWQNa/

### With your code editor

Commands to launch
```sh
$ npm install -g create-react-app # Install globally the `create-react-app` command
$ create-react-app my-app # Create a React project folder "my-app"
$ cd my-app
$ rm -f src/*
$ touch src/index.js src/index.css # Create 2 files
```

Your `src/index.js` file
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
  render() {
    return (
      <div>
        {/* Your application code */}
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
```

## JSX

<table>
  <tr>
    <th>Rule</th>
    <th>Example</th>
  </tr>
  <tr>
    <td>A JSX is always wraped by a tag</td>
    <td>
      - <code>&lt;App /&gt;</code><br>
      - <code>&lt;MyCoponent&gt;Hello&lt;/MyCoponent&gt;</code><br>
      - <code>&lt;ul&gt;&lt;li&gt;Elt1&lt;/li&gt;&lt;li&gt;Elt2&lt;/li&gt;&lt;/ul&gt;</code>
    </td>
  </tr>
  <tr>
    <td>To put JavaScript, you need to use <code>{</code> and <code>}</code></td>
    <td><code></code></td>
  </tr>
  <tr>
    <td>...</td>
    <td><code></code></td>
  </tr>
</table>


## React Components

React is based on Components, and each Component is a classe that `extends React.Component`.

```javascript
// Definition of the ShoppingList component
class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.owner}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}

class ShoppingList extends React.Component {
  render() {
    return (
      <div>
        <ShoppingList owner="Mark" />
      </div>
    );
  }
}
// Example usage: <ShoppingList name="Mark" />
```

### React Functional Components

Component that only needs a `render` method can be simplified by a function that just returns a JSX.

**Example**

```javascript
function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}
```


## React Props

```javascript
// To use in JSX
<MyComponent myProp={myValue} />

// To use inside MyComponent class
this.prop.myProp
```

**Example**
```javascript
class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i} />; // Pass a "value" prop to the Square 
  }
  // ...
}

class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {this.props.value} {/* Reuse the "value" prop */}
      </button>
    );
  }
}
```

## React States


```javascript
// You can initialize the state in the Component's constructor
this.state = { firstname: 'Maxence', age: 25 }

// You can get a state value with "this.state" property
this.state.firstname

// You MUST set some state value with "this.setState" method
// Be careful, this opereation is asynchronous
this.setState({firstname: 'Mickaël'})
```

**Example**

```javascript
class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = { // Init the state
      value: null,
    };
  }

  render() {
    return (
      <button className="square" onClick={() => this.setState({value: 'X'})}> {/* Set the state */}
        {this.state.value} {/* Get the state */}
      </button>
    );
  }
}
```

## React Lifecycle

Mounting:
- [`constructor(props)`](https://reactjs.org/docs/react-component.html#constructor): Should starts with `super(props)`; Perfect to initialize the state and binding methods
- [`componentWillMount()`](https://reactjs.org/docs/react-component.html#componentwillmount)
- [`render()`](https://reactjs.org/docs/react-component.html#render): Return the JSX to display
- [`componentDidMount()`](https://reactjs.org/docs/react-component.html#componentdidmount): Perfect place to call APIs and set up any subscriptions.

Updating: 
- [`componentWillReceiveProps(nextProps)`](https://reactjs.org/docs/react-component.html#componentwillreceiveprops)
- [`shouldComponentUpdate(nextProps, nextState)`](https://reactjs.org/docs/react-component.html#shouldcomponentupdate)
- [`componentWillUpdate(nextProps, nextState)`](https://reactjs.org/docs/react-component.html#componentwillupdate)
- [`render()`](https://reactjs.org/docs/react-component.html#render)
- [`componentDidUpdate(prevProps, prevState)`](https://reactjs.org/docs/react-component.html#componentdidupdate)

Unmounting: 
- [`componentWillUnmount()`](https://reactjs.org/docs/react-component.html#componentwillunmount)

Error Handling:
- [`componentDidCatch()`](https://reactjs.org/docs/react-component.html#componentdidcatch)


## React Events

Handling events with React elements is very similar to handling events on DOM elements. There are some syntactic differences:

- React events are named using camelCase
- With JSX you pass a function as the event handler

**Examples**
```javascript
<button onClick={myFunctionToTrigger}>
  Activate Lasers
</button>
```

```javascript
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button> {/* The same with binding  */}
```

```javascript
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}
```

### List of events

Event Types | Event Names
-- | --
Clipboard Events | `onCopy` `onCut` `onPaste`
Composition Events | `onCompositionEnd` `onCompositionStart` `onCompositionUpdate`
Keyboard Events | `onKeyDown` `onKeyPress` `onKeyUp`
Focus Events | `onFocus` `onBlur`
Form Events | `onChange` `onInput` `onInvalid` `onSubmit`
Mouse Events | `onClick` `onContextMenu` `onDoubleClick` `onDrag` `onDragEnd` `onDragEnter` `onDragExit` `onDragLeave` `onDragOver` `onDragStart` `onDrop` `onMouseDown` `onMouseEnter` `onMouseLeave` `onMouseMove` `onMouseOut` `onMouseOver` `onMouseUp`
Selection Events | `onSelect`
Touch Events | `onTouchCancel` `onTouchEnd` `onTouchMove` `onTouchStart`
UI Events | `onScroll`
Wheel Events | `onWheel`
Media Events | `onAbort` `onCanPlay` `onCanPlayThrough` `onDurationChange` `onEmptied` `onEncrypted` `onEnded` `onError` `onLoadedData` `onLoadedMetadata` `onLoadStart` `onPause` `onPlay` `onPlaying` `onProgress` `onRateChange` `onSeeked` `onSeeking` `onStalled` `onSuspend` `onTimeUpdate` `onVolumeChange` `onWaiting`
Image Events | `onLoad` `onError`
Animation Events | `onAnimationStart` `onAnimationEnd` `onAnimationIteration`
Transition Events | `onTransitionEnd`
Other Events | `onToggle`

## Conditional rendering

```javascript
class MyComponent extends React.Component {
  showButton() {
    if (this.props.isLoggedIn)
      return <LogoutButton />
    else 
      return <LoginButton />
  }
  render() {
    let button
    if (this.props.isLoggedIn)
      button = <LogoutButton />
    else 
      button = <LoginButton />
    return (
      <div>
        {/********** Method 1: Variable **********/}
        {button}
        {/********** Method 2: Function **********/}
        {this.showButton()}
        {/********** Method 3: Ternary **********/}
        {this.props.isLoggedIn ? <LogoutButton /> : <LoginButton />}
        {/********** Method 4: Inline If with Logical && Operator **********/}
        {this.props.isLoggedIn && <LogoutButton />}        
        {!this.props.isLoggedIn && <LoginButton />}        
      </div>
    )
  }
}
```

## List rendering

```javascript
const students = ['Alice', 'Bob', 'Charly', 'David']

class MyComponent extends React.Component {
  showList() {
    let list = []
    for (let i = 0; i < students.length; i++) {
      list.push(<li key={i}>{students[i]}</li>)
    }
    return list
  }
  render() {
    let list = []
    for (let i = 0; i < students.length; i++) {
      list.push(<li key={i}>{students[i]}</li>)
    }
    return (
      <ul>
        {/********** Method 1: Variable **********/}
        {list}
        {/********** Method 2: Function **********/}
        {this.showList()}
        {/********** Method 3: Map **********/}
        {students.map((student,i) => <li key={i}>{student}</li>)}
      </ul>
    )
  }
}
```

## React and forms

**Basic Example with 1 input**

```javascript
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```

## React Router

### Installation
```
npm install --save react-router-dom
```

### Import

```javascript
import { BrowserRouter, Route, Link } from 'react-router-dom'
```

### React Router Components

<table>
  <tr>
    <th> Component </th>
    <th> Description </th>
    <th width="30%"> Main Props </td>
  </tr>
  <tr>
    <td><code>&lt;BrowserRouter&gt;</code></td>
    <td>Router Component that should wrap your application</td>
    <td>
    </td>
  </tr>
  <tr>
    <td><code>&lt;Route&gt;</code></td>
    <td>When the url matches its props <code>path</code>, it renders its content</td>
    <td>
      <ul>
        <li><code>path</code>: string</li>
        <li><code>component</code>: Component</li>
        <li><code>render</code>: func</li>
        <li><code>exact</code>: bool</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td><code>&lt;Switch&gt;</code></td>
    <td>Group <code>&lt;Route&gt;</code> together and display maximum 1</td>
    <td>
    </td>
  </tr>
  <tr>
    <td><code>&lt;Link&gt;</code></td>
    <td>Replace the <code>&lt;a&gt;</code> tag of HTML in React Router</td>
    <td>
      <ul>
        <li><code>to</code>: string</li>
        <li><code>to</code>: object</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td><code>&lt;NavLink&gt;</code></td>
    <td>A special version of the <code>&lt;Link&gt;</code> that will add styling attributes to the rendered element when it matches the current URL</td>
    <td>
      <ul>
        <li><code>activeClassName</code>: string</li>
        <li><code>activeStyle</code>: object</li>
        <li><code>exact</code>: bool</li>
      </ul>
    </td>
  </tr>
</table>


### `match`

A component displayed with `<Route>` has access to `match` (as `this.props.match` or as `({ match }) => ()`) and it is an object containing the following properties:

Property | Type | Description
-- | -- | --
`params`| bool | Key/value pairs parsed from the URL corresponding to the dynamic segments of the path
`isExact`| bool | `true` if the entire URL was matched (no trailing characters)
`path`| string | The path pattern used to match. Useful for building nested `<Route>`s
`url`| string | The matched portion of the URL. Useful for building nested `<Link>`s


## Using Axios with React

### Installation 
```
npm install --save axios
```

```javascript
import axios from 'axios'
```

### Example of GET request
```javascript 
class PersonList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: []
    }
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
      <ul>
        { this.state.persons.map(person => <li>{person.name}</li>) }
      </ul>
    )
  }
}
```

### Example of POST request

```javascript
class PersonList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ''
    }
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  handleSubmit(event) => {
    event.preventDefault();
    const user = {
      name: this.state.name
    };
    axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>
            Person Name:
            <input type="text" name="name" onChange={this.handleChange.bind(this)} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}
```

### Base instance

```javascript
// src/api.js
import axios from 'axios';

export default axios.create({
  baseURL: `http://jsonplaceholder.typicode.com/`
});
```

```javascript
// src/index.js
import API from './api';

// ...
API.delete(`users/${this.state.id}`)
  .then(res => {
    console.log(res);
    console.log(res.data);
  })
// ...
```

