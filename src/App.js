import React, { Component } from 'react';
import './App.css';
import {games} from './video-game-titles';

class Results extends Component {
  render() {
    return (
      <ul>
        {this.props.results.map((result, index) => {
          return (<li key={index}>{result}</li>)
        })}
      </ul>
    )
  }
}

class Input extends Component {
  render() {
    return( <input onChange={this.props.onChangeEvent} type="text"/>)
  }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {results: []}
  }

  onUpdate = (e) => {
    const matches = games.filter(game => {
      return game.toLowerCase().includes(e.target.value.toLowerCase())
    })
    this.setState({results: matches})
  }

  render() {
    return (
      <div className="App">
        <h2>React workshop 2</h2>
        <Input onChangeEvent={this.onUpdate} type="text"/>
        <Results results={this.state.results}/>
      </div>
    );
  }
}

export default App;
