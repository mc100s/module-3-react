import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bulma/css/bulma.css";

let cssClasses = {
  isActive: "is-active",
  isBlack: "is-black",
  isCentered: "is-centered",
  isDanger: "is-danger",
  isDark: "is-dark",
  isFocused: "is-focused",
  isGrouped: "is-grouped",
  isHovered: "is-hovered",
  isInfo: "is-info",
  isInverted: "is-inverted",
  isLarge: "is-large",
  isLight: "is-light",
  isLink: "is-link",
  isLoading: "is-loading",
  isMedium: "is-medium",
  isOutlined: "is-outlined",
  isPrimary: "is-primary",
  isRight: "is-right",
  isRounded: "is-rounded",
  isSelected: "is-selected",
  isSmall: "is-small",
  isStatic: "is-static",
  isSuccess: "is-success",
  isText: "is-text",
  isWarning: "is-warning",
  isWhite: "is-white"
};

//dont make new content here, just use from what is made before.
/*  */
class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Nav />
          <FormField label ="Name" placeholder = "asdasd" type="text" >
              name
          </FormField>

          <FormField label ="Email" placeholder = "asdasd" type="email" > Email</FormField>

          <FormField label ="Password" placeholder="asdasd" type="password" > Password</FormField>
          <Button isLink >Signup</Button>
        </div>
      </div>
    );
  }
}

class Button extends React.Component {
  render() {
    let classString = "button ";
    let typeString = ""
    for (let cls in this.props) {
      classString += cssClasses[cls];
      classString += " ";
    }
    return (
      <div>
        <button className={classString}>{this.props.children}</button>
        {/* what is .children? */}
      </div>
    );
  }
}

class Nav extends React.Component {
  render() {
    return (
      <nav className="navbar is-transparent has-background-light">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              alt="Bulma: a modern CSS framework based on Flexbox"
              width="112"
              height="28"
            />
          </a>
          <div
            className="navbar-burger burger"
            data-target="navbarExampleTransparentExample"
          >
            <span />
            <span />
            <span />
          </div>
        </div>

        <div id="navbarExampleTransparentExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item" href="https://bulma.io/">
              Home
            </a>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <Button isMedium isInfo>
                Login
              </Button>
              <div className="navbar-item" />
              <Button isMedium isPrimary>
                {" "}
                Signup
              </Button>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

document.addEventListener("DOMContentLoaded", function() {
  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(function($el) {
      $el.addEventListener("click", function() {
        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);

        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
});

class FormField extends React.Component {
  render() {
    //   let label = <label className="label">{this.props.children}</label>
    return (
      <div>
        <div className="field">
          <label className="label">{this.props.label}</label>
          <div className="control">
            <input
              className="input"
              type={this.props.type}
              placeholder={this.props.placeholder}/>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App cssClasses={cssClasses} />,
  document.getElementById("root")
);
