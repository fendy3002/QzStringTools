import React from 'react';
import lo from 'lodash';
import StringTool from '../../../../../../src/StringTool.js';

var ConfigList = function({config}){
    var delimiterTemplate = cfg => {
        return <div className="box box-primary">
            <div className="box-body">
                <table className="table table-condensed table-striped">
                    <tbody>
                        <tr>
                            <th>Code</th>
                            <td>{cfg.code}</td>
                        </tr>
                        <tr>
                            <th>Delimiter</th>
                            <td><input type="text" className="form-control" disabled
                                value={StringTool.toPrintable(cfg.delimiter)} /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>;
    };
    var surroundTemplate = cfg => {
        return <div className="box box-primary">
            <div className="box-body">
                <table className="table table-condensed table-striped">
                    <tbody>
                        <tr>
                            <th>Code</th>
                            <td>{cfg.code}</td>
                        </tr>
                        <tr>
                            <th>Start</th>
                            <td><input type="text" className="form-control" disabled
                                value={StringTool.toPrintable(cfg.start)} /></td>
                        </tr>
                        <tr>
                            <th>End</th>
                            <td><input type="text" className="form-control" disabled
                                value={StringTool.toPrintable(cfg.end)} /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>;
    };

    var delimiterHandler = lo.filter(config.handler, k=> k.type == "delimiter");
    var surroundHandler = lo.filter(config.handler, k=> k.type == "surround");

    var configsDomDelimiter = lo.map(delimiterHandler, delimiterTemplate);
    var configsDomSurround = lo.map(surroundHandler, surroundTemplate);
    return <div>
        <section className="content-header">
            <h1>
                <b>Config Lists</b>
            </h1>
        </section>
        <section className="content">
            <div className = "box box-solid">
                <div className="box-header">
                    <h3>Handlers</h3>
                </div>
                <div className="box-body">
                    <div className="col-sm-6">
                        {configsDomDelimiter}
                    </div>
                    <div className="col-sm-6">
                        {configsDomSurround}
                    </div>
                </div>
            </div>
        </section>
    </div>;
};

export default ConfigList;
