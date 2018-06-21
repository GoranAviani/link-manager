import React , {Component} from "react";


class Links extends Component {
    render(){
        return(
            <div>

<div className="Link-container">
            < input type = "text" className = "link-input" placeholder ="Link name" ref = {this.linkInputName}/>
            < input type = "text" className = "link-input" placeholder ="Link URL" ref = {this.linkInputURL} onKeyUp={this.addLink}/>


        {/* Display links*/}
            {this.state.links.map((x,indeks) =>
                <div key={x.id} className="link-item">
                    <div className="link-item-left">
                        <a href={x.url}><button>{x.title}</button></a>

                        <div className="remove-item" onClick = {(event) => this.deleteLink(indeks)}>
                            &times;
                        </div>


                    </div>


                </div>
            )}

        </div>



            </div>

    )
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
        const userLinkInputName = (this.linkInputName.current.value);
        const userLinkInputURL = (this.linkInputURL.current.value);


        /*if input is none dont add it*/
         if(userLinkInputURL.trim().length === 0){
             alert("Please enter Link URL")
             return;
          }

        if(userLinkInputName.trim().length === 0){
           alert("Please enter Link Name")
             return;
        }

        this.setState((prevState, props) => {
            let linksPreviousState = prevState.links;
            let idLink = prevState.idLink + 1;

            linksPreviousState.push({
                id:idLink,
                title:userLinkInputName,
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





deleteLink = (indeks) =>{
    console.log("deleting indeks " + indeks)

        this.setState((prevState, props) => {
            let todosPreviousStateDel = prevState.links;

            todosPreviousStateDel.splice(indeks, 1);

            return { todosPreviousStateDel };
        });
}















}




export default Links;