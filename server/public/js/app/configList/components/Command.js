import React from 'react';

var CommandList = function({command}){
    return <div className="box box-primary">
            <div className="box-body">
                <table className="table table-condensed table-striped">
                    <tbody>
                        <tr>
                            <th>Code</th>
                            <td>{command.code}</td>
                        </tr>
                        <tr>
                            <th>Name (Input)</th>
                            <td>{ command.name.input }</td>
                        </tr>
                        <tr>
                            <th>Name (Output)</th>
                            <td>{ command.name.output }</td>
                        </tr>
                        <tr>
                            <th>Handler (Input)</th>
                            <td>{ JSON.stringify(command.handlers.input)
                                .replace(/,/g, ", " )
                                .replace(/\[/g, "[ ")
                                .replace(/\]/g, "] ") }</td>
                        </tr>
                        <tr>
                            <th>Handler (Output)</th>
                            <td>{ JSON.stringify(command.handlers.output)
                                .replace(/,/g, ", " )
                                .replace(/\[/g, "[ ")
                                .replace(/\]/g, "] ") }</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>;
};

export default CommandList;
