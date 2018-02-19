import React, { Component } from 'react';

class Box extends Component {
  render() {
    return (
      <div>
        <button
          ref={this.props.boxRef}
          onClick={() => console.log('button click')}
        >
          hotkey me
        </button>
      </div>
    );
  }
}

export default Box;
