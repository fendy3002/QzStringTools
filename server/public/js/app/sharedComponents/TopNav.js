import React from 'react'

var TopNav = ({host}) => <header className="main-header">
    <a href={host} className="logo">
        <span className="logo-mini"><b>Qz</b>ST</span>
        <span className="logo-lg"><b>Qz</b>StringTools</span>
    </a>
    <nav className="navbar navbar-static-top">
    	<a href="#" className="sidebar-toggle" data-toggle="pushMenu" role="button">
        	<span className="sr-only">Toggle navigation</span>
      	</a>
    </nav>
</header>;

export default TopNav;
