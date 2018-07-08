![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# React & Express | File Upload

## Introduction

During that course, we will learn how to upload a file with the MERN stack and Cloudinary. 

## Example with the MERN boilerplate

### Set up the backend

Add your Cloudinary credentials. The values are accessible on https://cloudinary.com/console.

**`server/.env`**
```
CLOUDINARY_CLOUD_NAME=...........
CLOUDINARY_API_KEY=...........
CLOUDINARY_API_SECRET=...........
```

Make sure you configured correctly Cloudinary (but it should be already good).

**`server/configs/cloudinary.js`**
```js
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});
```

Make sure you require the `server/configs/cloudinary.js` inside **`server/app.js`** (but it should be the case).
```js
// ...
require('./configs/cloudinary');
// ...
```

In the file **`server/routes/users.js`**, you should see a `POST /api/users/first-user/pictures` route:
```js
router.post('/first-user/pictures', parser.single('picture'), (req, res, next) => {
  User.findOneAndUpdate({}, { pictureUrl: req.file.url })
    .then(() => {
      res.json({
        success: true,
        pictureUrl: req.file.url
      })
    })
});
```

This enpoint is able to receive an input `picture` that is a file, 



### Test with Postman

This is the request you can do with Postman. After doing it, you should see a success JSON and you would be able to see with Mongo Compass that the first user of your database (probably `fullstack-countries`) has a pictureUrl.

![](https://i.imgur.com/lk5kue9.png)


On Postman, if you click on *Code* (just bellow *Save*) and select *JavaScript > JavaScript Jqurey AJAX*, you will see an JavaScript example to simulate the same request. 

![](https://i.imgur.com/zlCDYRI.png)

With Axios it would be very similar. The most important part is the begining, we are going to reuse in React:

```js
let form = new FormData();
form.append("picture", /* the file */);
```


### Test with React

Add a method in your `client/src/api.js` that will look like this:

```js
  addPicture(file) {
    const formData = new FormData();
    formData.append("picture", file)
    console.log('DEBUG formData', formData.get("picture"));
    return service
      .post('/users/first-user/pictures', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(res => res.data)
      .catch(errHandler);
  },
```

Then, to test it in the Home Component, you can change the `client/src/components/Home.js` file:

```js
import React, { Component } from 'react';
import api from '../api';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      file: null
    }
  }
  handleChange(e) {
    console.log('handleChange');
    console.log('DEBUG e.target.files[0]', e.target.files[0]);
    this.setState({
      file: e.target.files[0]
    })
  }
  handleSubmit(e) {
    e.preventDefault()
    api.addPicture(this.state.file)
  }
  render() {                
    return (
      <div className="Home">
        <h2>Home</h2>
        <p>This is a sample project with the MERN stack</p>
        
        <form onSubmit={(e)=>this.handleSubmit(e)}>
          <input type="file" onChange={(e)=>this.handleChange(e)} /> <br/>
          <button type="submit">Save new profile picture</button>
        </form>
      </div>
    );
  }
}

export default Home;
```

Now, try the form with your React application.

You should see on *Network* tab of Chrome that the request was succesful.

![](https://i.imgur.com/K8SiVhK.png)

You should also see on your database that the first user has a field `pictureUrl`.
![](https://i.imgur.com/aJDz8K7.png) 

## Exercise

Create a `/profile` page in React with:
- The basic information about the user: name, email and pictureUrl
- A form to upload a new profile picture

For that, you will need to create 
- A `Profile` component
- A new route `POST /api/users/picture`


## Code sample

### Generic signup form with a file

```js
export default {
  // ...
  signup(userInfo) {
    const formData = new FormData();
    Object.keys(userInfo).forEach(key => formData.append(key, userInfo[key]));
    return service
      .post('/signup', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(res => res.data)
      .catch(errHandler);
  },
  // ...
}
```