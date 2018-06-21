import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Amibit's react link manager</h1>
        </header>
        <p className="App-intro">
          List of links that on every link opens it in browser.
            Add new link.
            Add name for new link.
            Edit a link.
            Delete a link.
        </p>
        <div className="Link-container">
            < input type = "text" className = "todo-input" placeholder ="What needs to
                be done" ref = {this.todoInput} onKeyUp={this.addTodo}/>
        </div>


          

      </div>
    );
  }





state = {

    idLink: 4,
    links: [
        {
            'id':1,
            'title': 'google',
            'url': 'www.google.com',
            'editing': false,
        },
        {
            'id':3,
            'title': 'index',
            'url': 'www.index.hr'
        },
        {
            'id':3,
            'title': 'third',
            'url': 'www.coco.cc',
        },

    ]
}







}
export default App;
