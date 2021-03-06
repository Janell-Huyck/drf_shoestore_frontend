import React from 'react';
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
      .then(data => this.setState({ shoes: data }))
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.shoes.map(shoe => {
            return (
              <li key={shoe.id}>
                -size: {shoe.size}<br></br>
                -brand: {shoe.brand_name}<br></br>
                -manufacturer: {shoe.manufacturer}<br></br>
                -color: {shoe.color}<br></br>
                -material: {shoe.material}<br></br>
                -type: {shoe.shoe_type}<br></br>
                -fastener: {shoe.fasten_type}<br></br>
                <br></br>
              </li>

            )
          })}
        </ul>
      </div>
    );
  }


}

export default App;
