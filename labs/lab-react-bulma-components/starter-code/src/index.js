import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bulma/css/bulma.css';



class Button extends React.Component{
    render(){
        return(
            <a href="#" className={this.props.className}>{this.props.text}</a>
        )
    }
}

class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar is-light">
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://bulma.io">
                        <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"></img>
                    </a>
                </div>
                <div id="navbarExampleTransparentExample" className="navbar-menu">
                    <div className="navbar-start">
                        <Button text="home" className="button is-white" />
                    </div>  
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="field is-grouped">
                                <Button text="login" className="button is-rounded is-small is-danger" />
                                <Button text="signup" className="button  is-small is-success" />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}



class App extends React.Component {
    render() {
        return (
            <div>
            {<Navbar/>}
            
            {/* {<Button className=" button is-rounded is-danger" text= 'Button 1'/>}
            {<Button className=" button  is-success" text= 'Button 2'/>} 
        */}
        
        </div>
    );
}
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);