export default {
	"handler" : [
		{
			"code": "space-delimiter",
			"name": "Space delimiter",
			"type": "delimiter",
			"delimiter": " "
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
			"code": "single-quote",
			"name": "Single quote surround",
			"type": "surround",
			"start": "'",
			"end": "'"
		},
		{
			"code": "space-surround",
			"name": "Space delimiter",
			"type": "surround",
			"start": " ",
			"end": " "
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
			"name": {
				"input": "newline comma",
				"output": "single quote comma newline"
			},
			"handlers": {
				"input" : ['newline', 'comma'],
				"output" : ['comma', 'single-quote', 'newline']
			}
		}
	]
};