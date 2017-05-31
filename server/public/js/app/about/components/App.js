import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReactMarkdown from 'react-markdown';

import {setReadme} from '../actions/index.js';
import AppTemplate from '../../sharedComponents/AppTemplate.js';

var App = function({request, setReadme}){
    if(!request.readme){
        setReadme();
    }
    return <AppTemplate>
        <section className="content">
            <div className = "box box-solid">
                <div className="box-body">
                    <ReactMarkdown source={request.readme} />
                </div>
            </div>
        </section>
    </AppTemplate>;
};

var mapStateToProps = function(state){
    return {
        request: state.request
    };
};

var mapDispatchToProps = function(dispatch, getState){
    return {
         setReadme: bindActionCreators(setReadme, dispatch)
    };
};
var StateApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default StateApp;
