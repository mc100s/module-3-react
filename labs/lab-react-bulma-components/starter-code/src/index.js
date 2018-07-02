import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bulma/css/bulma.css';



class Button extends React.Component {
  render() {
    let classes = "button ";
    classes += this.props.isRounded ? " is-rounded" : "";
    classes += this.props.isDanger ? " is-danger" : "";
    classes += this.props.isLink ? " is-link" : "";
    classes += this.props.isSuccess ? " is-success" : "";
    classes += this.props.isSmall ? " is-small" : "";
    return (
      <a href="" className={classes}>{this.props.children}</a>
    )
  }
}


class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar is-light">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
          </a>
          <div className="navbar-burger burger" data-target="navMenu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className="navbar-menu" id="navMenu">
          <div className="navbar-start">
            <a className="navbar-item" href="https://bulma.io/">
              Home
            </a>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="field is-grouped">
                <p className="control">
                  <Button isLink>
                    Login
                  </Button>
                </p>
                <p className="control">
                  <Button isSuccess>
                    Sign Up
                  </Button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}


class FormField extends React.Component {
  render() {
    return (
      <div className="field">
        <label className="label">{ this.props.label }</label>
        <div className="control">
          <input className="input" name={ this.props.name } type={ this.props.type } placeholder={ this.props.placeholder } />
        </div>
      </div>
    )
  }
}

class Form extends React.Component {
  render() {
    return (
      <form action="/signup" method="post">
        <FormField type="text" name="name" placeholder="Enter your name" label="Name" />
        <FormField type="email" name="email" placeholder="Enter your email" label="Email" />
        <FormField type="password" name="password" placeholder="Enter your password" label="Password" />
        <div className="field">
          <div className="control">
            <button className="button is-success">Submit</button>
          </div>
        </div>
      </form>
    )
  }
}


class Message extends React.Component {
  render() {
    let classes = "message";
    classes += this.props.isInfo ? " is-info" : "";
    return (
      <article className={classes}>
        <div className="message-header">
          <p>{this.props.title}</p>
          <button className="delete" aria-label="delete"></button>
        </div>
        <div className="message-body">
          {this.props.children}
        </div>
      </article>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Navbar />
        <div className="container">
          <div className="columns">
            <div className="column is-half">
              <Form />
            </div>
            <div className="column">
              <Message isInfo title="Hello World">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <strong>Pellentesque risus mi</strong>
              </Message>
            </div>
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