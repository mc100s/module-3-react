![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# React | Forms

## [React | 9. Forms](https://reactjs.org/docs/forms.html)

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
          <input type="text" value={this.state.value} onChange={this.handleChange} />`
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```