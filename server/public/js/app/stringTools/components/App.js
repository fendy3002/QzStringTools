import React from 'react'

import AppTemplate from '../../sharedComponents/AppTemplate.js';
import StateToolPanel from '../containers/StateToolPanel.js';

var App = function(){
    return <AppTemplate>
        <StateToolPanel />
    </AppTemplate>;
};

export default App;
