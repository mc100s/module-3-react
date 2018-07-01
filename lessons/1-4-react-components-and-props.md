![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# React | Components and Props


## Atomic Design

Before starting, let's spend time on Atomic Design, a pattern to design websites with components.

![](https://i.imgur.com/PIVSiPy.png)

If you are interested, you can have a look on [that blog post from Brad Frost](http://bradfrost.com/blog/post/atomic-web-design/).

## [React | 4. Components and Props](https://reactjs.org/docs/components-and-props.html)

From now on, we will create React Component like this:

```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;

  }
}
```

When a component only have a `render` method, you can write it like this:

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```


```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

class App extends React.Component {
  render(){
    return (
      <div>
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="Edite" />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
```


### Exercise 

Create a React Component `CityDetail` that will render a `div` similar to this:

```html
<div class="city-detail">
  <img src="https://i.imgur.com/v7vGkhm.jpg">
  <h2>Berlin</h2>
  <p>Berlin is the capital and the largest city of Germany, as well as one of its 16 constituent states</p>
</div>
```

Be careful in that example, in JSX you will need to close the `img` tag and change `class` into `className`


Then you will need to reuse this Component three times to display information from this array:

```js
let cities = [{
  name: "Berlin",
  description: "Berlin is the capital and the largest city of Germany, as well as one of its 16 constituent states",
  imgUrl: "https://i.imgur.com/v7vGkhm.jpg"
},{
  name: "Paris",
  description: "Paris is the capital and most populous city of France, with an area of 105 square kilometres (41 square miles) and a population of 2,206,488",
  imgUrl: "https://i.imgur.com/TVZKjza.jpg"
},{
  name: "Madrid",
  description: "Madrid is the capital of Spain and the largest municipality in both the Community of Madrid and Spain as a whole",
  imgUrl: "https://i.imgur.com/4Eno2jp.jpg"
}]
```


You can rely on this Pen for this exercise: https://codepen.io/maxencebouret/pen/zaayEZ?editors=0010

