  
import React, { Component } from 'react';
import Header from './Header.js';
import './App.css';



class App extends Component {
  deleteHandler(message){
    alert(message);
  }
  render() {
    let subscriber=[

      {
        id:1,
        name:"shilpa bhat",
        phone:"8888888"
      },
      {
        id:2,
        name:"rudra gowda m patil",
        phone:"9999999"
      }
    ]
    return (
      <div>
        <Header heading="Phone Directory" />
        <div className="component-body-container">
          <button className="custom-btn add-btn">Add</button>

          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div>
          {
            subscriber.map(sub=>{
              return <div key={sub.id} className="grid-container">
                <span className="grid-item">{sub.name}</span>
                <span className="grid-item">{sub.phone}</span>
                <button className="deletebutton" onClick={this.deleteHandler.bind(this,"Delete Handler Clicked")}>Delete</button>
                </div>
            })
          }
        </div>
      </div>
    );
  }
}

export default App;