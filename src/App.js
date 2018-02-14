import React, { Component } from 'react';
import logo from './logo.svg';
import { HotKeys } from 'react-hotkeys';
import Modal from 'react-responsive-modal';

import { withRouter } from 'react-router';

import { PropTypes } from 'prop-types';

import SecondPage from './SecondPage';

import './App.css';

const shortcurts = {
  showHelpPopup: '?',
  moveToSecondPage: '2',
  console: 'ctrl+1',
};

class App extends Component {
  state = {
    isHelpOpen: false,
  };

  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };

  handlers = {
    showHelpPopup: () => this.setState({ isHelpOpen: !this.state.isHelpOpen }),
    moveToSecondPage: () => this.props.history.push('/secondPage'),
    console: () => console.log('asdas'),
  };

  render() {
    return (
      <div className="App">
        <HotKeys keyMap={shortcurts} handlers={this.handlers} attach={window} focused={true}>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
        </HotKeys>
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

export default App;
