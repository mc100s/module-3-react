![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# React | Bootstrap and SCSS

## Introduction

In this course, we will learn 2 things:
- How to use a React Component library for Bootstrap called reactstrap
- How to do some SCSS


## [Reactstrap](https://reactstrap.github.io/)

### Installation

```sh
# If you are in the MERN boilerplate
$ cd client

# In every case
$ npm install --save reactstrap bootstrap
```


Import Bootstrap CSS, for example in the `client/src/index.js` file:

```js
import 'bootstrap/dist/css/bootstrap.min.css';
```

### Include a Button

If you want to display a Button in a component, you can do something like this

```js
// At the beginning of the file
import { Button } from 'reactstrap';
```

```js
// In the render
<Button color="primary">Primary Button</Button>
```


### Other Components

You will find more on the official documentation, such as:
- [Alert](https://reactstrap.github.io/components/alerts/)
- [Navbar](https://reactstrap.github.io/components/navbar/) (it will let you collapsing your Navbar with a props)


## SCSS with React

Create a `client/src/styles/` folder. We will listen for SCSS files inside it and transform them into CSS files.

Then install some packages.

```sh
# If you are in the MERN boilerplate
$ cd client

# In every case
$ npm install --save node-sass-chokidar npm-run-all bootstrap
```

Add the new tasks in the `package.json`

```
"scripts": {
  "build-css": "node-sass-chokidar --include-path ./src/styles --include-path ./node_modules src/styles/ -o src/styles/",
  "watch-css": "npm run build-css && node-sass-chokidar --include-path ./src/styles --include-path ./node_modules src/styles/ -o src/styles --watch --recursive",
  "start-js": "react-scripts start",
  "start": "npm-run-all -p watch-css start-js",
  "build": "npm run build-css && react-scripts build",
  "test": "react-scripts test --env=jsdom",
  "eject": "react-scripts eject"
}
```

As you can see if you look at your `package.json` this are the new commands:
- `build-css`: Builds the css from the /src/styles/ directory.
- `watch-css`: Whatches for changes of the .scss files from the /src/styles/ directory.
- `start-js`: Executes the old start command.
- `start`: Runs in parallel whatch-css and start-js.
- `build`: Builds the css and build the scripts.


Then you can create a file `client/src/styles/style.scss` that look like this:
```scss
// Your new color: here the primary color is a dark blue
$primary: #425cbb;
// $secondary
// $success
// $info
// $warning
// $danger
// $light
// $dark

@import 'bootstrap/scss/bootstrap';

// You can put your own SCSS here
```

Now, when you run your React application, you will have Bootstrap on your website with your own variables (different colors).

Be careful, you should not include the original `bootstrap` in other files, such as `src/index.js`.


## Resources
- [Reactstrap](https://reactstrap.github.io/)
- [React + Custom Bootstrap 4 Sass tutorial](https://dev.to/sabatesduran/add-custom-bootstrap-4-sass-to-create-react-app)