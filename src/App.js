import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  state ={
    prgs:10,
  }
  setprgs = (prgs) =>{
    this.setState({prgs : prgs})
  }
  render() {
    return (
      <div>
        <Router>
          <Navbar/>
          <LoadingBar
            color='#f11946'
            height={3}
            progress={this.state.prgs}
          />
          <Routes>
            <Route exact path="/" element={<News setPrgs={this.setPrgs} key="general" category="general"/>}></Route>
            <Route exact path="/business" element={<News setPrgs={this.setPrgs} key="business" category="business"/>}></Route>
            <Route exact path="/entertainment" element={<News setPrgs={this.setPrgs} key="entertainmentl" category="entertainmentl"/>}></Route>
            <Route exact path="/general" element={<News setPrgs={this.setPrgs} key="general" category="general"/>}></Route>
            <Route exact path="/health" element={<News setPrgs={this.setPrgs} key="health" category="health"/>}></Route>
            <Route exact path="/science" element={<News setPrgs={this.setPrgs} key="science" category="science"/>}></Route>
            <Route exact path="/sports" element={<News setPrgs={this.setPrgs} key="sports" category="sports"/>}></Route>
            <Route exact path="/technology" element={<News setPrgs={this.setPrgs} key="technology" category="technology"/>}></Route>
          </Routes>
        </Router>
      </div>
    )
  }
}

