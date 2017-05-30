"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = {
	"handler": [{
		"code": "_space",
		"name": "Space delimiter",
		"type": "delimiter",
		"delimiter": " "
	}, {
		"code": "_tab",
		"name": "Tab delimiter",
		"type": "delimiter",
		"delimiter": "\t"
	}, {
		"code": "_newline",
		"name": "Newline delimiter",
		"type": "delimiter",
		"delimiter": "\n"
	}, {
		"code": "_comma",
		"name": "Comma delimiter",
		"type": "delimiter",
		"delimiter": ","
	}, {
		"code": "_semicolon",
		"name": "Semicolon delimiter",
		"type": "delimiter",
		"delimiter": ";"
	}, {
		"code": "_pipe",
		"name": "Pipe delimiter",
		"type": "delimiter",
		"delimiter": "|"
	}, {
		"code": "_dpipe",
		"name": "Double pipe delimiter",
		"type": "delimiter",
		"delimiter": "||"
	}, {
		"code": "_darrow",
		"name": "Double arrow",
		"type": "delimiter",
		"delimiter": "=>"
	}, {
		"code": "_sarrow",
		"name": "Single arrow",
		"type": "delimiter",
		"delimiter": "->"
	}, {
		"code": "_equal",
		"name": "Equal sign delimiter",
		"type": "delimiter",
		"delimiter": "="
	}, {
		"code": "_colon",
		"name": "Colon sign delimiter",
		"type": "delimiter",
		"delimiter": ":"
	}, {
		"code": "aphp-object",
		"name": "PHP object prefix",
		"type": "surround",
		"start": "$*->",
		"end": ""
	}, {
		"code": "a-squote",
		"name": "Single quote surround",
		"type": "surround",
		"start": "'",
		"end": ""
	}, {
		"code": "z-squote",
		"name": "Single quote surround",
		"type": "surround",
		"start": "",
		"end": "'"
	}, {
		"code": "a-dquote",
		"name": "Double quote surround",
		"type": "surround",
		"start": '"',
		"end": ''
	}, {
		"code": "z-dquote",
		"name": "Double quote surround",
		"type": "surround",
		"start": '',
		"end": '"'
	}, {
		"code": "aspace",
		"name": "Space delimiter",
		"type": "surround",
		"start": " ",
		"end": ""
	}, {
		"code": "zspace",
		"name": "Space delimiter",
		"type": "surround",
		"start": "",
		"end": " "
	}, {
		"code": "zcomma",
		"name": "Comma end",
		"type": "surround",
		"start": "",
		"end": ","
	}, {
		"code": "acomma",
		"name": "Comma start",
		"type": "surround",
		"start": ",",
		"end": ""
	}, {
		"code": "zsemicolon",
		"name": "Semicolon end",
		"type": "surround",
		"start": "",
		"end": ";"
	}, {
		"code": "asemicolon",
		"name": "Semicolon start",
		"type": "surround",
		"start": ";",
		"end": ""
	}, {
		"code": "atab",
		"name": "Tab start",
		"type": "surround",
		"start": "\t",
		"end": ""
	}, {
		"code": "ztab",
		"name": "Tab end",
		"type": "surround",
		"start": "",
		"end": "\t"
	}, {
		"code": "asql-drop-table",
		"name": "SQL drop table",
		"type": "surround",
		"start": "drop table ",
		"end": ""
	}, {
		"code": "azsql-select-unionall",
		"name": "Surround SQL select union all",
		"type": "surround",
		"start": "select ",
		"end": "union all"
	}],
	"command": [{
		"code": "sql-single-quote",
		"name": {
			"input": "newline comma",
			"output": "single quote comma newline"
		},
		"handlers": {
			"input": ['_newline', '_comma', ['aspace', 'zspace']],
			"output": [['a-squote', 'z-squote'], ['_comma', 'zspace'], '_newline']
		}
	}, {
		"code": "sql-drop-table",
		"name": {
			"input": "newline",
			"output": "drop table syntax"
		},
		"handlers": {
			"input": ['_newline'],
			"output": [['asql-drop-table', 'zsemicolon'], '_newline']
		}
	}, {
		"code": "tabbed-sql-select-union-all",
		"name": {
			"input": "newline tab",
			"output": "sql union all"
		},
		"handlers": {
			"input": ['_newline', '_tab', ['aspace', 'zspace']],
			"output": [['a-squote', 'z-squote'], ['_comma', 'zspace'], 'azsql-select-unionall', '_newline']
		}
	}, {
		"code": "php-array-to-object",
		"name": {
			"input": "PHP Array",
			"output": "PHP object"
		},
		"handlers": {
			"input": ['_newline', ['zcomma', 'atab'], '_darrow', ['zspace', 'aspace'], ['a-dquote', 'z-dquote']],
			"output": [['_equal', 'aspace', 'zspace'], ['atab', 'atab', 'aphp-object', 'zsemicolon'], '_newline']
		}
	}, {
		"code": "php-array-to-json",
		"name": {
			"input": "PHP Array",
			"output": "Json"
		},
		"handlers": {
			"input": [['acomma', '_newline'], 'atab', '_darrow', ['zspace', 'aspace']],
			"output": [['_colon', 'aspace', 'zspace'], ['atab', 'atab'], ['_newline', 'acomma']]
		}
	}, {
		"code": "php-object-to-json",
		"name": {
			"input": "PHP Object",
			"output": "Json"
		},
		"handlers": {
			"input": ['_newline', 'zsemicolon', 'atab', 'aphp-object', '_equal', ['zspace', 'aspace']],
			"output": [['a-dquote', 'z-dquote', 0], ['_colon', 'aspace', 'zspace'], ['atab', 'atab'], ['_newline', 'acomma']]
		}
	}]
};