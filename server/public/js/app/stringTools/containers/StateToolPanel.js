import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React, { PropTypes } from 'react';
import {setSelectedCommand, convertInput} from '../actions/index.js';
import Component from '../components/ToolPanel.js';

var mapStateToProps = function(state){
    return {
        config: state.config,
        filter: state.filter
    };
};

var mapDispatchToProps = function(dispatch, getState){
    return {
        setSelectedCommand: bindActionCreators(setSelectedCommand, dispatch),
        convertInput: bindActionCreators(convertInput, dispatch),
    };
};
var StateComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export default StateComponent;
