import React from 'react';
import routes from './routes'
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
        {routes}
      </div>
    );
  }
}

export default App;
