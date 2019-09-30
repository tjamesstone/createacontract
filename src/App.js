import React from 'react';
import Home from './components/Home/Home'
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        
    }
}

  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
