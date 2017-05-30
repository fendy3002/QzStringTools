import React from 'react';
import lo from 'lodash';
import RSelect from 'react-select';
import Highlighter from 'react-highlight-words';
import 'react-select/dist/react-select.css';

var Dom = function({filter}){
    var command = filter.selectedCommand;
    return <table className="table table-condensed table-striped table-bordered"
        style={{ fontSize:"11px" }}>
        <tbody>
            <tr>
                <th>Code</th>
                <td>{command.code}</td>
                <th></th>
                <td></td>
            </tr>
            <tr>
                <th>Name (input)</th>
                <td>{command.name.input}</td>
                <th>(output)</th>
                <td>{command.name.output}</td>
            </tr>
            <tr>
                <th>Handlers (input)</th>
                <td><span dangerouslySetInnerHTML={
                    {__html: printHandler(command.handlers.input) }}></span></td>
                <th>(output)</th>
                <td><span dangerouslySetInnerHTML={
                    {__html: printHandler(command.handlers.output) }}></span></td>
            </tr>
        </tbody>
    </table>;
};

var printHandler = function(handlers){
    return JSON.stringify(handlers)
        .replace(/,/g, ", " )
        .replace(/\[/g, "<b>[</b> ")
        .replace(/\]/g, "<b>]</b> ");
};

export default Dom;
