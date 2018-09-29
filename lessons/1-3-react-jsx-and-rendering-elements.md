![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# React | JSX and elements


## [React | 1. Hello World](https://reactjs.org/docs/hello-world.html)

The following code takes the tag with the id `root` and sets its content to `<h1>Hello, world!</h1>`

```jsx
ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);
```

## [React | 2. Introducing JSX](https://reactjs.org/docs/introducing-jsx.html)

You can see JSX as a new type. Now you can store in a variable a JSX as you would store a number for example.

Be careful in JSX, self closing tag, such as `img`, must be ended by `/>`.

```jsx
const element = <img src={user.avatarUrl} />;
```

<!-- ### Exercise 

TODO: Create exercise where they need to add `{}` and JSX -->


## [React | 3. Rendering Elements](https://reactjs.org/docs/rendering-elements.html)

The only thing to remember here is that `ReactDOM.render()` is a function we will use once in the future and that will display our React application.

