import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './screen/home/Home';
import {Route, Switch} from "react-router-dom"
import Class from './screen/class/Class'
import About from './screen/about/About'
import Developer from './screen/developer/Developer'
import Contact from './screen/contact/Contact'


class App extends Component {
  render() {
    return (
      <div>
        <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/class" exact  component={Class} />
                <Route path="/about" exact  component={About} />
                <Route path="/contact" exact  component={Contact} />
                <Route path="/developer" exact  component={Developer} />
        </Switch>
      </div>
    );
  }
}

export default App;
