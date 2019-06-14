import React, { Component } from 'react';
import Todos from './Components/Todos';

import './App.css';

//This doesn't have the { Component } setup as mentioned in the tutorial. Might want to reasearch why later. 
//https://www.youtube.com/watch?v=sBws8MSXN7A&t 17.02

class App extends Component {

  state = {
    todos: [
      {
        id: 1,
        title: "Take out the trash",
        completed: false
      },
      {
        id: 2,
        title: "Wash the dog",
        completed: false
      },
      {
        id: 3,
        title: "Try to find purpose in my meaningless exsistence.",
        completed: false
      }
    ]

  }

  
  

  render(){
    //A test to make sure the state is working
    // console.log(this.state.todos);
    return (
      <div className="App">
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
