import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React, { PropTypes } from 'react';
import Component from '../components/ToolPanel.js';

var mapStateToProps = function(state){
    return {
        config: state.config
    };
};

var mapDispatchToProps = function(dispatch, getState){
    return {
    };
};
var StateComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export default StateComponent;
