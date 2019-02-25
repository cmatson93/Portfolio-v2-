import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import Home from './views/Home';
import About from './views/About';
import Contact from './views/Contact';
import Portfolio from './views/Portfolio';

class App extends Component {
  state = {
    location: "",
    views: ["home", "about", "contact", "portfolio"]
  }

  navClick(btn) {
      console.log("Nav click, ", btn);
      this.setState({location: btn});
  }

  render() {
    let content = <Home />;

    switch (this.state.location){
      case "home":
        content = <Home />;
        break;
      case "about":
        content = <About />;
        break;
      case "contact":
        content = <Contact />;
        break;
      case "portfolio":
        content = <Portfolio />;
        break;
      default: 
        content = <Home />;
        break;
    }

    return (
      <div className="App">
        <Nav 
          onClick={(btn)=> this.navClick(btn)}
        />
        <div className="content">
         {content}
        </div>
      </div>
    );
  }
}

export default App;
