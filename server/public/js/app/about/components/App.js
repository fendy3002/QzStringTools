import React from 'react'

import AppTemplate from '../../sharedComponents/AppTemplate.js';

var App = function(){
    return <AppTemplate>
        <section className="content-header">
            <h1>
                <b>Qz String Tools</b>
            </h1>
        </section>
        <section className="content">
            <div className = "box box-solid">
                <div className="box-header">
                    <h3>What is it about</h3>
                </div>
                <div className="box-body">
                    <p>It is a simple application to help converting some format to desired format.</p>
                    <img src="./public/image/php-array-object.gif" /> 
                </div>
            </div>
        </section>
    </AppTemplate>;
};

export default App;
