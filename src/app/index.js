import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const App = (props) => {
  const { isMobile } = props.device;

  return (
    <div>
      <h1>hello world {isMobile ? 'mobile' : 'desktop'}</h1>
    </div>
  );
};

App.propTypes = {
  device: PropTypes.object.isRequired
};

const mapStateToProps = ({ device }) => ({ device });

export default connect(mapStateToProps)(App);
