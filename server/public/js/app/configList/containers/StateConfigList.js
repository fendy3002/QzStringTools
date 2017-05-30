import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React, { PropTypes } from 'react';
import ConfigList from '../components/ConfigList.js';

var mapStateToProps = function(state){
    return {
        config: state.config
    };
};

var mapDispatchToProps = function(dispatch, getState){
    return {
    };
};
var StateConfigList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConfigList);

export default StateConfigList;
