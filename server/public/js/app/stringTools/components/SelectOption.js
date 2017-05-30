import React from 'react';
import lo from 'lodash';

import RSelect from 'react-select';
import Highlighter from 'react-highlight-words';
import 'react-select/dist/react-select.css';

var Dom = function({filter, config,
        setSelectedCommand}){
    var searchKeyword = {value: ""};
    var renderOption = option => {
        return <Highlighter
              searchWords={[searchKeyword.value]}
              textToHighlight={option.name.input + " to " + option.name.output}
            />;
    };
    var renderValue = option => {
        if(!option.name){
            return <span></span>;
        }
        return <span><strong>{option.name.input}</strong> to <strong>{option.name.output}</strong></span>
    };
    var filterOption = function(op, filterValue) {
        return op.name.input.toLowerCase().search(filterValue) > -1
            || op.name.output.toLowerCase().search(filterValue) > -1
            || (op.name.input.toLowerCase() + " to " + op.name.output.toLowerCase()).search(filterValue) > -1;
    };

    return <RSelect options={config.command}
        onChange={setSelectedCommand}
        onInputChange={k=> searchKeyword.value = k}
        valueRenderer={renderValue}
        optionRenderer={renderOption}
        value={filter.selectedCommand}
        clearable={true}
        filterOption={filterOption}></RSelect>
};

export default Dom;
