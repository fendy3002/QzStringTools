import React from 'react';
import lo from 'lodash';
import RSelect from 'react-select';
import Highlighter from 'react-highlight-words';
import 'react-select/dist/react-select.css';
import SelectOption from './SelectOption.js';
import SelectedCommandPanel from './SelectedCommandPanel.js';

var Dom = function({filter, config,
    setSelectedCommand, convertInput}){
    var refTextInput = null;
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
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label className="control-label">Command</label>
                                    <SelectOption
                                        filter={filter}
                                        config={config}
                                        setSelectedCommand={setSelectedCommand} />
                                </div>
                                <div className="form-group">
                                    <SelectedCommandPanel filter={filter}/>
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label className="control-label">Text</label>
                                    <textarea className="form-control" rows="8"
                                        ref={ node => refTextInput = node }></textarea>
                                </div>
                                <div className="form-group text-right">
                                    <button type="button"
                                        className="btn btn-flat btn-primary"
                                        onClick={() => convertInput(refTextInput.value, filter.selectedCommand)}>Convert</button>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="form-group">
                                    <label className="control-label">Result</label>
                                    <textarea className="form-control disabled"
                                        readonly="readonly" disabled="disabled"
                                        rows="12" value={filter.convertedInput}></textarea>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </div>;
};

export default Dom;
