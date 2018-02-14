import React, { Component } from 'react';
import logo from './logo.svg';
import { HotKeys } from 'react-hotkeys';
import Modal from 'react-responsive-modal';
import { Link, Switch, Route, Redirect } from 'react-router-dom';
import SecondPage from './SecondPage';

import './App.css';

const shortcurts = {
  showHelpPopup: '?',
  moveToSecondPage: '2',
  console: 'ctrl+1'
};

class App extends Component {
  state = {
    isHelpOpen: false
  };

  handlers = {
    showHelpPopup: () => this.setState({ isHelpOpen: !this.state.isHelpOpen }),
    moveToSecondPage: () => (
      <Route path="/secondPage" component={() => <SecondPage />} />
    ),
    console: () => console.log('asdas')
  };

  render() {
    return (
      <div className="App">
        <HotKeys
          keyMap={shortcurts}
          handlers={this.handlers}
          attach={window}
          focused={true}
        >
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
