import React from 'react';
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import './App.scss';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        
    }
}

  render() {
    return (
      <div className="App">
        <Header />
        <Home />
      </div>
    );
  }
}

export default App;
