import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    const { isMobile } = this.props.device;

    return (
      <div>
        <h1>hello world {isMobile ? 'mobile' : 'desktop'}</h1>
      </div>
    );
  }
}

App.propTypes = {
  device: PropTypes.object.isRequired
};

const mapStateToProps = ({ device }) => ({ device });

export default connect(mapStateToProps)(App);
