import React from 'react'
import TopNav from './TopNav.js';
import SideBar from './SideBar.js';

var AppTemplate = function({children}){
    var host = location.protocol + "//" + window.location.host;
    return <div>
        <TopNav host={host} />
        <SideBar host={host} />
        <div className="content-wrapper">
            {children}
        </div>
    </div>;
};

export default AppTemplate;
