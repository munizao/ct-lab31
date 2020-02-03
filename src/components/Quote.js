import React from 'react';
import { quote } from '../services/futurama-api';

export default class Quote extends React.Component {
  state = {
    character: '',
    quote: '',
    image: ''
  };

  handleClick = () => {
    quote()
      .then((res) => {
        this.setState(res);
      });
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
