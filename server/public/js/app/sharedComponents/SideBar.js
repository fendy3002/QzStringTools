import React from 'react'

var SideBar = ({host}) =>
  <aside className="main-sidebar">
    <section className="sidebar">
        <ul className="sidebar-menu" data-widget="tree">
            <li className="header">MAIN NAVIGATION</li>
            <li className="active treeview menu-open">
                <a href={host}>
                    <i className="fa fa-font"></i> <span>Home</span>
                </a>
            </li>
            <li className="active treeview menu-open">
                <a href={host + "/config"}>
                    <i className="fa fa-gear"></i> <span>Config</span>
                </a>
            </li>
            <li className="active treeview menu-open">
                <a href={host + "/about"}>
                    <i className="fa fa-info-circle"></i> <span>About</span>
                </a>
            </li>
        </ul>
    </section>
  </aside>;

export default SideBar;
