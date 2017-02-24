import React, { Component } from 'react';

class ListItem extends React.Component {
  onClick = () => {
    this.props.onClick(this.props.index)
  }
  render() {
    return(<li onClick={this.onClick}>{this.props.name}</li>)
  }
}

export {ListItem}
