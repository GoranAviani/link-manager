import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Amibit's React link manager</h1>
        </header>
        <p className="App-intro">
          List of links that on every link opens it in browser.
            Add new link.
            Add name for new link.
            Edit a link.
            Delete a link.
        </p>

        <div className="Link-container">
            < input type = "text" className = "link-input" placeholder ="Link name" ref = {this.linkInputName}/>
            < input type = "text" className = "link-input" placeholder ="Link URL" ref = {this.linkInputURL} onKeyUp={this.addLink}/>


        {/* Display links*/}
            {this.state.links.map((x,indeks) =>
                <div key={x.id} className="link-item">
                    <div className="link-item-left">


                        <div className="link-item-label">{x.title}</div>
                        <a href={x.url}><button>{x.title}</button></a>
                    </div>


                </div>
            )}

        </div>





      </div>
    );
  }



linkInputName = React.createRef();
linkInputURL = React.createRef();
state = {

    idLink: 4,
    links: [
        {
            'id':1,
            'title': 'google',
            'url': 'http://www.google.com',
        },
        {
            'id':2,
            'title': 'index',
            'url': 'http://www.index.hr'
        },
        {
            'id':3,
            'title': 'third',
            'url': 'http://www.index.hr',
        },

    ]
}



addLink = event => {
      if (event.key === 'Enter'){
        const userLinkInput = (this.linkInputName.current.value);
        const userLinkInputURL = (this.linkInputURL.current.value);


        /*if input is none dont add it*/
        if(userLinkInput.trim().length === 0){
            return;
        }

        this.setState((prevState, props) => {
            let linksPreviousState = prevState.links;
            let idLink = prevState.idLink + 1;

            linksPreviousState.push({
                id:idLink,
                title:userLinkInput,
                url: userLinkInputURL,
            });
            console.log(linksPreviousState)
          return {
                linksPreviousState, idLink
          };
        });
/*todoInput field to ''*/
this.linkInputName.current.value ='';
this.linkInputURL.current.value ='';
      }
}
















}
export default App;
