import React from 'react'
import Loadable from 'react-loading-overlay';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import StateConfigList from '../containers/StateConfigList.js';

var topNav = host => <header className="main-header">
    <a href={host} className="logo">
        <span className="logo-mini"><b>Qz</b>ST</span>
        <span className="logo-lg"><b>Qz</b>StringTools</span>
    </a>
    <nav className="navbar navbar-static-top">

    </nav>
</header>;

var sideBar = host =>
  <aside className="main-sidebar">
    <section className="sidebar">
        <ul className="sidebar-menu" data-widget="tree">
            <li className="header">MAIN NAVIGATION</li>
            <li className="active treeview menu-open">
                <a href={host}>
                    <i className="fa fa-font"></i> <span>Home</span>
                </a>
            </li>
        </ul>
    </section>
  </aside>;

var App = function(){
    var host = location.protocol + "//" + window.location.host;
    return <div>
        {topNav(host)}
        {sideBar(host)}
        <div className="content-wrapper">
            <StateConfigList />
        </div>
    </div>;
};

export default App;
