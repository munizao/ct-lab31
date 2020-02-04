import React from 'react';
import { quote } from '../services/futurama-api';

export default class Quote extends React.Component {
  state = {
    character: '',
    quote: '',
    image: ''
  };

  fetch = () => {
    return quote()
      .then((res) => {
        this.setState(res);
      });    
  }

  handleClick = () => {
    this.fetch();
  }

  componentDidMount() {
    this.fetch();
  }

  render() {
    return (
      <div>
        <img src={this.state.image} /><p>{this.state.quote}</p><p>{this.state.character}</p>
        <button onClick={this.handleClick}>Get new Quote</button>
      </div>
    );
  }
}
