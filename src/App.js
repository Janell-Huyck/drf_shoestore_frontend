import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      shoes: []
    }
  }
  componentDidMount() {
    fetch('http://127.0.0.1:8000/api/shoe/')
      .then(res => res.json())
      .then(data => console.log(data))
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.shoes.map(shoe => {
            return <li>{shoe.name}</li>
          })}
        </ul>
      </div>
    );
  }


}

export default App;
