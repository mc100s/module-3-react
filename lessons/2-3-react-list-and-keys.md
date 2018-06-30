![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# React | Lists and Keys


## [React | 8. List and Keys](https://reactjs.org/docs/lists-and-keys.html)


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
        {students.map(student => <li key={i}>{student}</li>)}
      </ul>
    )
  }
}
```


### Exercise

Redo the exercise where you need to display detail about cities, by using a loop this time.

The pen is available [here](https://codepen.io/maxencebouret/pen/zaayEZ?editors=0010) and you can use the following `CityDetail` Component.

```jsx
class CityDetail extends React.Component {
  render(){
    return (
      <div className="city-detail">
        <img src={this.props.imgUrl} />
        <h2>{this.props.name}</h2>
        <p>{this.props.description} </p>
      </div>
    )
  }
}
```


You will find a solution here, but look at it only when you are done: https://codepen.io/maxencebouret/pen/YvvdjO?editors=0010


