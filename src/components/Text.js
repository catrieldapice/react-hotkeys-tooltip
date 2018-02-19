import React, { Component } from 'react';

class Box extends Component {
  render() {
    return (
      <div>
        <p tabIndex={0} ref={this.props.textRef}>
          You can focus the Text
        </p>
      </div>
    );
  }
}

export default Box;
