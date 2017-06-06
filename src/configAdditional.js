export default {
	"handler" : [
		{
			"code": "azasterisk",
			"name": "Surround with asterisk",
			"type": "surround",
			"start": "*",
			"end": "*"
		}
	],
	"command" : [
		{
			"code": "newline to asterisk",
			"name": {
				"input": "newline delimited",
				"output": "asterisk"
			},
			"handlers": {
				"input" : ['_newline', ['aspace', 'zspace']],
				"output" : [['azasterisk'], ['_newline', 'acomma']]
			}
		}
	]
};
