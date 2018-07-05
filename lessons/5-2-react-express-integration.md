![Ironhack logo](https://i.imgur.com/1QgrNNw.png)

# React & Express | Frontend Backend Integration

## [Summary of the previous course](http://learn.ironhack.com/#/learning_unit/2507)

In the previous course, we've created our own REST API. For that, we've created an Express project where we:
- Removed everything related to the views to sent JSON instead
- Added `cors`

In term of routes, we have:
- `GET /api/phones`
- `POST /api/phones`
- `GET /api/phones/:id`
- `PUT /api/phones/:id`
- `DELETE /api/phones/:id`

## Add of React in the project

In our Express app,  we will insert the React code in a folder `/client`

For that, generate the React app inside the Express app directory:
```sh
$ create-react-app client
$ npm install --save axios
```

## Modify the React app

<!-- Source: https://github.com/ta-web-paris/tweeter/blob/master/client/src/api.js -->

We will create a `client/src/api.js`

```js
// client/src/api.js
import axios from 'axios';

const service = axios.create({
  baseURL: `http://localhost:3000/api/`
});

const errHandler = err => {
  console.error(err.response.data);
  throw err.response.data;
};

export default {
  service: service,

  getPhones() {
    return service.get('phones')
      .then(res => res.data)
      .catch(errHandler);
  },

  getPhoneDetail(id) {
    return service.get('phones/' + id)
      .then(res => res.data)
      .catch(errHandler);
  },

  addPhone(data) {
    return service.post('phones', data)
      .then(res => res.data)
      .catch(errHandler);
  },

  modifyPhone(id, data) {
    return service.post('phones/'+id, data)
      .then(res => res.data)
      .catch(errHandler);
  },

  deletePhone(id) {
    return service.delete('phones/' + id)
      .then(res => res.data)
      .catch(errHandler);
  },
};
```

Then, we can for example use `getPhones()` like this:

```js
import api from './api'

api.getPhones()
.then(data => {
  console.log("This is my data:", data)
})
```

## Test the application

To test the application, you should have 2 terminals opened
```sh
# Terminal 1
$ npm start # or npm run dev
```

```sh
# Terminal 2
$ cd client
$ npm start
```

## Example of a `ListPhones` component

```js
import React, { Component } from 'react'
import api from './api'

class ListPhones extends Component {
  constructor(props) {
    super(props)
    this.state = {
      phones: []
    }
  }
  componentDidMount() {
    api.getPhones()
    .then(data => {
      this.setState({
        phones: data
      })
    })
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.phones.map(phone => <li>{phone.name}</li>)}
        </ul>
      </div>
    )
  }
}

export default ListPhones
```


#### Exercise

Create a component with an number input that displays the phone with the id precised in the input.


## Package the app


First, inside the `client` folder, let's run the following command:
```sh
$ npm run build
``` 

It has just created a folder `client/build` that contains some HTML, CSS and JS files readable by a browser.


## Configure the Express server

Now that we have our client application bundled in the `/client/build` folder we can move it into a static folder of our back-end app. We want our Express server to serve the entire client application.


For that, we should add the following line in `app.js`

```js
app.use(express.static(path.join(__dirname, 'client/build')));

// ...
// The routes for the API
// ...

// This will be the default route is nothing else is caught
app.use(function(req, res) {
  res.sendfile(__dirname + '/client/build/index.html');
});
```

## Summary 

In this lesson we have learned how to run a full-stack application, how to consume a REST API using Rest, and how to build an application for release.
