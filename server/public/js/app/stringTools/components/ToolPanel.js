import React from 'react';
import lo from 'lodash';
import StringTool from '../../../../../../src/StringTool.js';

var Dom = function({selectedConfig, config}){
    return <div>
        <section className="content-header">
            <h1>
                <b>String Tools</b>
            </h1>
        </section>
        <section className="content">
            <div className = "box box-solid">
                <div className="box-header">
                    <h3>Convert string</h3>
                </div>
                <div className="box-body">
                    <form className="form">
                        <label className="control-label"></label>
                    </form>
                </div>
            </div>
        </section>
    </div>;
};

export default Dom;
