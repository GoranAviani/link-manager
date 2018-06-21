import React , {Component} from "react";

import logo from '../logo.svg';


class Titles extends Component {
    render(){
        return(
            <div>
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
            </div>

    )
    }
}




export default Titles;