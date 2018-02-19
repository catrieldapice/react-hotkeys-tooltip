import React, { Component } from 'react';

import { HotKeys } from 'react-hotkeys';
import Modal from 'react-responsive-modal';

import { withRouter } from 'react-router';

import { PropTypes } from 'prop-types';

import SecondPage from './SecondPage';

import MainHeader from './components/MainHeader';
import Box from './components/Box';
import Text from './components/Text';

const shortcurts = {
  showHelpPopup: '?',
  moveToSecondPage: '2',
  boxFocus: 'ctrl+2',
  textFocus: 'ctrl+3',
  console: 'ctrl+1'
};

class App extends Component {
  state = {
    isHelpOpen: false
  };

  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  focus = () => {
    this.text.focus();
  };

  handlers = {
    showHelpPopup: () => this.setState({ isHelpOpen: !this.state.isHelpOpen }),
    moveToSecondPage: () => this.props.history.push('/secondPage'),
    boxFocus: () => this.focus(),
    textFocus: () => this.focus(),
    console: () => console.log('console log')
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
          <MainHeader />
        </HotKeys>
        <Text textRef={c => (this.text = c)} />
        <div>
          <Box boxRef={c => (this.box = c)} />
        </div>
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
