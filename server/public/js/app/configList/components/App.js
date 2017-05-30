import React from 'react'

import AppTemplate from '../../sharedComponents/AppTemplate.js';
import StateConfigList from '../containers/StateConfigList.js';

var App = function(){
    return <AppTemplate>
        <StateConfigList />
    </AppTemplate>;
};

export default App;
