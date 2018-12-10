import Header from "../header/Header";
import Router from "react-router-dom/BrowserRouter";
import React, { Component } from 'react'

export class App extends Component {
  render() {
    return (
      <div>
       <Router>
        <Header />
       </Router>
      </div>
    )
  }
}

export default App;
