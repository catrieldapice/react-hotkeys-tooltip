import React, { Component } from 'react';
import logo from './logo.svg';
import { HotKeys } from 'react-hotkeys';
import Modal from 'react-responsive-modal';

import { withRouter } from 'react-router';

import { PropTypes } from 'prop-types';

import './App.css';

const shortcurts = {
  showHelpPopup: '?',
  moveToSecondPage: '2',
  console: 'ctrl+1',
};

class SecondPage extends Component {
  state = {
    isHelpOpen: false,
  };

  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };

  focus = () => {
    console.log('asd');
    this.h1.focus();
  };

  handlers = {
    showHelpPopup: () => this.setState({ isHelpOpen: !this.state.isHelpOpen }),
    moveToSecondPage: () => this.props.history.push('/'),
    console: () => this.focus(),
  };

  render() {
    return (
      <div className="App">
        <HotKeys keyMap={shortcurts} handlers={this.handlers} attach={window} focused={true} />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title" tabIndex={0} ref={c => (this.h1 = c)}>
            Welcome to React
          </h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Modal
          open={this.state.isHelpOpen}
          onClose={() => this.setState({ isHelpOpen: false })}
          little
        >
          {Object.keys(shortcurts).map(key => (
            <p>
              {key} - {shortcurts[key]}
            </p>
          ))}
        </Modal>
      </div>
    );
  }
}

export default SecondPage;
