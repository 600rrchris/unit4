import React, { Component } from 'react';
import './App.css';
import CircleSelector from './components/CircleSelector/CircleSelector';
import Circles from './components/Circles/Circles';

class App extends Component {
  constructor(){
    super()
    this.state={
      selected: '1'
    }
  }

  changeName = (newSelection) =>{
		this.setState({
      selected: newSelection
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">Unit 4</header>
        <main>
          <CircleSelector 
            selected={this.state.selected}
            onChange={this.changeName}
          />
          <Circles 
            selected={this.state.selected}
          />
        </main>
      </div>
    );
  }
}

export default App;
