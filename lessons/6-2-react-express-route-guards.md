![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# React & Express | Route guards

## Introduction

In this course, we are going to update the project IronTodos. We will add a role to users, `ADMIN` and `USER`, and only the `ADMIN` will be able to delete the todo item.

## Set up the project

```sh
$ git clone https://github.com/mc100s/react-iron-todos.git
$ cd react-iron-todos
$ npm install

# In 2 different terminals
$ npm run dev:server
$ npm run dev:client
```



## Files to modify


```js
// server/models/user.js
 role: {type: String, enum: ['ADMIN', 'USER'], default: 'USER'}
```


```js
// server/routes/todos.js

// OPTION 1
function checkRole(role) {
  return [
    passport.authenticate("jwt", config.jwtSession), 
    (req,res,next) => {
      console.log('DEBUG req.user', req.user);
      if (req.user.role === role)
        next();
      else 
        next("You don't have the rights")
    }
  ]
}
router.delete('/:id', checkRole('ADMIN'), (req, res, next) => {
  console.log('DEBUG req.user', req.user);
  Todo.findByIdAndRemove(req.params.id)
  .then(todo=>{
    res.json({success: true, todo})
  })
  .catch(error=>next(error))
});

// OR

// OPTION 2
router.delete('/:id', passport.authenticate("jwt", config.jwtSession), (req, res, next) => {
  if (req,user.role !== 'ADMIN') {
    res.json({success: false, message: "You don't have the rights"})
    return;
  }
  Todo.findByIdAndRemove(req.params.id)
  .then(todo=>{
    res.json({success: true, todo})
  })
  .catch(error=>next(error))
});
```

```js
// client/src/api.js

 loadRole() {
   let user = this.loadUser()
   if (!user || !user.role) return false
   return user.role
 },
+

```

```js
// client/src/components/Home.js

import api from '../api';

// ...
{api.loadRole() === "ADMIN" && <td><button onClick={this.props.onDelete}>Delete</button></td>}
// ...
```



