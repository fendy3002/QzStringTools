export default {
	"handler" : [
		{
			"code": "_space",
			"name": "Space delimiter",
			"type": "delimiter",
			"delimiter": " "
		},
		{
			"code": "_tab",
			"name": "Tab delimiter",
			"type": "delimiter",
			"delimiter": "\t"
		},
		{
			"code": "newline",
			"name": "Newline delimiter",
			"type": "delimiter",
			"delimiter": "\n"
		},
		{
			"code": "comma",
			"name": "Comma delimiter",
			"type": "delimiter",
			"delimiter": ","
		},
		{
			"code": "semicolon",
			"name": "Semicolon delimiter",
			"type": "delimiter",
			"delimiter": ";"
		},
		{
			"code": "pipe",
			"name": "Pipe delimiter",
			"type": "delimiter",
			"delimiter": "|"
		},
		{
			"code": "double-pipe",
			"name": "Double pipe delimiter",
			"type": "delimiter",
			"delimiter": "||"
		},
		{
			"code": "php-object",
			"name": "PHP object prefix",
			"type": "surround",
			"start": "$*->",
			"end": ""
		},
		{
			"code": "php-array-arrow",
			"name": "PHP array arrow",
			"type": "delimiter",
			"delimiter": "=>"
		},
		{
			"code": "equal-delimiter",
			"name": "Equal sign delimiter",
			"type": "delimiter",
			"delimiter": "="
		},

		{
			"code": "single-quote",
			"name": "Single quote surround",
			"type": "surround",
			"start": "'",
			"end": "'"
		},
		{
			"code": "double-quote",
			"name": "Double quote surround",
			"type": "surround",
			"start": '"',
			"end": '"'
		},
		{
			"code": "aspace",
			"name": "Space delimiter",
			"type": "surround",
			"start": " ",
			"end": ""
		},
		{
			"code": "zspace",
			"name": "Space delimiter",
			"type": "surround",
			"start": "",
			"end": " "
		},
		{
			"code": "zcomma",
			"name": "Comma end",
			"type": "surround",
			"start": "",
			"end": ","
		},
		{
			"code": "acomma",
			"name": "Comma start",
			"type": "surround",
			"start": ",",
			"end": ""
		},
		{
			"code": "zsemicolon",
			"name": "Semicolon end",
			"type": "surround",
			"start": "",
			"end": ";"
		},
		{
			"code": "asemicolon",
			"name": "Semicolon start",
			"type": "surround",
			"start": ";",
			"end": ""
		},
		{
			"code": "atab",
			"name": "Tab start",
			"type": "surround",
			"start": "\t",
			"end": ""
		},
		{
			"code": "ztab",
			"name": "Tab end",
			"type": "surround",
			"start": "",
			"end": "\t"
		},
		{
			"code": "sql-drop-table",
			"name": "SQL drop table",
			"type": "surround",
			"start": "drop table ",
			"end": ";"
		}
	],
	"combination" : [
		{
			"code": "1",
			"name": {
				"input": "newline comma",
				"output": "single quote comma newline"
			},
			"handlers": {
				"input" : ['newline', 'comma'],
				"output" : ['comma', 'single-quote', 'newline']
			}
		},
		{
			"code": "php-array-to-object",
			"name": {
				"input": "PHP Array",
				"output": "PHP object"
			},
			"handlers": {
				"input" : ['newline', 'zcomma', 'atab', 'php-array-arrow', 'zspace', 'double-quote'],
				"output" : ['equal-delimiter', 'php-object', 'zsemicolon', 'newline']
			}
		}
	]
};
