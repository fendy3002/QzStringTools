import React from 'react';
import lo from 'lodash';
import Command from './Command.js';
import StringTool from '../../../../../../src/index.js';

var ConfigList = function({config, 
    setConfigUrl}){
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

    var delimiterHandler = lo.chain(config.handler).filter(k=> k.type == "delimiter")
        .sortBy(k => k.code).value();
    var surroundHandler = lo.chain(config.handler).filter(k=> k.type == "surround")
        .sortBy(k => k.code).value();

    var configsDomDelimiter = lo.map(delimiterHandler, delimiterTemplate);
    var configsDomSurround = lo.map(surroundHandler, surroundTemplate);

    var commandDom = lo.map(config.command, k=> <Command command={k} />);
    var additionalConfigUrlDom = null;
    return <div>
        <section className="content-header">
            <h1>
                <b>Config Lists</b>
            </h1>
        </section>
        <section className="content">
            <div className = "box box-primary">
                <div className="box-header">
                    <h3>Additional config</h3>
                </div>
                <div className="box-body">
                    <form className="form">
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label className="control-label">Url</label>
                                <input type="text" className="form-control" 
                                    ref={node => additionalConfigUrlDom = node }
                                    defaultValue={config.configUrl} />
                            </div>
                            <div className="form-group text-right">
                                <button type="button" className="btn btn-flat btn-primary"
                                    onClick={() => setConfigUrl(additionalConfigUrlDom.value) }>
                                    Update
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
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
            <div className = "box box-solid">
                <div className="box-header">
                    <h3>Commands</h3>
                </div>
                <div className="box-body">
                    {commandDom}
                </div>
            </div>
        </section>
    </div>;
};

export default ConfigList;
