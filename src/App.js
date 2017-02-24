import React, { Component } from 'react';
import './App.css';
import {ShoppingList, ListItem, Input} from './app/index'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {shoppingList: [], currentInput: ''}
  }

  onType = (e) => {
    this.setState({currentInput: e.target.value})
  }

  onAdd = () => {
    const item = {name: this.state.currentInput, completed: false};
    const shoppingList = [ ...this.state.shoppingList, item ];
    this.setState({shoppingList, currentInput: ''})
  }

  purchaseItem = (index) => {
    let shoppingList = [...this.state.shoppingList];
    shoppingList[index].completed = !shoppingList[index].completed;
    this.setState({shoppingList})
  }

  render() {
    return (
      <div className="App">
        <h2>React workshop 2</h2>
        <Input onChange={this.onType} onClick={this.onAdd} value={this.state.currentInput} type="text"/>
        <ShoppingList list={this.state.shoppingList} onClick={this.purchaseItem}/>
      </div>
    );
  }
}

export default App;
