![Ironhack logo](https://i.imgur.com/1QgrNNw.png)

# React | WikiCountries

## Introduction

After spending too much time on GitHub, you found a [JSON database of countries](https://github.com/mledoze/countries/blob/master/countries.json) and you decide to use it to create your Wikipedia for countries!

![](https://media.giphy.com/media/fdUHHKI36bTVduRDfB/giphy.gif)


## Installation 

### Setup a basic project
Commands to launch
```sh
$ npm install -g create-react-app # Install globally the `create-react-app` command
$ create-react-app my-app # Create a React project folder "my-app"
$ cd my-app
$ npm install --save react-router-dom
$ rm -f src/*
$ touch src/index.js src/style.css # Create 2 files
```

Your `src/index.js` file
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './style.css';

class App extends React.Component {
  render() {
    return (
      <div>
        {/* Your application code */}
      </div>
    );
  }
}

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
  ),
  document.getElementById('root')
);

```

To help you, we gave you an example of page inside [`example.html`](example.html)

### Bootstrap installation

We will use [Twitter Bootstrap V4](https://getbootstrap.com/) for the design :)

```sh
$ npm install bootstrap --save
```

```javascript
// src/index.js
import 'bootstrap/dist/css/bootstrap.css';
```


## Instructions

### Iteration 1 | Create the components

In this iteration, we will focus on general layout. You will create at least 2 components:
- `App`: For the general layout
- `CountryDetail`: A component that will receive `cca3` as a props, that is going to respresent the id of the country (example: `ESP` for Spain, `FRA` for France).

To help you, you can use:
- `example.html`: An example of what you can render
- `countries.json`: The JSON database of countries. It's an array of object where each object represents a country and the property `cca3` is unique and will be used as the key to navigate.


As a reminder with Twitter Bootstrap:
```html
<!-- Grid: https://getbootstrap.com/docs/4.0/layout/grid/#setting-one-column-width -->
<div class="row">
  <div class="col-5">Column 5/12</div>
  <div class="col-7">Column 7/12</div>
</div>

<!-- List group: https://getbootstrap.com/docs/4.0/components/list-group/#links-and-buttons -->
<div class="list-group">
  <a href="#" class="list-group-item list-group-item-action active">Cras justo odio (active)</a>
  <a href="#" class="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
  <a href="#" class="list-group-item list-group-item-action">Morbi leo risus</a>
  <a href="#" class="list-group-item list-group-item-action">Porta ac consectetur ac</a>
  <a href="#" class="list-group-item list-group-item-action disabled">Vestibulum at eros</a>
</div>
```


### Iteration 2 | Create the all application

Everything is in the title. Good luck :)




