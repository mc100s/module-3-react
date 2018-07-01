import React from 'react';
import ReactDOM from 'react-dom';
import 'bulma/css/bulma.css';

import './style.css';
import foods from './foods.json'

class Search extends React.Component {
  render() {
    return (
      <div>
        <input className="input search-bar" type="text" name="search" placeholder="Search"
          value={this.props.search}
          onChange={this.props.onChange}
        />
      </div>
    )
  }
}

class FoodBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qty: 1
    }
  }

  handleChange(event) {
    let v = event.target.value
    this.setState({qty: v})
  }

  render() {
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.props.food.image} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.props.food.name}</strong> <br />
                <small>{this.props.food.calories} cal</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  className="input"
                  type="number" 
                  value={this.state.qty}
                  onChange={(event) => {this.handleChange(event)}}
                />
              </div>
              <div className="control">
                <button
                  className="button is-info"
                  onClick={() => {this.props.onClick(this.props.food, this.state.qty)}}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      todaysFoods: []
    }
  }

  handleClick(food, qty) {
    let todaysFoods = this.state.todaysFoods.slice();
    todaysFoods.push({...food, qty});
    this.setState({
      todaysFoods
    })
  }

  displayFoods(search) {
    search = search.toUpperCase();
    let result = [];
    for (let i = 0; i < foods.length; i++) {
      if (foods[i].name.toUpperCase().indexOf(search) !== -1) {
        result.push(
          <FoodBox key={i} food={foods[i]} onClick={this.handleClick.bind(this)} />
        )
      }
    }
    return result;
  }

  displaySelectedFoods() {
    let result = [];
    for (let i = 0; i < this.state.todaysFoods.length; i++) {
      result.push(
        <li key={i}>{this.state.todaysFoods[i].qty} {this.state.todaysFoods[i].name} = {this.state.todaysFoods[i].qty * this.state.todaysFoods[i].calories} cal</li>
      )
    }
    
    return result;
  }

  displaySelectedFoodsTotCal() {
    let result = 0;
    for (let i = 0; i < this.state.todaysFoods.length; i++) {
      result += this.state.todaysFoods[i].qty * this.state.todaysFoods[i].calories;
    }
    return result;
  }

  render() {
    return (
      <div className="container">
        <h1 className="title">IronNutrition</h1>
        <Search search={this.state.search} onChange={(e) => {this.setState({search: e.target.value})}} />
        <div className="columns">
          <div className="column">
            {this.displayFoods(this.state.search)}
          </div>
          <div className="column content">
            <h2 className="subtitle">Today's foods</h2>
            <ul>
              {this.displaySelectedFoods()}
            </ul>
            Total: {this.displaySelectedFoodsTotCal()} cal
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);